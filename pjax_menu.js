(function($){
	// TODO: adjust this selector based on the available menus
	var menuLinkSelector = '.menu a';

	$(document).ready(function() {
		$(menuLinkSelector).pjax('#main')
			.live('click', function() {
			});
	});
})(jQuery);
