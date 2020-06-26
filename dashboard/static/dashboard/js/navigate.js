/**
 *  Navigation functions
 */
function navSetLinks() {

	$(".link-run-model").click(function() {
		location.href="run_model"
	});
	$(".link-species").click(function() {
		location.href="species"
	});
	$(".link-reactions").click(function() {
		location.href="reactions"
	});
	$(".link-visualize").click(function() {
		location.href="visualize"
	});

}
