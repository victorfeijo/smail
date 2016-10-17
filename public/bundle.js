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
	
	var _SimulatorConfig = __webpack_require__(8);
	
	var _SimulatorConfig2 = _interopRequireDefault(_SimulatorConfig);
	
	var _Calculus = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var trafficVolumn = function trafficVolumn() {
	  return {
	    ll: parseFloat($('#trafficVolumnLL').val()),
	    rr: parseFloat($('#trafficVolumnRR').val()),
	    lr: parseFloat($('#trafficVolumnLR').val()),
	    rl: parseFloat($('#trafficVolumnRL').val())
	  };
	};
	
	var sfaTaxs = function sfaTaxs() {
	  return {
	    success: {
	      ll: parseFloat($('#sTaxsLL').val()),
	      rr: parseFloat($('#sTaxsRR').val()),
	      lr: parseFloat($('#sTaxsLR').val()),
	      rl: parseFloat($('#sTaxsRL').val())
	    },
	    failure: {
	      ll: parseFloat($('#fTaxsLL').val()),
	      rr: parseFloat($('#fTaxsRR').val()),
	      lr: parseFloat($('#fTaxsLR').val()),
	      rl: parseFloat($('#fTaxsRL').val())
	    },
	    delay: {
	      ll: parseFloat($('#aTaxsLL').val()),
	      rr: parseFloat($('#aTaxsRR').val()),
	      lr: parseFloat($('#aTaxsLR').val()),
	      rl: parseFloat($('#aTaxsRL').val())
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
	  var config = new _SimulatorConfig2.default(trafficVolumn(), sfaTaxs(), serviceCenter(), arriveTime(), serviceTime());
	  var sim = new _Simulator2.default(config);
	  sim.start();
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
	  function Simulator(config) {
	    _classCallCheck(this, Simulator);
	
	    this.config = config;
	    this.eventQueue = new _EventQueue2.default();
	    this.localServiceCenter = new _ServiceCenter2.default(this.eventQueue, this.config.serviceCenter.center1);
	    this.remoteServiceCenter = new _ServiceCenter2.default(this.eventQueue, this.config.serviceCenter.center2);
	    this.receptionCenter = new _Reception2.default(this.eventQueue);
	    this.currentTime = 0;
	  }
	
	  _createClass(Simulator, [{
	    key: 'rateMessageType',
	    value: function rateMessageType() {
	      var ll = this.config.trafficVolumn.ll;
	      var lr = this.config.trafficVolumn.lr;
	      var rl = this.config.trafficVolumn.rl;
	      var rr = this.config.trafficVolumn.rr;
	      var rand = Math.random() * 100;
	
	      if (rand <= ll) {
	        return _Enum.MessageType.LL;
	      }
	      if (rand <= ll + lr) {
	        return _Enum.MessageType.LR;
	      }
	      if (rand <= ll + lr + rl) {
	        return _Enum.MessageType.RL;
	      }
	
	      return _Enum.MessageType.RR;
	    }
	  }, {
	    key: 'generateEvents',
	    value: function generateEvents(n) {
	      var arrival = 0;
	
	      for (var i = 0; i < n; i++) {
	        this.eventQueue.add(new _EventMessage2.default(i, arrival, _Calculus.Distribution.uniform(5, 9), this.rateMessageType(), _Enum.MessageState.RECEPTION, this.config.sfaTaxs));
	
	        arrival += _Calculus.Distribution.uniform(0, 1);
	      }
	    }
	  }, {
	    key: 'start',
	    value: function start() {
	      this.generateEvents(120);
	
	      this.run();
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	      var _this = this;
	
	      if (this.eventQueue.isEmpty()) {
	        this.finish();
	
	        return;
	      }
	
	      var nextEvent = this.eventQueue.next();
	
	      nextEvent.run(this.receptionCenter, this.localServiceCenter, this.remoteServiceCenter);
	
	      setTimeout(function () {
	        console.log('execTime: ' + nextEvent.execTime + ' msgId: ' + nextEvent.id + ' state: ' + nextEvent.state + ' type: ' + nextEvent.type + ' localBusy: ' + _this.localServiceCenter.busyServers + ' remoteBusy: ' + _this.remoteServiceCenter.busyServers + ' localQueue: ' + _this.localServiceCenter.waitingQueue.length + ' remoteQueue: ' + _this.remoteServiceCenter.waitingQueue.length);
	        _this.run();
	      }, 1);
	    }
	  }, {
	    key: 'finish',
	    value: function finish() {
	      console.log('local -> success: ' + this.localServiceCenter.success + ' failure: ' + this.localServiceCenter.failure + ' delay: ' + this.localServiceCenter.delay);
	      console.log('remote -> success: ' + this.remoteServiceCenter.success + ' failure: ' + this.remoteServiceCenter.failure + ' delay: ' + this.remoteServiceCenter.delay);
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
	  function EventMessage(id, execTime, servTime, type, state, statusRate) {
	    _classCallCheck(this, EventMessage);
	
	    this.id = id;
	    this.execTime = execTime;
	    this.servTime = servTime;
	    this.type = type;
	    this.state = state;
	    this.statusRate = statusRate;
	  }
	
	  _createClass(EventMessage, [{
	    key: 'run',
	    value: function run(receptionCenter, localServiceCenter, remoteServiceCenter) {
	      if (this.state === _Enum.MessageState.RECEPTION) {
	        receptionCenter.receive(this);
	      } else if (this.state === _Enum.MessageState.SERVICE) {
	        if (this.type === _Enum.MessageType.LL || this.type === _Enum.MessageType.RL) {
	          localServiceCenter.receive(this);
	        } else {
	          remoteServiceCenter.receive(this);
	        }
	      } else if (this.state === _Enum.MessageState.FINISH) {
	        if (this.type === _Enum.MessageType.LL || this.type === _Enum.MessageType.RL) {
	          localServiceCenter.finish(this);
	        } else {
	          remoteServiceCenter.finish(this);
	        }
	      }
	    }
	  }, {
	    key: 'rate',
	    value: function rate() {
	      var success = 0,
	          failure = 0,
	          delay = 0;
	
	      if (this.type === _Enum.MessageType.LL) {
	        success = this.statusRate.success.ll;
	        failure = this.statusRate.failure.ll;
	        delay = this.statusRate.delay.ll;
	      }
	      if (this.type === _Enum.MessageType.LR) {
	        success = this.statusRate.success.lr;
	        failure = this.statusRate.failure.lr;
	        delay = this.statusRate.delay.lr;
	      }
	      if (this.type === _Enum.MessageType.RL) {
	        success = this.statusRate.success.rl;
	        failure = this.statusRate.failure.rl;
	        delay = this.statusRate.delay.rl;
	      }
	      if (this.type === _Enum.MessageType.RR) {
	        success = this.statusRate.success.rr;
	        failure = this.statusRate.failure.rr;
	        delay = this.statusRate.delay.rr;
	      }
	
	      var rand = Math.random() * 100;
	
	      if (rand <= success) {
	        return _Enum.MessageStatus.SUCCESS;
	      } else if (rand <= success + failure) {
	        return _Enum.MessageStatus.FAILURE;
	      } else if (rand <= success + failure + delay) {
	        return _Enum.MessageStatus.DELAY;
	      }
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
	
	var MessageStatus = exports.MessageStatus = {
	  SUCCESS: 'SUCCESS',
	  FAILURE: 'FAILURE',
	  DELAY: 'DELAY'
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
	  function ServiceCenter(eventQueue, servers) {
	    _classCallCheck(this, ServiceCenter);
	
	    this.eventQueue = eventQueue;
	    this.servers = servers;
	    this.busyServers = 0;
	    this.success = 0;
	    this.failure = 0;
	    this.delay = 0;
	    this.waitingQueue = new Array();
	  }
	
	  _createClass(ServiceCenter, [{
	    key: 'receive',
	    value: function receive(eventMessage) {
	      if (this.busyServers < this.servers) {
	        this.eventQueue.add(new _EventMessage2.default(eventMessage.id, eventMessage.servTime + eventMessage.execTime, eventMessage.servTime, eventMessage.type, _Enum.MessageState.FINISH, eventMessage.statusRate));
	        this.busyServers++;
	      } else {
	        this.waitingQueue.push(eventMessage);
	      }
	    }
	  }, {
	    key: 'finish',
	    value: function finish(eventMessage) {
	      var status = eventMessage.rate();
	
	      this.busyServers--;
	
	      if (this.waitingQueue.length > 0) {
	        var next = this.nextWaitingQueue();
	        this.eventQueue.add(new _EventMessage2.default(next.id, eventMessage.execTime + next.servTime, next.servTime, next.type, _Enum.MessageState.FINISH, next.statusRate));
	        this.busyServers++;
	      }
	
	      if (status === _Enum.MessageStatus.DELAY) {
	        this.delayMessage(eventMessage);
	        return;
	      }
	
	      if (status === _Enum.MessageStatus.SUCCESS) {
	        this.success++;
	      }
	      if (status === _Enum.MessageStatus.FAILURE) {
	        this.failure++;
	      }
	    }
	  }, {
	    key: 'delayMessage',
	    value: function delayMessage(eventMessage) {
	      this.delay++;
	      this.eventQueue.add(new _EventMessage2.default(eventMessage.id, eventMessage.execTime, eventMessage.servTime, eventMessage.type, _Enum.MessageState.SERVICE, eventMessage.statusRate));
	    }
	  }, {
	    key: 'nextWaitingQueue',
	    value: function nextWaitingQueue() {
	      return this.waitingQueue.shift();
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
	      this.eventQueue.add(new _EventMessage2.default(eventMessage.id, eventMessage.execTime + eventMessage.servTime, eventMessage.servTime, eventMessage.type, _Enum.MessageState.SERVICE, eventMessage.statusRate));
	    }
	  }]);
	
	  return Reception;
	}();
	
	exports.default = Reception;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
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
	
	var parseDistribution = exports.parseDistribution = function parseDistribution(expression) {
	  var match = /(\w+)\((.*)\)/i.exec(expression);
	  var distribution = match[1];
	  var params = match[2].split(';');
	
	  if (distribution.toLowerCase() === 'normal') {
	    if (params.length !== 2) {
	      return 0;
	    }
	
	    return Distribution.normal(parseFloat(params[0]), parseFloat(params[1]));
	  } else if (distribution.toLowerCase() === 'uniform') {
	    if (params.length !== 2) {
	      return 0;
	    }
	
	    return Distribution.uniform(parseFloat(params[0]), parseFloat(params[1]));
	  } else if (distribution.toLowerCase() === 'triangular') {
	    if (params.length !== 3) {
	      return 0;
	    }
	
	    return Distribution.triangular(parseFloat(params[0]), parseFloat(params[1]), parseFloat(params[2]));
	  } else if (distribution.toLowerCase() === 'expo') {
	    if (params.length !== 1) {
	      return 0;
	    }
	
	    return Distribution.expo(parseFloat(params[0]));
	  }
	
	  return 0;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SimulatorConfig = function SimulatorConfig(trafficVolumn, sfaTaxs, serviceCenter, arriveTime, serviceTime) {
	  _classCallCheck(this, SimulatorConfig);
	
	  this.trafficVolumn = trafficVolumn;
	  this.sfaTaxs = sfaTaxs;
	  this.serviceCenter = serviceCenter;
	  this.arriveTime = arriveTime;
	  this.serviceTime = serviceTime;
	};
	
	exports.default = SimulatorConfig;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map