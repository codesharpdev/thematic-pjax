#Thematic PJAX

> Adds AJAX requests to Thematic navigation so you can navigate your site without full page refreshes. Only the content data is loaded. Uses jquery-pjax.

*Thematic PJAX* adds PJAX to the Thematic Theme Framework. [PJAX](http://pjax.heroku.com/) "loads html from your server into the current page without a full page load. It's AJAX with real permalinks, page titles, and a working back button that fully degrades." Browsing just "feels faster" and makes mixing and matching static with dynamic site elements a breeze. By default, PJAX loads content asynchronously within the `main` div, providing load once static functionality to the header and the footer.

Thematic PJAX is built on the work of the [Thematic Theme Framework](http://wordpress.org/extend/themes/thematic), [pjax-menu](http://wordpress.org/extend/plugins/pjax-menu/), and [jquery-pjax](https://github.com/defunkt/jquery-pjax).

#License

MIT/X11 - See [LICENSE](https://github.com/wayoutmind/thematic-pjax/blob/master/LICENSE)

#Getting Started

1. Install [Thematic](http://wordpress.org/extend/themes/thematic).
2. Download and put thematic-pjax in the Wordpress `themes` folder.
3. Define PJAX behavior in `functions.php`.
  - For best results, the PJAX template type should be the same as the static template (regular page load) and the template should be consistent site wide.
4. PJAX functionality is controlled by the Thematic navigation menu. To override this behavior, modify `pjax_menu.js`.