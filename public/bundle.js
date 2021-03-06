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
	
	var _SimulatorConfig = __webpack_require__(9);
	
	var _SimulatorConfig2 = _interopRequireDefault(_SimulatorConfig);
	
	var _Calculus = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Smooth Scoll
	$(function () {
	  $('a[href*="#"]:not([href="#"])').click(function () {
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
	
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
	    center1: parseFloat($('#serviceCenter1').val()),
	    center2: parseFloat($('#serviceCenter2').val())
	  };
	};
	
	var arriveTime = function arriveTime() {
	  return {
	    local: parseFloat($('#arriveTime1').val()),
	    remote: parseFloat($('#arriveTime2').val())
	  };
	};
	
	var serviceTime = function serviceTime() {
	  return {
	    reception: {
	      lls: parseFloat($('#receptionCenterLLS').val()),
	      llf: parseFloat($('#receptionCenterLLF').val()),
	      lla: parseFloat($('#receptionCenterLLA').val()),
	      lrs: parseFloat($('#receptionCenterLRS').val()),
	      lrf: parseFloat($('#receptionCenterLRF').val()),
	      lra: parseFloat($('#receptionCenterLRA').val()),
	      rls: parseFloat($('#receptionCenterRLS').val()),
	      rlf: parseFloat($('#receptionCenterRLF').val()),
	      rla: parseFloat($('#receptionCenterRLA').val()),
	      rrs: parseFloat($('#receptionCenterRRS').val()),
	      rrf: parseFloat($('#receptionCenterRRF').val()),
	      rra: parseFloat($('#receptionCenterRRA').val())
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
	  $('#pause').click(function () {
	    sim.stop();
	  });
	
	  $('#stop').click(function () {
	    sim.finish();
	  });
	
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
	
	var _Reception = __webpack_require__(7);
	
	var _Reception2 = _interopRequireDefault(_Reception);
	
	var _Calculus = __webpack_require__(6);
	
	var _Enum = __webpack_require__(3);
	
	var _Charts = __webpack_require__(8);
	
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
	    this.inMessages = 0;
	    this.outMessages = 0;
	    this.ll = 0;
	    this.lr = 0;
	    this.rl = 0;
	    this.rr = 0;
	    this.eventsCount = 0;
	    this.speed = 100;
	    this.stopped = false;
	    this.transitTimes = new Array();
	    this.sysMsgTimes = {};
	    this.localServTimes = {};
	    this.remoteServTimes = {};
	  }
	
	  // Big method because theres a lot of options to choose on users interface
	  // Returns a object {reception, service} within time based on the type and status
	
	
	  _createClass(Simulator, [{
	    key: 'messageTimes',
	    value: function messageTimes(type, status) {
	      if (type === _Enum.MessageType.LL) {
	        if (status === _Enum.MessageStatus.SUCCESS) {
	          return {
	            reception: this.config.serviceTime.reception.lls,
	            service: (0, _Calculus.parseDistribution)(this.config.serviceTime.service.lls)
	          };
	        }
	        if (status === _Enum.MessageStatus.FAILURE) {
	          return {
	            reception: this.config.serviceTime.reception.llf,
	            service: (0, _Calculus.parseDistribution)(this.config.serviceTime.service.llf)
	          };
	        }
	        if (status === _Enum.MessageStatus.DELAY) {
	          return {
	            reception: this.config.serviceTime.reception.lla,
	            service: (0, _Calculus.parseDistribution)(this.config.serviceTime.service.lla)
	          };
	        }
	      }
	      if (type === _Enum.MessageType.LR) {
	        if (status === _Enum.MessageStatus.SUCCESS) {
	          return {
	            reception: this.config.serviceTime.reception.lrs,
	            service: (0, _Calculus.parseDistribution)(this.config.serviceTime.service.lrs)
	          };
	        }
	        if (status === _Enum.MessageStatus.FAILURE) {
	          return {
	            reception: this.config.serviceTime.reception.lrf,
	            service: (0, _Calculus.parseDistribution)(this.config.serviceTime.service.lrf)
	          };
	        }
	        if (status === _Enum.MessageStatus.DELAY) {
	          return {
	            reception: this.config.serviceTime.reception.lra,
	            service: (0, _Calculus.parseDistribution)(this.config.serviceTime.service.lra)
	          };
	        }
	      }
	      if (type === _Enum.MessageType.RL) {
	        if (status === _Enum.MessageStatus.SUCCESS) {
	          return {
	            reception: this.config.serviceTime.reception.rls,
	            service: (0, _Calculus.parseDistribution)(this.config.serviceTime.service.rls)
	          };
	        }
	        if (status === _Enum.MessageStatus.FAILURE) {
	          return {
	            reception: this.config.serviceTime.reception.rlf,
	            service: (0, _Calculus.parseDistribution)(this.config.serviceTime.service.rlf)
	          };
	        }
	        if (status === _Enum.MessageStatus.DELAY) {
	          return {
	            reception: this.config.serviceTime.reception.rla,
	            service: (0, _Calculus.parseDistribution)(this.config.serviceTime.service.rla)
	          };
	        }
	      }
	      if (type === _Enum.MessageType.RR) {
	        if (status === _Enum.MessageStatus.SUCCESS) {
	          return {
	            reception: this.config.serviceTime.reception.rrs,
	            service: (0, _Calculus.parseDistribution)(this.config.serviceTime.service.rrs)
	          };
	        }
	        if (status === _Enum.MessageStatus.FAILURE) {
	          return {
	            reception: this.config.serviceTime.reception.rrf,
	            service: (0, _Calculus.parseDistribution)(this.config.serviceTime.service.rrf)
	          };
	        }
	        if (status === _Enum.MessageStatus.DELAY) {
	          return {
	            reception: this.config.serviceTime.reception.rra,
	            service: (0, _Calculus.parseDistribution)(this.config.serviceTime.service.rra)
	          };
	        }
	      }
	    }
	
	    // Creates one message, sorting the type, status and creating times based on then
	
	  }, {
	    key: 'generateMessage',
	    value: function generateMessage() {
	      var messageType = _Calculus.Sort.messageType(this.config.trafficVolumn);
	      var messageStatus = _Calculus.Sort.messageStatus(this.config.sfaTaxs, messageType);
	      var messageTimes = this.messageTimes(messageType, messageStatus);
	
	      var arrive = messageType.charAt(1) === 'L' ? _Calculus.Distribution.expo(this.config.arriveTime.local) : _Calculus.Distribution.expo(this.config.arriveTime.remote);
	      var message = new _EventMessage2.default(++this.lastMessage.id, this.lastMessage.execTime + arrive, messageTimes.reception, messageTimes.service, this.lastMessage.execTime + arrive, messageType, messageStatus, this.config.sfaTaxs, _Enum.MessageState.RECEPTION);
	      this.eventQueue.add(message);
	      this.lastMessage = message;
	    }
	
	    // distribute in a hash table the msg system by the time
	
	  }, {
	    key: 'distributeSysTimes',
	    value: function distributeSysTimes(nextTime) {
	      var currentMessages = this.inMessages - this.outMessages;
	      if (this.sysMsgTimes[currentMessages] === undefined) {
	        this.sysMsgTimes[currentMessages] = nextTime - this.currentTime;
	      } else {
	        this.sysMsgTimes[currentMessages] += nextTime - this.currentTime;
	      }
	    }
	
	    // distribute in a hash table the serv local/remote by the time
	
	  }, {
	    key: 'distributeServTimes',
	    value: function distributeServTimes(nextTime) {
	      var currentLocalServ = this.localServiceCenter.busyServers;
	      var currentRemoteServ = this.remoteServiceCenter.busyServers;
	      if (this.localServTimes[currentLocalServ] === undefined) {
	        this.localServTimes[currentLocalServ] = nextTime - this.currentTime;
	      } else {
	        this.localServTimes[currentLocalServ] += nextTime - this.currentTime;
	      }
	      if (this.remoteServTimes[currentRemoteServ] === undefined) {
	        this.remoteServTimes[currentRemoteServ] = nextTime - this.currentTime;
	      } else {
	        this.remoteServTimes[currentRemoteServ] += nextTime - this.currentTime;
	      }
	    }
	
	    // call when tap the stop/play button
	
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this.stopped = !this.stopped;
	
	      if (!this.stopped) {
	        this.run();
	      }
	    }
	
	    // update simulation speed based on radio button checked
	
	  }, {
	    key: 'updateSpeed',
	    value: function updateSpeed() {
	      var speed = $('input[name=optionsRadio]:checked').val();
	      if (speed === 'slow') {
	        this.speed = 1000;
	      }
	      if (speed === 'med') {
	        this.speed = 100;
	      }
	      if (speed === 'fast') {
	        this.speed = 10;
	      }
	    }
	
	    // create the initial message, init run simulation
	
	  }, {
	    key: 'start',
	    value: function start() {
	      var messageType = _Calculus.Sort.messageType(this.config.trafficVolumn);
	      var messageStatus = _Calculus.Sort.messageStatus(this.config.sfaTaxs, messageType);
	      var messageTimes = this.messageTimes(messageType, messageStatus);
	
	      this.lastMessage = new _EventMessage2.default(0, 0, messageTimes.reception, messageTimes.service, 0, messageType, messageStatus, this.config.sfaTaxs, _Enum.MessageState.RECEPTION);
	
	      this.eventQueue.add(this.lastMessage);
	      this.inMessages++;
	      this.updateSpeed();
	      this.run();
	    }
	
	    // recursive run method, takes the next event and run, update the view
	
	  }, {
	    key: 'run',
	    value: function run() {
	      var _this = this;
	
	      if (this.eventQueue.isEmpty()) {
	        return;
	      }
	
	      this.generateMessage();
	      var nextEvent = this.eventQueue.next();
	      this.distributeSysTimes(nextEvent.execTime);
	      this.distributeServTimes(nextEvent.execTime);
	      this.currentTime = nextEvent.execTime;
	      this.eventsCount++;
	
	      // out messages
	      if (nextEvent.state === _Enum.MessageState.FINISH && nextEvent.status !== _Enum.MessageStatus.DELAY) {
	        this.transitTimes.push(this.currentTime - nextEvent.enteredTime);
	        this.outMessages++;
	      }
	
	      // in messages
	      if (nextEvent.state === _Enum.MessageState.RECEPTION) {
	        this.inMessages++;
	        if (nextEvent.type === _Enum.MessageType.LL) {
	          this.ll++;
	        }
	        if (nextEvent.type === _Enum.MessageType.LR) {
	          this.lr++;
	        }
	        if (nextEvent.type === _Enum.MessageType.RL) {
	          this.rl++;
	        }
	        if (nextEvent.type === _Enum.MessageType.RR) {
	          this.rr++;
	        }
	      }
	
	      nextEvent.run(this.receptionCenter, this.localServiceCenter, this.remoteServiceCenter);
	
	      setTimeout(function () {
	        var simLog = 'Mensagem ID: ' + nextEvent.id + ' Estado: ' + nextEvent.state + ' Tipo: ' + nextEvent.type + ' Status: ' + nextEvent.status;
	
	        $('#simulation').append('<option>' + simLog + '</option>');
	
	        $('#currentTime').html(nextEvent.execTime.toFixed(3));
	        $('#inMessages').html(_this.inMessages);
	        $('#outMessages').html(_this.outMessages);
	        $('#actualMessages').html(_this.inMessages - _this.outMessages);
	        $('#events').html(_this.eventsCount);
	        $('#ocpLocal').html(_this.localServiceCenter.busyServers);
	        $('#ocpRemote').html(_this.remoteServiceCenter.busyServers);
	
	        $('#successMessages').html(_this.localServiceCenter.success + _this.remoteServiceCenter.success);
	        $('#failedMessages').html(_this.localServiceCenter.failure + _this.remoteServiceCenter.failure);
	        $('#delayedMessages').html(_this.localServiceCenter.delay + _this.remoteServiceCenter.delay);
	        $('#llMessages').html(_this.ll);
	        $('#lrMessages').html(_this.lr);
	        $('#rlMessages').html(_this.rl);
	        $('#rrMessages').html(_this.rr);
	
	        $('#minTransitTime').html(_Calculus.Statistic.min(_this.transitTimes).toFixed(3));
	        $('#maxTransitTime').html(_Calculus.Statistic.max(_this.transitTimes).toFixed(3));
	        $('#medTransitTime').html(_Calculus.Statistic.med(_this.transitTimes).toFixed(3));
	        $('#minMsgTime').html(_Calculus.Statistic.min(Object.keys(_this.sysMsgTimes).map(function (v, i) {
	          return parseInt(v);
	        })));
	        $('#medMsgTime').html(_Calculus.Statistic.medPond(_this.sysMsgTimes, _this.currentTime).toFixed(3));
	        $('#maxMsgTime').html(_Calculus.Statistic.max(Object.keys(_this.sysMsgTimes).map(function (v, i) {
	          return parseInt(v);
	        })));
	        $('#medLocalServTime').html(_Calculus.Statistic.medPond(_this.localServTimes, _this.currentTime).toFixed(3));
	        $('#medRemoteServTime').html(_Calculus.Statistic.medPond(_this.remoteServTimes, _this.currentTime).toFixed(3));
	
	        $('#time').css('width', parseInt(nextEvent.execTime / 10) + '%');
	
	        if (!_this.stopped) {
	          _this.run();
	        }
	      }, this.speed);
	    }
	  }, {
	    key: 'finish',
	    value: function finish() {
	      // just to make share that will stop the sim
	      this.eventQueue = new _EventQueue2.default();
	
	      _Charts.Charts.medSysMsg(_Charts.Charts.parseData(this.sysMsgTimes));
	      _Charts.Charts.servTime(_Charts.Charts.parseData(this.localServTimes), _Charts.Charts.parseData(this.remoteServTimes));
	      _Charts.Charts.sfaPie([this.localServiceCenter.success + this.remoteServiceCenter.success, this.localServiceCenter.failure + this.remoteServiceCenter.failure, this.localServiceCenter.delay + this.remoteServiceCenter.delay]);
	      _Charts.Charts.typePie([this.ll, this.lr, this.rl, this.rr]);
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
	  function EventMessage(id, execTime, recepTime, servTime, enteredTime, type, status, sfaTaxs, state) {
	    _classCallCheck(this, EventMessage);
	
	    this.id = id;
	    this.execTime = execTime;
	    this.recepTime = recepTime;
	    this.servTime = servTime;
	    this.enteredTime = enteredTime;
	    this.type = type;
	    this.status = status;
	    this.sfaTaxs = sfaTaxs;
	    this.state = state;
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
	    key: 'servTime',
	    value: function servTime() {}
	  }, {
	    key: 'receptionTime',
	    value: function receptionTime() {}
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
	
	var _Calculus = __webpack_require__(6);
	
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
	        this.eventQueue.add(new _EventMessage2.default(eventMessage.id, eventMessage.execTime + eventMessage.servTime, eventMessage.recepTime, eventMessage.servTime, eventMessage.enteredTime, eventMessage.type, eventMessage.status, eventMessage.sfaTaxs, _Enum.MessageState.FINISH));
	        this.busyServers++;
	      } else {
	        this.waitingQueue.push(eventMessage);
	      }
	    }
	  }, {
	    key: 'finish',
	    value: function finish(eventMessage) {
	      this.busyServers--;
	
	      if (this.waitingQueue.length > 0) {
	        var next = this.nextWaitingQueue();
	        this.eventQueue.add(new _EventMessage2.default(next.id, eventMessage.execTime + next.servTime, next.recepTime, next.servTime, next.enteredTime, next.type, next.status, next.sfaTaxs, _Enum.MessageState.FINISH));
	        this.busyServers++;
	      }
	
	      if (eventMessage.status === _Enum.MessageStatus.DELAY) {
	        this.delayMessage(eventMessage);
	        return;
	      }
	
	      if (eventMessage.status === _Enum.MessageStatus.SUCCESS) {
	        this.success++;
	      }
	      if (eventMessage.status === _Enum.MessageStatus.FAILURE) {
	        this.failure++;
	      }
	    }
	  }, {
	    key: 'delayMessage',
	    value: function delayMessage(eventMessage) {
	      this.delay++;
	      var status = _Calculus.Sort.messageStatus(eventMessage.sfaTaxs, eventMessage.type);
	
	      var delayed = new _EventMessage2.default(eventMessage.id, eventMessage.execTime, eventMessage.recepTime, eventMessage.servTime, eventMessage.enteredTime, eventMessage.type, status, eventMessage.sfaTaxs, _Enum.MessageState.SERVICE);
	
	      this.eventQueue.add(delayed);
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
	exports.parseDistribution = exports.Statistic = exports.Sort = exports.Distribution = undefined;
	
	var _Enum = __webpack_require__(3);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var Distribution = exports.Distribution = {
	  normal: function normal(a, b) {
	    var u1 = Math.random();
	    var u2 = Math.random();
	
	    var z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * 3.1415 * u2);
	
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
	
	    return c - Math.sqrt((1 - u) * (c - b) * (c - a));
	  },
	  expo: function expo(l) {
	    var u = Math.random();
	
	    return -1 / l * Math.log(1 - u);
	  }
	};
	
	var Sort = exports.Sort = {
	  messageType: function messageType(trafficVolumn) {
	    var ll = trafficVolumn.ll;
	    var lr = trafficVolumn.lr;
	    var rl = trafficVolumn.rl;
	    var rr = trafficVolumn.rr;
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
	  },
	  messageStatus: function messageStatus(sfaTaxs, type) {
	    var success = 0,
	        failure = 0,
	        delay = 0;
	
	    if (type === _Enum.MessageType.LL) {
	      success = sfaTaxs.success.ll;
	      failure = sfaTaxs.failure.ll;
	      delay = sfaTaxs.delay.ll;
	    }
	    if (type === _Enum.MessageType.LR) {
	      success = sfaTaxs.success.lr;
	      failure = sfaTaxs.failure.lr;
	      delay = sfaTaxs.delay.lr;
	    }
	    if (type === _Enum.MessageType.RL) {
	      success = sfaTaxs.success.rl;
	      failure = sfaTaxs.failure.rl;
	      delay = sfaTaxs.delay.rl;
	    }
	    if (type === _Enum.MessageType.RR) {
	      success = sfaTaxs.success.rr;
	      failure = sfaTaxs.failure.rr;
	      delay = sfaTaxs.delay.rr;
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
	};
	
	var Statistic = exports.Statistic = {
	  min: function min(list) {
	    if (list.length === 0) {
	      return 0;
	    }
	
	    return Math.min.apply(Math, _toConsumableArray(list));
	  },
	  max: function max(list) {
	    if (list.length === 0) {
	      return 0;
	    }
	
	    return Math.max.apply(Math, _toConsumableArray(list));
	  },
	  med: function med(list) {
	    if (list.length === 0) {
	      return 0;
	    }
	
	    var sum = 0;
	    list.forEach(function (value, index) {
	      sum += value;
	    });
	    return sum / list.length;
	  },
	  medPond: function medPond(hash, totalTime) {
	    var sum = 0;
	    for (var key in hash) {
	      sum += key * hash[key] / totalTime;
	    }
	
	    return sum;
	  }
	};
	
	var parseDistribution = exports.parseDistribution = function parseDistribution(expression) {
	  var match = /(\w+)\((.*)\)/i.exec(expression);
	
	  if (match === null) {
	    return Distribution.uniform(3, 7);
	  }
	
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
/* 7 */
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
	      this.eventQueue.add(new _EventMessage2.default(eventMessage.id, eventMessage.execTime + eventMessage.recepTime, eventMessage.recepTime, eventMessage.servTime, eventMessage.enteredTime, eventMessage.type, eventMessage.status, eventMessage.sfaTaxs, _Enum.MessageState.SERVICE));
	    }
	  }]);
	
	  return Reception;
	}();
	
	exports.default = Reception;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Charts = exports.Charts = {
	  medSysMsg: function medSysMsg(data) {
	    var ctx = document.getElementById("medSysMsgChart");
	    var myLineChart = new Chart(ctx, {
	      type: 'line',
	      data: {
	        datasets: [{
	          label: 'Tempo no Sistema',
	          backgroundColor: "rgba(75,192,192,0.4)",
	          borderColor: "rgba(75,192,192,1)",
	          borderCapStyle: 'butt',
	          data: data
	        }]
	      },
	      options: {
	        scales: {
	          xAxes: [{
	            scaleLabel: {
	              display: true,
	              labelString: 'Número de Mensagens no Sistema'
	            },
	            type: 'linear',
	            position: 'bottom'
	          }]
	        }
	      }
	    });
	  },
	  servTime: function servTime(local, remote) {
	    var ctx = document.getElementById('servTimesChart');
	    var myLineChart = new Chart(ctx, {
	      type: 'line',
	      data: {
	        datasets: [{
	          label: 'Tempo Servidor Local',
	          backgroundColor: "rgba(211,23,23,0.4)",
	          borderColor: "rgba(211,23,23,1)",
	          borderCapStyle: 'butt',
	          data: local
	        }, {
	          label: 'Tempo Servidor Remoto',
	          backgroundColor: "rgba(37,37,202,0.4)",
	          borderColor: "rgba(37,37,202,1)",
	          borderCapStyle: 'butt',
	          data: remote
	        }]
	      },
	      options: {
	        scales: {
	          xAxes: [{
	            scaleLabel: {
	              display: true,
	              labelString: 'Número de Servidores'
	            },
	            type: 'linear',
	            position: 'bottom'
	          }]
	        }
	      }
	    });
	  },
	  sfaPie: function sfaPie(data) {
	    var ctx = document.getElementById("sfaPie");
	    var myLineChart = new Chart(ctx, {
	      type: 'pie',
	      data: {
	        labels: ['Sucesso', 'Falha', 'Adiantamento'],
	        datasets: [{
	          label: 'Taxa de Conclusão ',
	          backgroundColor: ["rgba(23,211,23,0.5)", "rgba(211,23,211,0.5)", "rgba(23,211,211,0.5)"],
	          hoverBackgroundColor: ["rgba(23,211,23,0.9)", "rgba(211,23,211,0.9)", "rgba(23,211,211,0.9)"],
	          data: data
	        }]
	      }
	    });
	  },
	  typePie: function typePie(data) {
	    var ctx = document.getElementById("typePie");
	    var myLineChart = new Chart(ctx, {
	      type: 'pie',
	      data: {
	        labels: ['LL', 'LR', 'RL', 'RR'],
	        datasets: [{
	          label: 'Taxa de Direcionamento',
	          backgroundColor: ["rgba(211,23,23,0.5)", "rgba(139,71,3,0.5)", "rgba(211,211,23,0.5)", "rgba(23,122,221,0.5)"],
	          hoverBackgroundColor: ["rgba(211,23,23,0.9)", "rgba(139,71,3,0.9)", "rgba(211,211,23,0.9)", "rgba(23,122,221,0.9)"],
	          data: data
	        }]
	      }
	    });
	  },
	  parseData: function parseData(hash) {
	    var data = new Array();
	
	    for (var key in hash) {
	      data.push({ x: key, y: hash[key] });
	    }
	
	    return data;
	  }
	};

/***/ },
/* 9 */
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