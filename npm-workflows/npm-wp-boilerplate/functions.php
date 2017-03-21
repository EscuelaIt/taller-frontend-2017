<?php
function guauguau_setup() {
	add_theme_support( 'post-thumbnails' );

	$html5_opts = array(
		'comment-list',
		'comment-form',
		'search-form',
		'gallery',
		'caption'
	);

	add_theme_support( 'html5', $html5_opts );
 
	//Ocultar la versión de WordPress del head
	remove_action( 'wp_head', 'wp_generator' );
	
	$locations = array(
		'menu_main' => 'Menú Principal',
		'menu_social' => 'Menú Redes Sociales'
	);

	register_nav_menus( $locations );
}

add_action('after_setup_theme', 'guauguau_setup');

add_filter('excerpt_more', function () {
	return '&nbsp;<a href="' . get_permalink() . '">leer más...</a>';
});

add_filter('excerpt_length', function () {
	return 20;
});

add_filter('wp_title', function ($title) {
	if ( empty($title) || is_home () || is_front_page() ) {
		$title = get_bloginfo('name');
	} else if ( is_category() || is_tag() ) {
		$title = single_term_title() . '&nbsp;|&nbsp;' . get_bloginfo('name');
	} else if ( is_single() || is_page() ) {
		$title = single_post_title() . '&nbsp;|&nbsp;' . get_bloginfo('name');
	} else {
		$title .= '&nbsp;|&nbsp;' . get_bloginfo('name'); 
	}

	return trim($title);
});

function wp_description() {
	if ( is_home () || is_front_page() ) {
		$description = get_bloginfo('description');
	} else if ( is_category() || is_tag() ) {
		$description = strip_tags( term_description() );
	} else if ( is_single() || is_page() ) {
		the_post();
		$excerpt = explode( '&nbsp;', get_the_excerpt() );
		$description = htmlentities( $excerpt[0] , ENT_HTML5, 'UTF-8' );
		rewind_posts();
	} else if ( is_author() ) {
		$description = get_the_author_meta('description');
	} else {
		$description = '';
	}

	return print $description;
}

add_action('wp_enqueue_scripts', function () {
	//wp_enqueue_style( 'slider', get_template_directory_uri() . '/css/slider.css', array(), '1.1.0', 'all' );
	wp_enqueue_style( 'font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', array(), '4.7.0', 'all' );
	wp_enqueue_style( 'style', get_stylesheet_uri() );

	//wp_enqueue_script( 'script', get_template_directory_uri() . '/js/script.js', array( 'jquery' ), 1.1, true );
	wp_enqueue_script( 'script', get_template_directory_uri() . '/js/script.js', array(), null, true );
});

add_action('widgets_init', function() {
	/*
	register_sidebar();
	register_sidebar();
	register_sidebars(3);
	*/

	/*
	register_sidebar(array(
		'name' => 'widget personalizado',
		'before_widget' => '<article>',
		'after_widget' => '</article>',
		'before_title' => '<h3>',
		'after_title' => '</h3>'
	));
	*/

	$args = array(
		'name' => __('widget_%d'),
		'before_widget' => '<article class="WidgetItem">',
		'after_widget' => '</article>',
		'before_title' => '<h3 class="WidgetItem-title">',
		'after_title' => '</h3>'
	);

	register_sidebars( 3, $args );
});

add_filter( 'show_admin_bar', '__return_false' );

function main_image_url( $size ) {
	global $post;

	$image_id = get_post_thumbnail_id( $post->ID );
	$main_image = wp_get_attachment_image_src( $image_id, $size );

	// 0 = ruta, 1 = anchura, 2 = altura, 3 = boolean
	return print $main_image[0];
}