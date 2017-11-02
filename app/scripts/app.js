import $ from 'jquery';
import 'slick-carousel';
import 'jquery-mousewheel';
import 'jscrollpane';
import 'bootstrap';

/* Example import node_modules*/
/* import 'slick-carousel'; */

const mainModule = (function () {
	let elements = {};

	const cacheDOM = function () {
		const self = {};

		/* self.elementName = $(); */
		return self;
	};

	/* Usage element
	 elements.elementName and othe js code
	 */

	/* Example function
	 const exampleFunction = function () {
	 do code
	 }
	 */

	const stickyMenu = function () {
		$(window).bind('scroll', function () {
			if ($(window).scrollTop() > 50) {
				$('.navigation').addClass('fixed');
			} else {
				$('.navigation').removeClass('fixed');
			}
		});
	};

	const lang = function () {
		$('.navigation__language').on('click', function () {
			$(this).find('ul').toggleClass('navigation__language-list--open');
		});
	};

	const button = function () {
		$('.button').on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top: relY, left: relX})
		})
			.on('mouseout', function (e) {
				var parentOffset = $(this).offset(),
					relX = e.pageX - parentOffset.left,
					relY = e.pageY - parentOffset.top;
				$(this).find('span').css({top: relY, left: relX})
			});
	};

	const roadMap = function () {
		$('#roadmap').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			infinite: false,
			prevArrow: $('.roadmap__slide-nav .icon-left'),
			nextArrow: $('.roadmap__slide-nav .icon-right'),
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1.4,
						slidesToScroll: 1
					}
				}
			]
		});
		$('#roadmap').on('beforeChange', function (event, slick, direction) {
			$('.slick-active .road-map-slider__line').removeClass('road-map-slider__line--last');
		});
		$('#roadmap').on('afterChange', function (event, slick, direction) {
			$('.slick-active:eq(3) .road-map-slider__line').addClass('road-map-slider__line--last');
		});
	};

	const date = function () {
		var month = {
			'january': 0,
			'february': 1,
			'march': 2,
			'april': 3,
			'may': 4,
			'june': 5,
			'july': 6,
			'august': 7,
			'september': 8,
			'october': 9,
			'november': 10,
			'december': 11
		};
		$('#roadmap .road-map-slider__item').each(function (slide, index) {
			var startData = $(this).data('start').split(' ');
			var startMonth = startData[0].toLowerCase();
			startMonth = month[startMonth];
			var startYear = startData[1];
			var startDate = new Date(startYear, startMonth);
			var endData = $(this).data('end').split(' ');
			var endMonth = endData[0].toLowerCase();
			endMonth = month[endMonth];
			var endYear = endData[1];
			var endDate = new Date(endYear, endMonth);
			var now = new Date();
			var today = new Date(now.getFullYear(), now.getMonth());
			if (today.getTime() >= startDate.getTime() && today.getTime() <= endDate.getTime()) {
				$(this).addClass('road-map-slider__item--today');
			} else if (today.getTime() < startDate.getTime() && today.getTime() < endDate.getTime()) {
				$(this).addClass('road-map-slider__item--future');
			} else if (today.getTime() > endDate.getTime()) {
				$(this).addClass('road-map-slider__item--present');
			}
			if ($(this).hasClass('road-map-slider__item--present')) {
				$(this).find('.road-map-slider__stage').append('<span class="road-map-slider__status"> - Completed</span>')
			}
		});
	};

	const scroll = function () {
		$('.leadership__text-wrapper, .advisors__text-wrapper').jScrollPane({
			autoReinitialise: true
		});
		$(window).resize(function () {
			$('.leadership__text-wrapper, .advisors__text-wrapper').jScrollPane({
				autoReinitialise: true
			});
		});
	};

	const burgerMenu = function () {
		var clickDelay = 500,
			clickDelayTimer = null;

		$('.burger-click-region').on('click', function () {

			if (clickDelayTimer === null) {

				var $burger = $(this);
				$burger.toggleClass('active');
				$burger.parent().toggleClass('is-open');

				if (!$burger.hasClass('active')) {
					$burger.addClass('closing');
				}

				clickDelayTimer = setTimeout(function () {
					$burger.removeClass('closing');
					clearTimeout(clickDelayTimer);
					clickDelayTimer = null;
				}, clickDelay);
			}
			if ($('.burger-click-region').hasClass('active')) {
				$('.navigation__nav-list').addClass('navigation__nav-list--open');
				$('body').addClass('menu-open');
			} else {
				$('.navigation__nav-list').removeClass('navigation__nav-list--open');
				$('body').removeClass('menu-open');
			}
		});
	};

	const leadershipSlider = function () {
		function slickify() {
			$('#leadership').not('.slick-initialized').slick({
				dots: true,
				slidesToShow: 1.6,
				slidesToScroll: 1,
				infinite: false,
				arrows: false
			});
		}

		if ($(window).width() < 768) {
			slickify();
		}
		$(window).resize(function () {
			if ($(window).width() < 768) {
				slickify();
			}
		});
	};

	const othermemberSlider = function () {
		function slickify() {
			$('#other-member').not('.slick-initialized').slick({
				dots: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: false,
				arrows: false
			});
		}

		if ($(window).width() < 768) {
			slickify();
		}
		$(window).resize(function () {
			if ($(window).width() < 768) {
				slickify();
			}
		});
	};

	const advisorsSlider = function () {
		function slickify() {
			$('#advisors').not('.slick-initialized').slick({
				dots: true,
				slidesToShow: 1.6,
				slidesToScroll: 1,
				infinite: false,
				arrows: false
			});
		}

		if ($(window).width() < 768) {
			slickify();
		}
		$(window).resize(function () {
			if ($(window).width() < 768) {
				slickify();
			}
		});
	};

	/* Declarate function in array */
	const init = function () {
		elements = cacheDOM();
		stickyMenu();
		lang();
		button();
		roadMap();
		date();
		scroll();
		burgerMenu();
		leadershipSlider();
		othermemberSlider();
		advisorsSlider();
		/* exampleFunction(); */
	};

	return {
		init
	};
})();

/* Initilisation function */

$(document).ready(function () {
	mainModule.init();
});
