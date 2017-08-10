'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplIcon = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _DplIcon = require('./DplIcon');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DplIcon = (0, _DplIcon.dplIconFactory)();
var ThemedDplIcon = (0, _reactCssThemr.themr)(_identifiers.DPLICON, _theme2.default)(DplIcon);

exports.default = ThemedDplIcon;
exports.DplIcon = ThemedDplIcon;


window.onload = function () {
  if ("ontouchstart" in window || "ontouch" in window) {
    document.body.setAttribute("data-screen", "touch");
  }
};