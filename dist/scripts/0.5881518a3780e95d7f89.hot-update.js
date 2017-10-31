webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(4);
	
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
				var startMonth = (0, _jquery2.default)(this).data('start');
				startMonth = startMonth.split(' ');
				console.log(startMonth[0]);
			});
		};
	
		/* Declarate function in array */
		var init = function init() {
			elements = cacheDOM();
			button();
			roadMap();
			date();
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
//# sourceMappingURL=0.5881518a3780e95d7f89.hot-update.js.map