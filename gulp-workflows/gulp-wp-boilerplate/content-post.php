<header class="Post-header" style="background-image:url(<?php main_image_url( 'full' ); ?>)">
	<section class="Post-headerContainer" href="<?php the_permalink(); ?>">
		<div class="Post-headerTitle">
			<h2><?php the_title(); ?></h2>
		</div>
	</section>
</header>
<article class="Post-content"><?php the_content(); ?></article>
<?php if ( is_single() ) { ?>
	<aside class="Post-info">
		<p>
			<i class="fa fa-calendar-o" aria-hidden="true"></i>
			<?php the_time('j F, Y'); ?>
		</p>
		<?php the_category(); ?>
		<div><?php the_tags(); ?></div>
		<p>
			<i class="fa fa-user" aria-hidden="true"></i>
			<?php the_author_posts_link(); ?>
		</p>
	</aside>
	<section class="Comments  u-flex-auto  xs-w100  u-bg-dark-gray">
		<?php comment_form(); ?>
		<ol>
			<?php wp_list_comments(); ?>
		</ol>
	</section>
<?php } ?>