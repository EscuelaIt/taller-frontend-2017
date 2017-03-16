'use strict';

/*$(() => {
	let nombre= 'Jonathan';
	alert(`Hola ${nombre}`);
});*/

(function (d, w, $, WOW) {
	'use strict';

	var wow = new WOW();

	$(d).ready(function () {
		$(".owl-carousel").owlCarousel({
			items: 3,
			loop: true,
			autoplay: true,
			autoplayTimeout: 1000,
			autoplayHoverPause: true
		});

		$('.nav').find('a').click(function (e) {
			var idEnlace = $(this).attr('href');

			$('html, body').animate({
				scrollTop: $(idEnlace).offset().top
			}, 1000);
		});
	});

	wow.init();
})(document, window, jQuery, WOW);