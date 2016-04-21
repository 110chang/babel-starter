(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

'use strict';

//clazz.js

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Clazz = function () {
  function Clazz() {
    _classCallCheck(this, Clazz);
  }

  _createClass(Clazz, [{
    key: 'works',
    value: function works() {
      return 'fine!';
    }
  }]);

  return Clazz;
}();

exports.default = Clazz;

},{}],2:[function(require,module,exports){

'use strict';

//main.js

var _clazz = require('./clazz.js');

var _clazz2 = _interopRequireDefault(_clazz);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function Main() {
  _classCallCheck(this, Main);

  this.clazz = new _clazz2.default();
  var msg = this.clazz.works();

  if (document) {
    var p = document.createElement('p');
    p.innerHTML = msg;
    document.getElementsByTagName('body')[0].appendChild(p);
  } else {
    console.log(msg);
  }
};

new Main();

},{"./clazz.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2xhenouanMiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNDQTs7Ozs7Ozs7Ozs7O0lBSXFCOzs7Ozs7OzRCQUNYO0FBQ04sYUFBTyxPQUFQLENBRE07Ozs7U0FEVzs7Ozs7OztBQ0pyQjs7OztBQUlBOzs7Ozs7OztJQUVNLE9BQ0osU0FESSxJQUNKLEdBQWM7d0JBRFYsTUFDVTs7QUFDWixPQUFLLEtBQUwsR0FBYSxxQkFBYixDQURZO0FBRVosTUFBTSxNQUFNLEtBQUssS0FBTCxDQUFXLEtBQVgsRUFBTixDQUZNOztBQUlaLE1BQUksUUFBSixFQUFjO0FBQ1osUUFBTSxJQUFJLFNBQVMsYUFBVCxDQUF1QixHQUF2QixDQUFKLENBRE07QUFFWixNQUFFLFNBQUYsR0FBYyxHQUFkLENBRlk7QUFHWixhQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLEVBQXlDLFdBQXpDLENBQXFELENBQXJELEVBSFk7R0FBZCxNQUlPO0FBQ0wsWUFBUSxHQUFSLENBQVksR0FBWixFQURLO0dBSlA7Q0FKRjs7QUFjRixJQUFJLElBQUoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4ndXNlIHN0cmljdCc7XG5cbi8vY2xhenouanNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhenoge1xuICB3b3JrcygpIHtcbiAgICByZXR1cm4gJ2ZpbmUhJztcbiAgfVxufVxuIiwiXG4ndXNlIHN0cmljdCc7XG5cbi8vbWFpbi5qc1xuXG5pbXBvcnQgQ2xhenogZnJvbSAnLi9jbGF6ei5qcyc7XG5cbmNsYXNzIE1haW4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNsYXp6ID0gbmV3IENsYXp6KCk7XG4gICAgY29uc3QgbXNnID0gdGhpcy5jbGF6ei53b3JrcygpO1xuXG4gICAgaWYgKGRvY3VtZW50KSB7XG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICBwLmlubmVySFRNTCA9IG1zZztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uYXBwZW5kQ2hpbGQocCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgfVxuICB9XG59XG5cbm5ldyBNYWluKCk7Il19
