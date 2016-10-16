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
	
	var _Calculus = __webpack_require__(7);
	
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
	
	  console.log(_Calculus.Distribution.normal(5, 15));
	  console.log(_Calculus.Distribution.uniform(5, 15));
	  console.log(_Calculus.Distribution.triangular(5, 10, 15));
	  console.log(_Calculus.Distribution.expo(15));
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
	
	var _ServiceCenter = __webpack_require__(5);
	
	var _ServiceCenter2 = _interopRequireDefault(_ServiceCenter);
	
	var _Reception = __webpack_require__(6);
	
	var _Reception2 = _interopRequireDefault(_Reception);
	
	var _Calculus = __webpack_require__(7);
	
	var _Enum = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Simulator = function () {
	  function Simulator() {
	    _classCallCheck(this, Simulator);
	
	    this.eventQueue = new _EventQueue2.default();
	    this.localServiceCenter = new _ServiceCenter2.default(this.eventQueue);
	    this.remoteServiceCenter = new _ServiceCenter2.default(this.eventQueue);
	    this.receptionCenter = new _Reception2.default(this.eventQueue);
	    this.currentTime = 0;
	  }
	
	  _createClass(Simulator, [{
	    key: 'generateEvents',
	    value: function generateEvents(n) {
	      var arrival = 0;
	
	      for (var i = 0; i < n; i++) {
	        this.eventQueue.add(new _EventMessage2.default(i, arrival, _Calculus.Distribution.uniform(5, 9), _Enum.MessageType.LL, _Enum.MessageState.RECEPTION));
	        arrival += _Calculus.Distribution.uniform(7, 12);
	      }
	    }
	  }, {
	    key: 'start',
	    value: function start() {
	      this.generateEvents(5);
	
	      while (!this.eventQueue.isEmpty()) {
	        var nextEvent = this.eventQueue.next();
	
	        console.log('message ' + nextEvent.id + ' status => ' + nextEvent.state + ' execTime => ' + nextEvent.execTime);
	
	        nextEvent.run(this.receptionCenter, this.localServiceCenter, this.remoteServiceCenter);
	      }
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
	  function EventMessage(id, execTime, servTime, type, state) {
	    _classCallCheck(this, EventMessage);
	
	    this.id = id;
	    this.execTime = execTime;
	    this.servTime = servTime;
	    this.type = type;
	    this.state = state;
	  }
	
	  _createClass(EventMessage, [{
	    key: 'run',
	    value: function run(receptionCenter, localServiceCenter, removeServiceCenter) {
	      if (this.state === _Enum.MessageState.RECEPTION) {
	        receptionCenter.receive(this);
	      } else if (this.state === _Enum.MessageState.SERVICE) {
	        if (this.type === _Enum.MessageType.LL || this.type === Messagetype.RL) {
	          localServiceCenter.receive(this);
	        } else {
	          remoteServiceCenter.receive(this);
	        }
	      } else if (this.state === _Enum.MessageState.FINISH) {}
	    }
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
	  FINISH: 'FINISH'
	};
	
	var MessageType = exports.MessageType = {
	  LL: 'LL',
	  LR: 'LR',
	  RL: 'RL',
	  RR: 'RR'
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
	        return this.queue.shift();
	      }
	    }
	  }, {
	    key: "isEmpty",
	    value: function isEmpty() {
	      return this.queue.length === 0;
	    }
	  }, {
	    key: "map",
	    value: function map(func) {
	      return this.queue.map(func);
	    }
	  }]);
	
	  return EventQueue;
	}();
	
	exports.default = EventQueue;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _EventMessage = __webpack_require__(2);
	
	var _EventMessage2 = _interopRequireDefault(_EventMessage);
	
	var _Enum = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ServiceCenter = function () {
	  function ServiceCenter(eventQueue) {
	    _classCallCheck(this, ServiceCenter);
	
	    this.eventQueue = eventQueue;
	  }
	
	  _createClass(ServiceCenter, [{
	    key: 'receive',
	    value: function receive(eventMessage) {
	      this.eventQueue.add(new _EventMessage2.default(eventMessage.id, eventMessage.servTime + eventMessage.execTime, 0, eventMessage.type, _Enum.MessageState.FINISH));
	    }
	  }]);
	
	  return ServiceCenter;
	}();
	
	exports.default = ServiceCenter;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ServiceCenter = __webpack_require__(5);
	
	var _ServiceCenter2 = _interopRequireDefault(_ServiceCenter);
	
	var _EventMessage = __webpack_require__(2);
	
	var _EventMessage2 = _interopRequireDefault(_EventMessage);
	
	var _Enum = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Reception = function () {
	  function Reception(eventQueue) {
	    _classCallCheck(this, Reception);
	
	    this.eventQueue = eventQueue;
	  }
	
	  _createClass(Reception, [{
	    key: 'receive',
	    value: function receive(eventMessage) {
	      this.eventQueue.add(new _EventMessage2.default(eventMessage.id, eventMessage.execTime + eventMessage.servTime, eventMessage.servTime, eventMessage.type, _Enum.MessageState.SERVICE));
	    }
	  }]);
	
	  return Reception;
	}();
	
	exports.default = Reception;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Distribution = exports.Distribution = {
	  normal: function normal(a, b) {
	    var u1 = Math.random();
	    var u2 = Math.random();
	
	    var z = Math.sqrt(-2 * Math.log(u1)) * Math.sin(2 * 180 * u2);
	
	    return a + b * z;
	  },
	  uniform: function uniform(a, b) {
	    var u = Math.random();
	
	    return a + u * (b - a);
	  },
	  triangular: function triangular(a, b, c) {
	    var u = Math.random();
	
	    if (u <= (b - a) / (c - a)) {
	      return a + Math.sqrt(u * (b - a) * (c - a));
	    }
	
	    return a - Math.sqrt((1 - u) * (c - b) * (c - a));
	  },
	  expo: function expo(l) {
	    var u = Math.random();
	
	    return -1 / l * Math.log(1 - u);
	  }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map