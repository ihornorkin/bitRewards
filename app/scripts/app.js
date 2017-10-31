import $ from 'jquery';
import 'slick-carousel';

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
	}

	const roadMap = function () {
		$('#roadmap').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			infinite: false,
			prevArrow: $('.roadmap__slide-nav .icon-left'),
			nextArrow: $('.roadmap__slide-nav .icon-right')
		});
	}

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

	/* Declarate function in array */
	const init = function () {
		elements = cacheDOM();
		button();
		roadMap();
		date();
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
