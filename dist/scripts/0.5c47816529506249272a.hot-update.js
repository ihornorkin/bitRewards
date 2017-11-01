webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(4);
	
	__webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* Example import node_modules*/
	/* import 'slick-carousel'; */
	
	var mainModule = function () {
		var elements = {};
	
		var cacheDOM = function cacheDOM() {
			var self = {};
	
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
	
		var lang = function lang() {
			(0, _jquery2.default)('.navigation__language').on('click', function () {
				(0, _jquery2.default)(this).find('ul').toggleClass('navigation__language-list--open');
			});
		};
	
		var button = function button() {
			(0, _jquery2.default)('.button').on('mouseenter', function (e) {
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
			(0, _jquery2.default)('#roadmap').slick({
				slidesToShow: 4,
				slidesToScroll: 4,
				infinite: false,
				prevArrow: (0, _jquery2.default)('.roadmap__slide-nav .icon-left'),
				nextArrow: (0, _jquery2.default)('.roadmap__slide-nav .icon-right')
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
			(0, _jquery2.default)('#roadmap .road-map-slider__item').each(function (slide, index) {
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
					(0, _jquery2.default)(this).find('.road-map-slider__stage').append('<span class="road-map-slider__status"> - Completed</span>');
				}
			});
		};
	
		var scroll = function scroll() {
			(0, _jquery2.default)('.leadership__description').jScrollPane();
		};
	
		/* Declarate function in array */
		var init = function init() {
			elements = cacheDOM();
			lang();
			button();
			roadMap();
			date();
			scroll();
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
//# sourceMappingURL=0.5c47816529506249272a.hot-update.js.map