(function($){
    $(document).ready(function() {
        /** Load PJAX on navigation interaction
          */
        $('.menu a').pjax('#main').click(function() { //[Option] Change '.menu a' to desired PJAX control element
           $('.current_page_item').removeClass('current_page_item');
           $(this).parent().addClass('current_page_item');
        });
        /** Watch PJAX requests so metadata in document can be modified dynamically
          */
        $('body').bind('pjax:start', function() {
            $(this).ajaxSuccess(function(event, request, settings) {
                // CSS template
                var classes = $(this).attr('class');
                var template = request.getResponseHeader('X-Thematic-Template');
                if (classes.indexOf(template) === -1) {
                    $(this).attr('class', classes.replace(/page-template-([^\s]+)/, template));
                }
                var link = {
                  canonical: request.getResponseHeader('X-Link-Canonical'),
                  previous: request.getResponseHeader('X-Link-Previous'),
                  next: request.getResponseHeader('X-Link-Next')
                }
                var title = {
                  previous: request.getResponseHeader('X-Title-Previous'),
                  next: request.getResponseHeader('X-Title-Next')
                }
                // Canonical link
                $('link[rel="canonical"]').attr('href', link.canonical);
                // Previous link
                $('link[rel="prev"]').attr('href', link.previous);
                $('link[rel="prev"]').attr('title', title.previous);
                if ($('link[rel="prev"]').length === 0) {
                  $('head').append('<link rel="previous" title="' + title.previous + '" href="' + link.previous + '" />');
                }
                // Next link
                $('link[rel="next"]').attr('href', link.next);
                $('link[rel="next"]').attr('title', title.next);
                if ($('link[rel="next"]').length === 0) {
                  $('head').append('<link rel="previous" title="' + title.next + '" href="' + link.next + '" />');
                }
            });
        });
    });
})(jQuery);