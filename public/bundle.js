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
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Event = function () {
	  function Event(execute, service) {
	    _classCallCheck(this, Event);
	
	    this.execute = execute;
	    this.service = service;
	  }
	
	  _createClass(Event, [{
	    key: "finishTime",
	    value: function finishTime() {
	      return this.execute + this.service;
	    }
	  }, {
	    key: "run",
	    value: function run() {}
	  }]);
	
	  return Event;
	}();
	
	var Simulator = function () {
	  function Simulator() {
	    _classCallCheck(this, Simulator);
	
	    this.eventQueue = new Array();
	  }
	
	  _createClass(Simulator, [{
	    key: "generateEvents",
	    value: function generateEvents() {
	      for (var i = 0; i < 100; i++) {
	        this.eventQueue.push(new Event(Math.random() * 15, Math.random() * 15));
	      }
	    }
	  }, {
	    key: "start",
	    value: function start() {
	      var currentTime = 0;
	
	      this.generateEvents();
	
	      this.eventQueue.forEach(function (event, i) {
	        currentTime += event.finishTime();
	        // $("#testanu").html( `Tempo Atual: ${currentTime}` )
	      });
	
	      $("#currentTime").html("Tempo Atual: " + currentTime);
	    }
	  }]);
	
	  return Simulator;
	}();
	
	$('#alert').click(function () {
	  var sim = new Simulator();
	  sim.start();
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map