<?php
if ( is_search() ) {
	print('
		<p class="Template-title  u-flex-auto  xs-w100  u-bg-light-gray">
			Los resultado para la búsqueda <mark>' . get_search_query() . '</mark> son:
		</p>
	');
}

if ( is_404() ) {
	print('
		<div class="Template-title  u-flex-auto  xs-w100  u-error">
			<h2>ERROR 404</h2>
			<p>Parece que lo que buscas se lo comió el perro</p>
			<img src="' . get_bloginfo('template_url') . '/img/loading-dog.gif">
		</div>
	');
}

if ( is_category() ) {
	print('
		<p class="Template-title  u-flex-auto  xs-w100  u-bg-light-gray">
			Los resultado para la categoría <mark>' . single_cat_title('', false) . '</mark> son:
		</p>
	');
}

if ( is_tag() ) {
	print('
		<p class="Template-title  u-flex-auto  xs-w100  u-bg-light-gray">
			Los resultado para la etiqueta <mark>' . single_tag_title('', false) . '</mark> son:
		</p>
	');
}

if ( is_author() ) {
	printf('
		<article class="AuthorCard  u-flex-auto  xs-w100  u-bg-light-gray">
			%s
			<p><b>%s</b></p>
			<p><b>%s Publicaciones</b></p>
			<small>(%s %s)</small>
			<p>%s</p>
		</article>',
		get_avatar( get_the_author_id(), 50 ),
		get_the_author(),
		get_the_author_posts(),
		get_the_author_meta('first_name'),
		get_the_author_meta('last_name'),
		get_the_author_meta('description')
	);
}