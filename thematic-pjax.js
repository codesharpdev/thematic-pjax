(function($){
  jQuery.cookie=function(a,b,c){if(arguments.length>1&&String(b)!=="[object Object]"){c=jQuery.extend({},c);if(b===null||b===undefined)c.expires=-1;if(typeof c.expires=="number"){var d=c.expires,e=c.expires=new Date;e.setDate(e.getDate()+d)}b=String(b);return document.cookie=[encodeURIComponent(a),"=",c.raw?b:encodeURIComponent(b),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}c=b||{};var f,g=c.raw?function(a){return a}:decodeURIComponent;return(f=(new RegExp("(?:^|; )"+encodeURIComponent(a)+"=([^;]*)")).exec(document.cookie))?g(f[1]):null}
    $(document).ready(function() {
      $(':checkbox').attr('checked', $.cookie('pjax'))

        if ( !$(':checkbox').attr('checked') )
          $.fn.pjax = $.noop

        $(':checkbox').change(function() {
          if ( !$.support.pjax ) {
            $(this).removeAttr('checked')
            return alert( "Sorry, your browser doesn't support pjax :(" )
          }

          if ( $(this).attr('checked') )
            $.cookie('pjax', true)
          else
            $.cookie('pjax', null)

          window.location = location.href
        });
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