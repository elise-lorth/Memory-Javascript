"use strict";

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.object.define-property.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// TODO Step 7 import "./score.component.html"
(function () {
  // TODO Step 7 remove this closure
  var ScoreComponent = /*#__PURE__*/function () {
    function ScoreComponent() {
      _classCallCheck(this, ScoreComponent);

      var params = parseUrl();
      this.name = params.name;
      this.size = parseInt(params.size);
      this.time = parseInt(params.time);
    }

    _createClass(ScoreComponent, [{
      key: "init",
      value: function init() {
        document.getElementById('name').innerText = this.name;
        document.getElementById('size').innerText = this.size;
        document.getElementById('time').innerText = this.time;
      }
    }]);

    return ScoreComponent;
  }();

  function parseUrl() {
    var url = window.location;
    var query = url.href.split('?')[1] || '';
    var delimiter = '&';
    var result = {};
    var parts = query.split(delimiter);
    parts.map(function (i) {
      var item = i;
      var kv = item.split('=');
      result[kv[0]] = kv[1];
    });
    return result;
  } // TODO Step 6 implement getTemplate() {}
  // put component in global scope, tu be runnable right from the HTML.
  // TODO Step 7 export ScoreComponent


  window.ScoreComponent = ScoreComponent;
})();