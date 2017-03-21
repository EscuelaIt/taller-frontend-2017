<article class="PostCard" style="background-image:url(<?php main_image_url( 'full' ); ?>)">
	<a class="PostCard-link" href="<?php the_permalink(); ?>">
		<div class="PostCard-title">
			<h2><?php the_title(); ?></h2>
			<p><?php the_time('j F, Y'); ?> &middot; por <?php the_author(); ?></p>
		</div>
	</a>
</article>