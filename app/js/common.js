$(function() {

	$('#my-menu').mmenu({
		extensions: ['theme-black', 'fx-menu-slide', 'position-right', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салон красоты Смитлер" />'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function () {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function () {
		$('.hamburger').removeClass('is-active');
	});

	$('.carousel-services').on('initialized.owl.carousel', function () {
		setTimeout(function () {
			carouselServices();
		}, 100);
	});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		navText: ['<i class="fa fa-angle-double-right"></i>', '<i class="fa fa-angle-double-left"></i>'],
		smartSpeed: 700,
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});


	function carouselServices () {
		$('.carousel-services-items').each(function () {
			var $item = $(this),
				$content = $item.find('.carousel-services-content').outerHeight();

				$item.find('.carousel-services-image').css('min-height', $content);
		});
	}

	carouselServices();

	$('.carousel-services-composition .h3').each(function () {
		var $compositionh3 = $(this);
		$compositionh3.html($compositionh3.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	$('section .h2').each(function () {
		var $sectionh2 = $(this);
		$sectionh2.html($sectionh2.html().replace(/^(\S+)/, '<span>$1</span>'));
	});


	$('.carousel-services-composition').equalHeight({
		wait: false,
		responsive: true
	});

	$('select').selectize({
		create: true,
		sortField: 'text'
	});

	$(window).scroll(function () {
		if ( $(this).scrollTop() > $(this).height() ) {
			$('.top').addClass('active');
		}else{
			$('.top').removeClass('active');
		}
	});

	$('.top').on('click', function () {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var formCallback = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: formCallback.serialize()
		}).done(function() {
			$(formCallback).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(formCallback).find('.success').removeClass('active').fadeOut();
				// Done Functions
				formCallback.trigger("reset");
			}, 3000);
		});
		return false;
	});

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		dots: true
	});

	$('.partners-corousel').owlCarousel({
		items: 4,
		loop: true,
		dots: false,
		nav: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		autoplaySpeed: 700,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			320: {
				items: 2
			},
			768: {
				items: 3
			},
			920: {
				items: 4
			}
		}
	});

});

$(window).on('load', function () {
	$('.preloader').delay(1000).fadeOut('slow');
});