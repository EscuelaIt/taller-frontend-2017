<main class="Main-content  u-flex-auto  xs-w100  u-bg-dark-gray">
	<?php 
		if( have_posts() ):
			while( have_posts() ):
				the_post();
				if ( !is_single() && !is_page() ):
					get_template_part('content-post-cards');
				else:
					get_template_part('content-post');
				endif;
			endwhile;
		else:
			print( '<p class="xs-w100  u-error">No hay entradas</p>' );
		endif;
		rewind_posts();
	?>
</main>