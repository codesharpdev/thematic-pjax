<?php
/**
 * Thematic PJAX
 * A Thematic child theme made responsive
 */

define('THEMATICPJAX_URL', get_bloginfo('stylesheet_directory'));

class ThematicPJAX {
	public static function load() {
		wp_enqueue_script('pjax', THEMATICPJAX_URL . '/pjax/jquery.pjax.js', array('jquery'));
		wp_enqueue_script('pjax_menu', THEMATICPJAX_URL . '/pjax_menu.js', array('jquery', 'pjax'));
	}


  /**
   * PJAX render templates
   */
  # Default template
	public static function Page() {
		if (array_key_exists('HTTP_X_PJAX', $_SERVER) && $_SERVER['HTTP_X_PJAX']) {
      include('templates/page.php');
      exit;
		}
	}

  # Full width content template
	public static function FullWidth() {
		if (array_key_exists('HTTP_X_PJAX', $_SERVER) && $_SERVER['HTTP_X_PJAX']) {
		  
		  # Example: Conditional template based on post's template (defined via Wordpress Administration)
		  # global $wp_query;
      # $template_name = get_post_meta( $wp_query->post->ID, '_wp_page_template', true );
      
      include('templates/template-page-fullwidth.php');
      exit;
      
		}
	}
	
	# Blog content template
	public static function Blog() {
		if (array_key_exists('HTTP_X_PJAX', $_SERVER) && $_SERVER['HTTP_X_PJAX']) {
      include('templates/template-page-blog.php');
      exit;
		}
	}
	
	# Archives template
	public static function Archives() {
		if (array_key_exists('HTTP_X_PJAX', $_SERVER) && $_SERVER['HTTP_X_PJAX']) {
      include('templates/archives.php');
      exit;
		}
	}
	
	# Links template
	public static function Links() {
		if (array_key_exists('HTTP_X_PJAX', $_SERVER) && $_SERVER['HTTP_X_PJAX']) {
      include('templates/links.php');
      exit;
		}
	}
}
?>