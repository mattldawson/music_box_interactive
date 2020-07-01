/**
 *  Navigation functions
 */
function navSetLinks() {

  $('.nav-links').on('click', '.link-run-model', function() {
		location.href="run_model"
	});
  $('.nav-links').on('click', '.link-species', function() {
    location.href="species"
	});
  $('.nav-links').on('click', '.link-reactions', function() {
		location.href="reactions"
	});
  $('.nav-links').on('click', '.link-visualize', function() {
		location.href="visualize"
	});
  $('.nav-links').on('click', '.link-download', function() {
    location.href="model_driver/download"
  });

}

function updateNavStatus() {

  $.ajax({
    url: 'model_driver/check_status',
    type: 'get',
    success: function(response) {
      if (response.status == "done") {
        if (!$('.link-visualize').length) {
          $(".nav-links").append(`
            <li class="nav-item px-1.5"><a class="nav-link p-2 link-visualize" href="#"><span
                class="oi oi-graph" toggle="tooltip" title="visualize the results"></span></a></li>`);
        }
        if (!$('.link-download').length) {
          $(".nav-links").append(`
            <li class="nav-item px-1.5"><a class="nav-link p-2 link-download" href="#"><span
                class="oi oi-data-transfer-download" toggle="tooltip" title="download the results"></span></a></li>`);
        }
      } else {
        $('.link-visualize').remove();
        $('.link-download').remove();
      }
    }
  });

}

