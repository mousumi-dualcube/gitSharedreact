'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplButton = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _DplButton = require('./DplButton');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DplButton = (0, _DplButton.dplButtonFactory)();
var ThemeDplButton = (0, _reactCssThemr.themr)(_identifiers.DPLBUTTON, _theme2.default)(DplButton);

exports.default = ThemeDplButton;
exports.DplButton = ThemeDplButton;


window.onload = function () {
  if ("ontouchstart" in window || "ontouch" in window) {
    document.body.setAttribute("data-screen", "touch");
  }
};