(function($){
	$(document).ready(function() {
		$('.menu a').pjax('#main').click(function() {
		   $('.current_page_item').removeClass('current_page_item');
		   $(this).parent().addClass('current_page_item');
		});
	});
})(jQuery);
