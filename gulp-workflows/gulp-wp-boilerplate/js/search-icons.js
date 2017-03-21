(function (d, w) {
	'use strict';
	
	var searchLabel = d.querySelector('.SearchBar .screen-reader-text'),
		searchInput = d.querySelector('.SearchBar input[type="search"]'),
		mq = w.matchMedia('(min-width: 64em)'),
		categories = d.querySelectorAll('.post-categories a'),
		tags = d.querySelectorAll('a[rel="tag"]');

	function searchDisplay(mq) {
		if ( mq.matches ) {
			searchInput.classList.remove('is-animating');

			searchLabel.onclick = function () {
				searchInput.classList.toggle('is-animating');
			}

			console.log( mq.matches + 'if' );
		} else {
			searchInput.classList.add('is-animating');

			console.log( mq.matches + 'else' );
		}
	}

	searchLabel.innerHTML = '<i class="fa  fa-search"></i>';
	categories.forEach(function (category) {
		category.insertAdjacentHTML('afterbegin', '<i class="fa  fa-folder-open" aria-hidden="true"></i>&nbsp;');
	});
	tags.forEach(function (tag) {
		tag.insertAdjacentHTML('afterbegin', '<i class="fa fa-tag" aria-hidden="true"></i>&nbsp;');
	});

	w.onload = searchDisplay(mq);
	mq.addListener(searchDisplay);
})(document, window);