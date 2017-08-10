'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplBar = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _DplBar = require('./DplBar');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DplBar = (0, _DplBar.dplBarFactory)();
var ThemedDplBar = (0, _reactCssThemr.themr)(_identifiers.DPLBAR, _theme2.default)(DplBar);

exports.default = ThemedDplBar;
exports.DplBar = ThemedDplBar;