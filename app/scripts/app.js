import $ from 'jquery';
import 'slick-carousel';
import 'jquery-mousewheel';
import 'jscrollpane';
import 'bootstrap';
import '../../node_modules/waypoints/lib/jquery.waypoints.min';

/* Example import node_modules*/
/* import 'slick-carousel'; */

const mainModule = (function () {
	let elements = {};

	const cacheDOM = function () {
		const self = {};

		self.navigation = $('.navigation');
		self.language = $('.navigation__language');
		self.button = $('.button');
		self.roadMapSlider = $('#roadmap');
		self.roadMapLeft = $('.roadmap__slide-nav .icon-left');
		self.roadMapRight = $('.roadmap__slide-nav .icon-right');
		self.lineSlider = $('.slick-active .road-map-slider__line');
		self.roadMapSliderItem = $('#roadmap .road-map-slider__item');
		self.roadMapSliderStage = $('.road-map-slider__stage');
		self.leadershipAdvisor = $('.leadership__text-wrapper, .advisors__text-wrapper');
		self.burger = $('.burger-click-region');
		self.navigationList = $('.navigation__nav-list');
		self.advisor = $('#advisors-slider');
		self.leadership = $('#leadership');
		self.otherMember = $('#other-member');
		self.navigationLanguage = $('.navigation__language-active');
		self.navigationItem = $('.navigation__nav-item');
		self.buttonModal = $('[data-toggle = modal]');
		self.videoModal = $('#video iframe');
		self.modalWindow = $('.modal');
		self.platformIcon = $('.platform__item');

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
				$(elements.navigation).addClass('fixed');
			} else {
				$(elements.navigation).removeClass('fixed');
			}
		});
	};

	const lang = function () {
		$(elements.language).on('click', function () {
			$(this).find('ul').toggleClass('navigation__language-list--open');
		});
	};

	const button = function () {
		$(elements.button).on('mouseenter', function (e) {
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
		$(elements.roadMapSlider).slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			infinite: false,
			prevArrow: $(elements.roadMapLeft),
			nextArrow: $(elements.roadMapRight),
			responsive: [
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 2.3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1.4,
						slidesToScroll: 1
					}
				}
			]
		});
		$(elements.roadMapSlider).on('beforeChange', function (event, slick, direction) {
			$(elements.lineSlider).removeClass('road-map-slider__line--last');
		});
		$(elements.roadMapSlider).on('afterChange', function (event, slick, direction) {
			$(elements.lineSlider).addClass('road-map-slider__line--last');
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
		$(elements.roadMapSliderItem).each(function (slide, index) {
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
				$(this).find(elements.roadMapSliderStage).append('<span class="road-map-slider__status"> - Completed</span>')
			}
		});
	};

	const scroll = function () {
		$(elements.leadershipAdvisor).jScrollPane();
		$(window).resize(function () {
			$(elements.leadershipAdvisor).jScrollPane();
		});
	};

	const burgerMenu = function () {
		var clickDelay = 500,
			clickDelayTimer = null;

		$(elements.burger).on('click', function () {

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
			if ($(elements.burger).hasClass('active')) {
				$(elements.navigationList).addClass('navigation__nav-list--open');
				$('body').addClass('menu-open');
			} else {
				$(elements.navigationList).removeClass('navigation__nav-list--open');
				$('body').removeClass('menu-open');
			}
		});
	};

	const leadershipSlider = function () {
		function slickify() {
			$(self.leadership).not('.slick-initialized').slick({
				dots: true,
				slidesToShow: 1.6,
				slidesToScroll: 1,
				infinite: false,
				arrows: false,
				responsive: [
					{
						breakpoint: 9999,
						settings: "unslick"
					},
					{
						breakpoint: 768,
						settings: {
							dots: true,
							slidesToShow: 1.6,
							slidesToScroll: 1,
							infinite: false,
							arrows: false,
						}
					}
				]
			});
		}

		if ($(window).width() <= 768) {
			slickify();
		}

		$(window).resize(function () {
			if ($(window).width() <= 768) {
				slickify();
			}
		});
	};

	const othermemberSlider = function () {
		function slickify() {
			$(elements.otherMember).not('.slick-initialized').slick({
				dots: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: false,
				arrows: false,
				responsive: [
					{
						breakpoint: 9999,
						settings: "unslick"
					},
					{
						breakpoint: 768,
						settings: {
							dots: true,
							slidesToShow: 3,
							slidesToScroll: 3,
							infinite: false,
							arrows: false,
						}
					},
					{
						breakpoint: 450,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}
				]
			});
		}

		if ($(window).width() <= 768) {
			slickify();
		}
		$(window).resize(function () {
			if ($(window).width() <= 768) {
				slickify();
			}
		});
	};

	const advisorsSlider = function () {
		function slickify() {
			$(elements.advisor).not('.slick-initialized').slick({
				dots: true,
				slidesToShow: 1.6,
				slidesToScroll: 1,
				infinite: false,
				arrows: false,
				responsive: [
					{
						breakpoint: 9999,
						settings: "unslick"
					},
					{
						breakpoint: 768,
						settings: {
							dots: true,
							slidesToShow: 1.6,
							slidesToScroll: 1,
							infinite: false,
							arrows: false,
						}
					}
				]
			});
		}

		if ($(window).width() <= 769) {
			slickify();
		}
		$(window).resize(function () {
			if ($(window).width() <= 769) {
				slickify();
			}
		});
	};

	const smoothScroll = function () {
		$(document).on('click', '.scroll', function (event) {
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 500);
		});
	};

	const langButton = function () {
		$(elements.navigationLanguage).on('click', function () {
			$(this).toggleClass('navigation__language-active--click');
		});
	};

	const wayPoint = function () {
		$('section').waypoint({
			handler: function () {
				var link = '[href="#' + $(this.element).attr('id') + '"]';
				$(elements.navigationItem).removeClass('navigation__nav-item--active');
				$(link).parent().addClass('navigation__nav-item--active');
			}
		});
	};

	const video = function () {
		$(elements.buttonModal).on('click', function () {
			var videoUrl = $(this).attr('data-video');
			$(elements.videoModal).attr('src', videoUrl);
		});
		$(elements.modalWindow).on('hidden.bs.modal', function (event) {
			$(elements.videoModal).attr('src', '');
		})
	};

	const svgHover = function () {
		elements.platformIcon.on('mouseenter', function () {
			$(this).find('svg').find('path').each(function (index, element) {
				var color = $(element).attr('fill');
				$(element).css('fill', color);
			});
		});
		elements.platformIcon.on('mouseleave', function () {
			$(this).find('svg').find('path').css('fill', '');
		});
	};

	const formSubscribe = function() {
		ajaxMailChimpForm($(".form"), $(".subscribe-result"));
		// Turn the given MailChimp form into an ajax version of it.
		// If resultElement is given, the subscribe result is set as html to
		// that element.
		function ajaxMailChimpForm($form, $resultElement){
			// Hijack the submission. We'll submit the form manually.
			$form.submit(function(e) {
				e.preventDefault();
				if (!isValidEmail($form)) {
					var error =  "A valid email address must be provided.";
					$resultElement.html(error);
					$resultElement.css("color", "red");
					setTimeout(function(){
						$resultElement.html('');
					}, 4000);
				} else {
					$resultElement.html("Subscribing...");
					submitSubscribeForm($form, $resultElement);
				}
			});
		}
		// Validate the email address in the form
		function isValidEmail($form) {
			// If email is empty, show error message.
			// contains just one @
			var email = $form.find("input[type='email']").val();
			if (!email || !email.length) {
				return false;
			} else if (email.indexOf("@") == -1) {
				return false;
			}
			return true;
		}
		// Submit the form with an ajax/jsonp request.
		// Based on http://stackoverflow.com/a/15120409/215821
		function submitSubscribeForm($form, $resultElement) {
			$.ajax({
				type: "GET",
				url: $form.attr("action"),
				data: $form.serialize(),
				cache: false,
				dataType: "jsonp",
				jsonp: "c", // trigger MailChimp to return a JSONP response
				contentType: "application/json; charset=utf-8",
				error: function(error){
					// According to jquery docs, this is never called for cross-domain JSONP requests
				},
				success: function(data){
					$form.find("input").val('');
					if (data.result != "success") {
						var message = data.msg || "Sorry. Unable to subscribe. Please try again later.";
						$resultElement.css("color", "red");
						if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
							message = "You're already subscribed. Thank you.";
						}
						$resultElement.html(message);
					} else {
						$resultElement.html("Thank you!<br>You must confirm the subscription in your inbox.");
					}
					setTimeout(function(){
						$resultElement.html('');
					}, 4000);
				}
			});
		}
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
		smoothScroll();
		langButton();
		wayPoint();
		video();
		svgHover();
		formSubscribe();
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
