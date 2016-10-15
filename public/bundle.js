/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Simulator = __webpack_require__(1);
	
	var _Simulator2 = _interopRequireDefault(_Simulator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var trafficVolumn = function trafficVolumn() {
	  return {
	    ll: $('#trafficVolumnLL').val(),
	    rr: $('#trafficVolumnRR').val(),
	    lr: $('#trafficVolumnLR').val(),
	    rl: $('#trafficVolumnRL').val()
	  };
	};
	
	var sfaTaxs = function sfaTaxs() {
	  return {
	    sucess: {
	      ll: $('#sTaxsLL').val(),
	      rr: $('#sTaxsRR').val(),
	      lr: $('#sTaxsLR').val(),
	      rl: $('#sTaxsRL').val()
	    },
	    failure: {
	      ll: $('#fTaxsLL').val(),
	      rr: $('#fTaxsRR').val(),
	      lr: $('#fTaxsLR').val(),
	      rl: $('#fTaxsRL').val()
	    },
	    indentation: {
	      ll: $('#aTaxsLL').val(),
	      rr: $('#aTaxsRR').val(),
	      lr: $('#aTaxsLR').val(),
	      rl: $('#aTaxsRL').val()
	    }
	  };
	};
	
	var serviceCenter = function serviceCenter() {
	  return {
	    center1: $('#serviceCenter1').val(),
	    center2: $('#serviceCenter2').val()
	  };
	};
	
	var arriveTime = function arriveTime() {
	  return {
	    local: $('#arriveTime1').val(),
	    remote: $('#arriveTime2').val()
	  };
	};
	
	var serviceTime = function serviceTime() {
	  return {
	    reception: {
	      lls: $('#receptionCenterLLS').val(),
	      llf: $('#receptionCenterLLF').val(),
	      lla: $('#receptionCenterLLA').val(),
	      lrs: $('#receptionCenterLRS').val(),
	      lrf: $('#receptionCenterLRF').val(),
	      lra: $('#receptionCenterLRA').val(),
	      rls: $('#receptionCenterRLS').val(),
	      rlf: $('#receptionCenterRLF').val(),
	      rla: $('#receptionCenterRLA').val(),
	      rrs: $('#receptionCenterRRS').val(),
	      rrf: $('#receptionCenterRRF').val(),
	      rra: $('#receptionCenterRRA').val()
	    },
	    service: {
	      lls: $('#serviceCenterLLS').val(),
	      llf: $('#serviceCenterLLF').val(),
	      lla: $('#serviceCenterLLA').val(),
	      lrs: $('#serviceCenterLRS').val(),
	      lrf: $('#serviceCenterLRF').val(),
	      lra: $('#serviceCenterLRA').val(),
	      rls: $('#serviceCenterRLS').val(),
	      rlf: $('#serviceCenterRLF').val(),
	      rla: $('#serviceCenterRLA').val(),
	      rrs: $('#serviceCenterRRS').val(),
	      rrf: $('#serviceCenterRRF').val(),
	      rra: $('#serviceCenterRRA').val()
	    }
	  };
	};
	
	$('#alert').click(function () {
	  var sim = new _Simulator2.default();
	  sim.start();
	
	  console.log(trafficVolumn());
	  console.log(sfaTaxs());
	  console.log(serviceCenter());
	  console.log(arriveTime());
	  console.log(serviceTime());
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _EventMessage = __webpack_require__(2);
	
	var _EventMessage2 = _interopRequireDefault(_EventMessage);
	
	var _EventQueue = __webpack_require__(4);
	
	var _EventQueue2 = _interopRequireDefault(_EventQueue);
	
	var _Calculus = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Simulator = function () {
	  function Simulator() {
	    _classCallCheck(this, Simulator);
	
	    this.eventQueue = new _EventQueue2.default();
	  }
	
	  _createClass(Simulator, [{
	    key: 'start',
	    value: function start() {
	      this.eventQueue.add(new _EventMessage2.default(Math.random() * 15, Math.random() * 15));
	      this.eventQueue.add(new _EventMessage2.default(Math.random() * 15, Math.random() * 15));
	      this.eventQueue.add(new _EventMessage2.default(Math.random() * 15, Math.random() * 15));
	      this.eventQueue.add(new _EventMessage2.default(Math.random() * 15, Math.random() * 15));
	
	      console.log(_Calculus.Distribution.normal(2, 2));
	
	      console.log(this.eventQueue.queue);
	      this.eventQueue.next();
	      console.log(this.eventQueue.queue);
	      this.eventQueue.next();
	      this.eventQueue.next();
	      console.log(this.eventQueue.queue);
	      this.eventQueue.next();
	
	      console.log(this.eventQueue.queue);
	    }
	  }]);
	
	  return Simulator;
	}();
	
	exports.default = Simulator;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Enum = __webpack_require__(3);
	
	var _EventQueue = __webpack_require__(4);
	
	var _EventQueue2 = _interopRequireDefault(_EventQueue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EventMessage = function () {
	  function EventMessage(execTime, servTime) {
	    _classCallCheck(this, EventMessage);
	
	    this.execTime = execTime;
	    this.servTime = servTime;
	    this.state = _Enum.MessageState.RECEPTION;
	  }
	
	  _createClass(EventMessage, [{
	    key: 'finishTime',
	    value: function finishTime() {
	      return this.execTime + this.servTime;
	    }
	  }, {
	    key: 'run',
	    value: function run() {}
	  }]);
	
	  return EventMessage;
	}();
	
	exports.default = EventMessage;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MessageState = exports.MessageState = {
	  RECEPTION: 'RECEPTION',
	  SERVICE: 'SERVICE',
	  WAITING: 'WAITING',
	  LEAVING: 'LEAVING'
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EventQueue = function () {
	  function EventQueue() {
	    _classCallCheck(this, EventQueue);
	
	    this.queue = new Array();
	  }
	
	  _createClass(EventQueue, [{
	    key: "add",
	    value: function add(event) {
	      for (var i = 0; i < this.queue.length; i++) {
	        if (event.execTime < this.queue[i].execTime) {
	          this.queue.splice(i, 0, event);
	
	          return;
	        }
	      }
	
	      this.queue.push(event);
	    }
	  }, {
	    key: "next",
	    value: function next() {
	      if (this.queue.length > 0) {
	        return this.queue.pop();
	      }
	    }
	  }]);
	
	  return EventQueue;
	}();
	
	exports.default = EventQueue;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Distribution = exports.Distribution = {
	  normal: function normal(x, y) {
	    // normal logic function here, with x y params
	    return x + y;
	  },
	  uniform: function uniform(x, y) {
	    // uniform logic function here, with x y params
	  },
	  triangular: function triangular(x, y, z) {
	    // triangular logic function here, with x y z params
	  },
	  expo: function expo(x) {
	    // expo logic function here, with x params
	  }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map