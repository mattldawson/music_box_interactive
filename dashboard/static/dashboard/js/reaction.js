function deepEqual(a, b) {
  return JSON.stringify(a) == JSON.stringify(b);
}

// Id without the count at the end
function rawId(reaction) {
  if(reaction.reactants.length == 0){
    id = "None";
  } else {
    id = reaction.reactants.sort().join("_");
  }

  if (reaction.reactionBranch) {
    id += "_" + reaction.reactionBranch;
  }

  if (reaction.troe) {
    id += "_M";
  }
  return id;
}

function reactionId(reaction, reactions) {
  var id = rawId(reaction);
  var count = 1;
  for (r in reactions) {
    if (deepEqual(reactions[r], reaction)) break;
    if (rawId(reactions[r]) == id) count++;
  }
  id += "_" + count;
  return id;
}

function reactionName(type, reaction, reactions) {
  var name = '';
  for (key in reactions) {
    if (deepEqual(reaction, reactions[key])) {
      for (react_key in reaction.reactants) {
        if (react_key == 0) {
          name += reaction.reactants[react_key];
        } else {
          name += ' + ' + reaction.reactants[react_key];
        }
      }
      if (type == 'photolysis') name += ' + hv';
      name += ' -> ';
      for (prod_key in reaction.products) {
        if (prod_key == 0) {
          if (reaction.products[prod_key].coefficient == 1) {
            name += reaction.products[prod_key].molecule;
          } else {
            name += reaction.products[prod_key].coefficient + reaction.products[prod_key].molecule;
          }
        } else {
          if (reaction.products[prod_key].coefficient == 1) {
            name += ' + ' + reaction.products[prod_key].molecule;
          } else {
            name += ' + ' + reaction.products[prod_key].coefficient + reaction.products[prod_key].molecule;
          }
        }
      }
      break;
    }
  }
  return name;
}

