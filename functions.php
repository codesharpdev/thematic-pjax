<?php
/**
 * Thematic PJAX
 * A Thematic child theme made responsive
 */

require('thematic-pjax.php');

/** Begin custom functionality **/
function Hello() {
    echo '<div style="margin-left: 20px;">
            <blockquote>
                <p>
                    Check the box to toggle pjax.<br />
                    Whenever the time changes, a full page load has happened.<br />
                    If the time doesn&#39;t change, no full page load has occurred.
                </p>
            </blockquote>
            <pre style="font-size: 12px; font-family: monospace; line-height: normal;">
               ／￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
               |　<b>It&#39;s&nbsp;<script type="text/javascript">document.write(new Date().toTimeString());</script></b>
               ＼＿　 ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
        .--.     (  )
       /    \   ( )
      ## a  a  .
      (   `._)
       |`-- |
     _.\___/_   ___<label><input type="checkbox" name="pjax">pjax</label>___
   ."\&gt; \Y/|&lt;`.  `._.-`
  /  \ \_\/ /  `-` /
  | --`\_/|/ |   _/
  |___.-` |  |```
    |     |  |
    |    / `./
   /__./` | |
      \   | |
       \  | |
       ;  | |
       /  | |
 jgs  |___\_.\_
      `-"--`---`

<a href="https://github.com/wayoutmind/thematic-pjax">github.com/wayoutmind/thematic-pjax</a>
</pre></div>';
}

add_filter('thematic_abovefooter', 'Hello');
/** End custom functionality **/

// Load Thematic PJAX
add_action('get_header', 'ThematicPJAX::load');
add_filter('get_header', 'ThematicPJAX::render');
?>