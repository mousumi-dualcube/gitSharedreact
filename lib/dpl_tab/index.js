'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplTab = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _DplTab = require('./DplTab');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DplTab = (0, _DplTab.dplTabFactory)();
var ThemedDplTab = (0, _reactCssThemr.themr)(_identifiers.DPLTAB, _theme2.default)(DplTab);

exports.default = ThemedDplTab;
exports.DplTab = ThemedDplTab;