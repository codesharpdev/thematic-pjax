(function($){
	$(document).ready(function() {
		$('.menu a').pjax('#main')
			.live('click', function() {
		});
	});
})(jQuery);
