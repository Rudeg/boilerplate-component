var component = (function () {
  'use strict';

  var babelHelpers = {};

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  babelHelpers;

  var pow = (function (a, b) {
    return Math.pow(a, b);
  })

  var Main = function () {
    function Main() {
      babelHelpers.classCallCheck(this, Main);

      this.cacl = function (a, b) {
        return a + b + 1;
      };
    }

    babelHelpers.createClass(Main, [{
      key: 'powing',
      value: function powing(a, b) {
        pow(a, b);
      }
    }]);
    return Main;
  }();

  return Main;

}());