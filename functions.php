<?php
/**
 * Thematic PJAX
 * A Thematic child theme made responsive
 */

include('pjax.php');

add_action('get_header', 'ThematicPJAX::load');
add_filter('template_redirect', 'ThematicPJAX::FullWidth');
?>