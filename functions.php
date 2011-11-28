<?php
/**
 * Thematic PJAX
 * A Thematic child theme made responsive
 */

require('thematic-pjax.php');

// Begin custom functionality
#function Hello() {
#    if (is_front_page()) {
#        echo 'Hello World!';   
#    }
#};

#add_filter('thematic_abovecontainer', 'Hello');
// End custom functionality


// Load Thematic PJAX
add_action('get_header', 'ThematicPJAX::load');
add_filter('get_header', 'ThematicPJAX::render');
?>