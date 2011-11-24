<?php
/*
Plugin Name: Thematic PJAX
Plugin URI: https://github.com/wayoutmind/thematic-pjax
Description: A Wordpress plugin that adds PJAX to the Thematic Theme Framework.
Version: 0.1
Author: Fredrick Galoso
Author http://fredrickgaloso.me
License: MIT/X11, see LICENSE
*/

define('THEMATICPJAX_PLUGIN_URL', plugin_dir_url( __FILE__ ));

class ThematicPJAX {
	public static function load() {
		wp_enqueue_script('pjax', THEMATICPJAX_PLUGIN_URL . 'pjax/jquery.pjax.js', array('jquery'));
		wp_enqueue_script('pjax_menu', THEMATICPJAX_PLUGIN_URL . 'pjax_menu.js', array('jquery', 'pjax'));
	}

	public static function getTemplate() {
		if (array_key_exists('HTTP_X_PJAX', $_SERVER) && $_SERVER['HTTP_X_PJAX']) {
		  
		  global $wp_query;
      $template_name = get_post_meta( $wp_query->post->ID, '_wp_page_template', true );
      if ($template_name == 'default') {
        include('templates/page.php');
        exit;
      } else {
        include('templates/' . $template_name);
  			exit;
      }
		}
	}
}

add_action('get_header', 'ThematicPJAX::load');
add_filter('template_redirect', 'ThematicPJAX::getTemplate');
?>
