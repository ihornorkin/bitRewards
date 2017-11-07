webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(4);
	
	__webpack_require__(5);
	
	__webpack_require__(6);
	
	__webpack_require__(7);
	
	__webpack_require__(20);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* Example import node_modules*/
	/* import 'slick-carousel'; */
	
	var mainModule = function () {
		var elements = {};
	
		var cacheDOM = function cacheDOM() {
			var self = {};
	
			self.navigation = (0, _jquery2.default)('.navigation');
			self.language = (0, _jquery2.default)('.navigation__language');
			self.button = (0, _jquery2.default)('.button');
			self.roadMapSlider = (0, _jquery2.default)('#roadmap');
			self.roadMapLeft = (0, _jquery2.default)('.roadmap__slide-nav .icon-left');
			self.roadMapRight = (0, _jquery2.default)('.roadmap__slide-nav .icon-right');
			self.lineSlider = (0, _jquery2.default)('.slick-active .road-map-slider__line');
			self.roadMapSliderItem = (0, _jquery2.default)('#roadmap .road-map-slider__item');
			self.roadMapSliderStage = (0, _jquery2.default)('.road-map-slider__stage');
			self.leadershipAdvisor = (0, _jquery2.default)('.leadership__text-wrapper, .advisors__text-wrapper');
			self.burger = (0, _jquery2.default)('.burger-click-region');
			self.navigationList = (0, _jquery2.default)('.navigation__nav-list');
			self.advisor = (0, _jquery2.default)('#advisors-slider');
			self.leadership = (0, _jquery2.default)('#leadership');
			self.otherMember = (0, _jquery2.default)('#other-member');
			self.navigationLanguage = (0, _jquery2.default)('.navigation__language-active');
			self.navigationItem = (0, _jquery2.default)('.navigation__nav-item');
			self.buttonModal = (0, _jquery2.default)('[data-toggle = modal]');
			self.videoModal = (0, _jquery2.default)('#video iframe');
			self.modalWindow = (0, _jquery2.default)('.modal');
			self.platformIcon = (0, _jquery2.default)('.platform__item');
	
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
	
		var stickyMenu = function stickyMenu() {
			(0, _jquery2.default)(window).bind('scroll', function () {
				if ((0, _jquery2.default)(window).scrollTop() > 50) {
					(0, _jquery2.default)(elements.navigation).addClass('fixed');
				} else {
					(0, _jquery2.default)(elements.navigation).removeClass('fixed');
				}
			});
		};
	
		var lang = function lang() {
			(0, _jquery2.default)(elements.language).on('click', function () {
				(0, _jquery2.default)(this).find('ul').toggleClass('navigation__language-list--open');
			});
		};
	
		var button = function button() {
			(0, _jquery2.default)(elements.button).on('mouseenter', function (e) {
				var parentOffset = (0, _jquery2.default)(this).offset(),
				    relX = e.pageX - parentOffset.left,
				    relY = e.pageY - parentOffset.top;
				(0, _jquery2.default)(this).find('span').css({ top: relY, left: relX });
			}).on('mouseout', function (e) {
				var parentOffset = (0, _jquery2.default)(this).offset(),
				    relX = e.pageX - parentOffset.left,
				    relY = e.pageY - parentOffset.top;
				(0, _jquery2.default)(this).find('span').css({ top: relY, left: relX });
			});
		};
	
		var roadMap = function roadMap() {
			(0, _jquery2.default)(elements.roadMapSlider).slick({
				slidesToShow: 4,
				slidesToScroll: 4,
				infinite: false,
				prevArrow: (0, _jquery2.default)(elements.roadMapLeft),
				nextArrow: (0, _jquery2.default)(elements.roadMapRight),
				responsive: [{
					breakpoint: 769,
					settings: {
						slidesToShow: 2.3,
						slidesToScroll: 1
					}
				}, {
					breakpoint: 480,
					settings: {
						slidesToShow: 1.4,
						slidesToScroll: 1
					}
				}]
			});
			(0, _jquery2.default)(elements.roadMapSlider).on('beforeChange', function (event, slick, direction) {
				(0, _jquery2.default)(elements.lineSlider).removeClass('road-map-slider__line--last');
			});
			(0, _jquery2.default)(elements.roadMapSlider).on('afterChange', function (event, slick, direction) {
				(0, _jquery2.default)(elements.lineSlider).addClass('road-map-slider__line--last');
			});
		};
	
		var date = function date() {
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
			(0, _jquery2.default)(elements.roadMapSliderItem).each(function (slide, index) {
				var startData = (0, _jquery2.default)(this).data('start').split(' ');
				var startMonth = startData[0].toLowerCase();
				startMonth = month[startMonth];
				var startYear = startData[1];
				var startDate = new Date(startYear, startMonth);
				var endData = (0, _jquery2.default)(this).data('end').split(' ');
				var endMonth = endData[0].toLowerCase();
				endMonth = month[endMonth];
				var endYear = endData[1];
				var endDate = new Date(endYear, endMonth);
				var now = new Date();
				var today = new Date(now.getFullYear(), now.getMonth());
				if (today.getTime() >= startDate.getTime() && today.getTime() <= endDate.getTime()) {
					(0, _jquery2.default)(this).addClass('road-map-slider__item--today');
				} else if (today.getTime() < startDate.getTime() && today.getTime() < endDate.getTime()) {
					(0, _jquery2.default)(this).addClass('road-map-slider__item--future');
				} else if (today.getTime() > endDate.getTime()) {
					(0, _jquery2.default)(this).addClass('road-map-slider__item--present');
				}
				if ((0, _jquery2.default)(this).hasClass('road-map-slider__item--present')) {
					(0, _jquery2.default)(this).find(elements.roadMapSliderStage).append('<span class="road-map-slider__status"> - Completed</span>');
				}
			});
		};
	
		var scroll = function scroll() {
			(0, _jquery2.default)(elements.leadershipAdvisor).jScrollPane({
				autoReinitialise: true
			});
			(0, _jquery2.default)(window).resize(function () {
				(0, _jquery2.default)('.advisors__text-wrapper').each(function () {
					(0, _jquery2.default)(this).jScrollPane({
						showArrows: (0, _jquery2.default)(this).is('.arrow')
					});
					var api = (0, _jquery2.default)(this).data('jsp');
					var throttleTimeout;
					(0, _jquery2.default)(window).bind('resize', function () {
						if (_jquery2.default.browser.msie) {
							// IE fires multiple resize events while you are dragging the browser window which
							// causes it to crash if you try to update the scrollpane on every one. So we need
							// to throttle it to fire a maximum of once every 50 milliseconds...
							if (!throttleTimeout) {
								throttleTimeout = setTimeout(function () {
									api.reinitialise();
									throttleTimeout = null;
								}, 50);
							}
						} else {
							api.reinitialise();
						}
					});
				});
			});
		};
	
		var burgerMenu = function burgerMenu() {
			var clickDelay = 500,
			    clickDelayTimer = null;
	
			(0, _jquery2.default)(elements.burger).on('click', function () {
	
				if (clickDelayTimer === null) {
	
					var $burger = (0, _jquery2.default)(this);
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
				if ((0, _jquery2.default)(elements.burger).hasClass('active')) {
					(0, _jquery2.default)(elements.navigationList).addClass('navigation__nav-list--open');
					(0, _jquery2.default)('body').addClass('menu-open');
				} else {
					(0, _jquery2.default)(elements.navigationList).removeClass('navigation__nav-list--open');
					(0, _jquery2.default)('body').removeClass('menu-open');
				}
			});
		};
	
		var leadershipSlider = function leadershipSlider() {
			function slickify() {
				(0, _jquery2.default)(self.leadership).not('.slick-initialized').slick({
					dots: true,
					slidesToShow: 1.6,
					slidesToScroll: 1,
					infinite: false,
					arrows: false,
					responsive: [{
						breakpoint: 9999,
						settings: "unslick"
					}, {
						breakpoint: 768,
						settings: {
							dots: true,
							slidesToShow: 1.6,
							slidesToScroll: 1,
							infinite: false,
							arrows: false
						}
					}]
				});
			}
	
			if ((0, _jquery2.default)(window).width() <= 768) {
				slickify();
			}
	
			(0, _jquery2.default)(window).resize(function () {
				if ((0, _jquery2.default)(window).width() <= 768) {
					slickify();
				}
			});
		};
	
		var othermemberSlider = function othermemberSlider() {
			function slickify() {
				(0, _jquery2.default)(elements.otherMember).not('.slick-initialized').slick({
					dots: true,
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: false,
					arrows: false,
					responsive: [{
						breakpoint: 9999,
						settings: "unslick"
					}, {
						breakpoint: 768,
						settings: {
							dots: true,
							slidesToShow: 3,
							slidesToScroll: 3,
							infinite: false,
							arrows: false
						}
					}, {
						breakpoint: 450,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}]
				});
			}
	
			if ((0, _jquery2.default)(window).width() <= 768) {
				slickify();
			}
			(0, _jquery2.default)(window).resize(function () {
				if ((0, _jquery2.default)(window).width() <= 768) {
					slickify();
				}
			});
		};
	
		var advisorsSlider = function advisorsSlider() {
			function slickify() {
				(0, _jquery2.default)(elements.advisor).not('.slick-initialized').slick({
					dots: true,
					slidesToShow: 1.6,
					slidesToScroll: 1,
					infinite: false,
					arrows: false,
					responsive: [{
						breakpoint: 9999,
						settings: "unslick"
					}, {
						breakpoint: 768,
						settings: {
							dots: true,
							slidesToShow: 1.6,
							slidesToScroll: 1,
							infinite: false,
							arrows: false
						}
					}]
				});
			}
	
			if ((0, _jquery2.default)(window).width() <= 769) {
				slickify();
			}
			(0, _jquery2.default)(window).resize(function () {
				if ((0, _jquery2.default)(window).width() <= 769) {
					slickify();
				}
			});
		};
	
		var smoothScroll = function smoothScroll() {
			(0, _jquery2.default)(document).on('click', '.scroll', function (event) {
				event.preventDefault();
	
				(0, _jquery2.default)('html, body').animate({
					scrollTop: (0, _jquery2.default)(_jquery2.default.attr(this, 'href')).offset().top
				}, 500);
			});
		};
	
		var langButton = function langButton() {
			(0, _jquery2.default)(elements.navigationLanguage).on('click', function () {
				(0, _jquery2.default)(this).toggleClass('navigation__language-active--click');
			});
		};
	
		var wayPoint = function wayPoint() {
			(0, _jquery2.default)('section').waypoint({
				handler: function handler() {
					var link = '[href="#' + (0, _jquery2.default)(this.element).attr('id') + '"]';
					(0, _jquery2.default)(elements.navigationItem).removeClass('navigation__nav-item--active');
					(0, _jquery2.default)(link).parent().addClass('navigation__nav-item--active');
				}
			});
		};
	
		var video = function video() {
			(0, _jquery2.default)(elements.buttonModal).on('click', function () {
				var videoUrl = (0, _jquery2.default)(this).attr('data-video');
				(0, _jquery2.default)(elements.videoModal).attr('src', videoUrl);
			});
			(0, _jquery2.default)(elements.modalWindow).on('hidden.bs.modal', function (event) {
				(0, _jquery2.default)(elements.videoModal).attr('src', '');
			});
		};
	
		var svgHover = function svgHover() {
			elements.platformIcon.on('mouseenter', function () {
				(0, _jquery2.default)(this).find('svg').find('path').each(function (index, element) {
					var color = (0, _jquery2.default)(element).attr('fill');
					(0, _jquery2.default)(element).css('fill', color);
				});
			});
			elements.platformIcon.on('mouseleave', function () {
				(0, _jquery2.default)(this).find('svg').find('path').css('fill', '');
			});
		};
	
		/* Declarate function in array */
		var init = function init() {
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
			/* exampleFunction(); */
		};
	
		return {
			init: init
		};
	}();
	
	/* Initilisation function */
	
	(0, _jquery2.default)(document).ready(function () {
		mainModule.init();
	});

/***/ })
])
//# sourceMappingURL=0.c4050f9ac2aeec5bd71c.hot-update.js.map