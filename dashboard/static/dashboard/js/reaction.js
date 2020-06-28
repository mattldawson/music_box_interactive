function deepEqual(a, b) {
  return JSON.stringify(a) == JSON.stringify(b);
}

function reactionId(reaction, reactions) {
  var instance = 0;
  var id = '';
  for (key in reactions) {
    if (deepEqual(reaction.reactants, reactions[key].reactants)) {
      instance += 1;
      if (deepEqual(reaction, reactions[key])) {
        for (react_key in reaction.reactants) {
          if (react_key == 0) {
            id = reaction.reactants[react_key];
          } else {
            id += '_' + reaction.reactants[react_key];
          }
        }
        id += '_' + instance;
        break;
      }
    }
  }
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

