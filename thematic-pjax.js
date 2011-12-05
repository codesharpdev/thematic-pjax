(function($){
    $(document).ready(function() {

        // Load PJAX on navigation interaction
        $('.menu a').pjax('#main').click(function() {
           $('.current_page_item').removeClass('current_page_item');
           $(this).parent().addClass('current_page_item');
        });

        // Watch PJAX requests so meta data in document can be modified accordingly
        $('body').bind('pjax:start', function() {
            $(this).ajaxSuccess(function(event, request, settings) {
                // CSS template
                var classes = $(this).attr('class');
                var template = request.getResponseHeader('X-Thematic-Template');
                if (classes.indexOf(template) === -1) {
                    $(this).attr('class', classes.replace(/page-template-([^\s]+)/, template));
                }
                // Canonical link
                request.getResponseHeader('X-Link-Canonical');
                // Index link
                // Previous link
                // Next link
            });
        });
    });
})(jQuery);