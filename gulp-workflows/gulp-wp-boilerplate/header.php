<!DOCTYPE html>
<html lang="<?php bloginfo('language'); ?>">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset="<?php bloginfo('charset'); ?>">
	<title><?php wp_title('', true); ?></title>
	<meta name="description" content="<?php wp_description(); ?>">
	<link rel="shortcut icon" type="image/png" href="<?php bloginfo('template_url'); ?>/img/huella.png">
	<link rel="apple-touch-icon" href="<?php bloginfo('template_url'); ?>/img/huella.png">
	<?php wp_head(); ?>
</head>
<?php flush(); ?>
<body>
	<header class="Header  u-bg-dark-gray">
		<section class="Header-container  u-wrap  u-flex-container">
			<a class="Panel-button" href="#">Hamburguesa</a>
			<h1 class="Logo  u-bg-dark-gray">
				<a class="Logo-link" href="<?php bloginfo('home'); ?>">Logo</a>
			</h1>
			<article class="Panel  u-bg-dark-gray">
				<section class="Panel-container  u-flex-container">					
					<?php
						$args = array(
							'theme_location' => 'menu_main',
							'container' => 'nav',
							'container_id' => 'MenuMain',
							'container_class' => 'MenuMain  u-flex-auto  xs-w100  lg-w60',
							'menu_id' => 'MenuMain-listItem',
							'menu_class' => 'MenuMain-listItem'
						);

						wp_nav_menu( $args );
					?>
					<aside class="SearchBar  u-flex-auto  xs-w100  lg-w20">
						<?php get_search_form(); ?>
					</aside>
					<?php 
						$args = array(
							'theme_location' => 'menu_social',
							'container' => 'nav',
							'container_id' => 'MenuSocial  u-flex-auto  xs-w100  lg-w20',
							'container_class' => 'MenuSocial',
							'menu_id' => 'MenuSocial-listItem',
							'menu_class' => 'MenuSocial-listItem'
						);

						wp_nav_menu( $args );
					?>
				</section>
			</article>
		</section>
	</header>
	<section class="Main">
		<article class="Main-container  u-wrap  u-flex-container  u-bg-light-gray">