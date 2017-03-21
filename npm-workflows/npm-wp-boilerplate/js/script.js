(function (d, w) {
	'use strict';

	var panel = d.querySelector('.Panel'),
		panelBtn = d.querySelector('.Panel-button'),
		mq = w.matchMedia('(min-width: 64em)');

	function closePanel(mq) {
		return (mq.matches) ? panel.classList.remove('is-active') : false;
	}

	panelBtn.onclick = function (e) {
		e.preventDefault();
		panel.classList.toggle('is-active');
	};

	w.onload = closePanel(mq);
	mq.addListener(closePanel);
})(document, window);

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