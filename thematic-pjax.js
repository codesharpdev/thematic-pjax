(function($){
	$(document).ready(function() {

	    // Load PJAX on navigation interaction
		$('.menu a').pjax('#main').click(function() {
		   $('.current_page_item').removeClass('current_page_item');
		   $(this).parent().addClass('current_page_item');
		});

		// Watch PJAX requests so meta data in <head> can be modified accordingly
		$(document).ajaxSuccess(function(event, request, settings) {
		    console.log(request.getAllResponseHeaders());
		});
	});
})(jQuery);