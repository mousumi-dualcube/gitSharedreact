'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplPopover = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _DplPopover = require('./DplPopover');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DplPopover = (0, _DplPopover.dplPopoverFactory)();
var ThemedDplPopover = (0, _reactCssThemr.themr)(_identifiers.DPLPOPOVER, _theme2.default)(DplPopover);

exports.default = ThemedDplPopover;
exports.DplPopover = ThemedDplPopover;


window.onload = function () {
  if ("ontouchstart" in window || "ontouch" in window) {
    document.body.setAttribute("data-screen", "touch");
  }
};