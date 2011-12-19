#Thematic PJAX

> Adds AJAX requests to Thematic navigation so you can navigate your site without full page refreshes. Only the content data is loaded. Uses jquery-pjax.

*Thematic PJAX* [makes WordPress dynamic](http://blog.stackd.com/post/14381485031/making-wordpress-dynamic-thematic-pjax) and adds PJAX to the Thematic Theme Framework. [PJAX](http://pjax.heroku.com/) "loads html from your server into the current page without a full page load. It's AJAX with real permalinks, page titles, and a working back button that fully degrades." Browsing just "feels faster" and makes mixing and matching static and dynamic site elements a breeze. By default, PJAX loads content asynchronously within the `#main` div, providing load once static functionality to the header and the footer.

#Why Thematic PJAX?

##Standing on the shoulders of giants

[Thematic](http://themeshaper.com/thematic/) is a popular CMS/theme framework made by the [same team](http://automattic.com/) that develops [WordPress](http://wordpress.org/), the world's most popular web publishing software. By embracing convention over configuration, Thematic provides an extensible foundation and rich canvas to begin any WordPress project.

##Seamless dynamism

A Thematic child theme, Thematic PJAX is a drop in solution to creating asynchronous WordPress layouts. It looks and feels just like any Thematic project. However, as designed, content is dynamically loaded, while header and footer sections remain static, perfect for dynamic single page style layouts, all without the mess of `#!` [hashbang URIs](http://www.webmonkey.com/2011/02/gawker-learns-the-hard-way-why-hash-bang-urls-are-evil/). Finally, [page templates](http://codex.wordpress.org/Pages#Page_Templates), widgets, and [custom functions](https://github.com/wayoutmind/thematic-pjax/blob/master/functions.php#L9-17) all work as expected.

#Getting Started

1. Install [Thematic](http://wordpress.org/extend/themes/thematic).
2. [Download](https://github.com/downloads/wayoutmind/thematic-pjax/thematic-pjax-0.1.zip) and extract thematic-pjax in the WordPress `themes` folder.
3. Add [custom functionality](https://github.com/wayoutmind/thematic-pjax/blob/master/functions.php#L9-17) in `functions.php` and [style to taste](https://github.com/wayoutmind/thematic-pjax/blob/master/style.css) within `style.css`.
4. PJAX functionality is controlled by the Thematic navigation menu. To override this behavior, modify `thematic-pjax.js`.
5. Activate the Thematic PJAX theme in the WordPress Dashboard.

#License and Attribution

MIT/X11 - See [LICENSE](https://github.com/wayoutmind/thematic-pjax/blob/master/LICENSE)

Thematic PJAX is built on the work of the [Thematic Theme Framework](http://wordpress.org/extend/themes/thematic), [pjax-menu](http://wordpress.org/extend/plugins/pjax-menu/), and [jquery-pjax](https://github.com/defunkt/jquery-pjax).
