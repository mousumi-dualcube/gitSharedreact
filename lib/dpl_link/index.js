'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplLink = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

var _DplLink = require('./DplLink');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedDplLink = (0, _reactCssThemr.themr)(_identifiers.DPLLINK, _theme2.default)(_DplLink.DplLink);

exports.default = ThemedDplLink;
exports.DplLink = ThemedDplLink;


window.onload = function () {
  if ("ontouchstart" in window || "ontouch" in window) {
    document.body.setAttribute("data-screen", "touch");
  }
};