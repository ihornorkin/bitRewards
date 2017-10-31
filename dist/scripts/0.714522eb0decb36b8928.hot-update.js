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
				infinity: false
			});
		};
	
		/* Declarate function in array */
		var init = function init() {
			elements = cacheDOM();
			button();
			roadMap();
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
//# sourceMappingURL=0.714522eb0decb36b8928.hot-update.js.map