"use strict";

require("core-js/modules/es.object.define-properties.js");

require("core-js/modules/es.object.define-property.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// TODO Step 7 import "./card.component.html"
(function () {
  // TODO Step 7 remove this closure
  var CardComponent = /*#__PURE__*/function () {
    function CardComponent(id) {
      _classCallCheck(this, CardComponent);

      // is this card flipped ?
      this._flipped = false; // has the matching card has been discovered already ?

      this.matched = false;
      this._id = id; // TODO Step 7: We can access the element from the component class that built an element from the template
      // TODO Step 7: don't use document.getElementById anymore

      this._elt = document.getElementById('card-template').content.cloneNode(true).firstElementChild;
      this._imageElt = this._elt.querySelector('.card-wrapper'); // TODO Step 7: Update the path for images

      this._imageElt.querySelector('img.front-face').src = "./card/assets/card-".concat(this._id, ".png");
      this._imageElt.querySelector('img.back-face').src = './card/assets/back.png';
    }

    _createClass(CardComponent, [{
      key: "flip",
      value: function flip() {
        this._imageElt.classList.toggle('flip');

        this._flipped = !this._flipped;
      }
    }, {
      key: "equals",
      value: function equals(card) {
        return card._id === this._id;
      }
    }, {
      key: "getElement",
      value: function getElement() {
        return this._elt;
      }
    }, {
      key: "flipped",
      get: function get() {
        return this._flipped;
      }
    }]);

    return CardComponent;
  }();

  var environment = {
    api: {}
  };
  Object.defineProperties(environment.api, {
    host: {
      get: function get() {
        debugger;
        throw new Error(atob('VG9vIGJhZCEgV2l0aG91dCBjbG9zdXJlLCBJIGNhbiBjb2xsaWRlIGJ5IG1pc3Rha2VzICB3aXRoIGdsb2JhbCB2YXJpYWJsZXMgdGhhdCBoYXZlIGJlZW4gc2V0IGluIGFub3RoZXIgZmlsZQ'));
      }
    }
  }); // put component in global scope, tu be runnable right from the HTML.
  // TODO Step 7 export CardComponent

  window.CardComponent = CardComponent;
})();