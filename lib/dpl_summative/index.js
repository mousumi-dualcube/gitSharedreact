'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplSummative = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _DplSummative = require('./DplSummative');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DplSummative = (0, _DplSummative.dplSummativeFactory)();
var ThemedDplSummative = (0, _reactCssThemr.themr)(_identifiers.DPLSUMMATIVE, _theme2.default)(DplSummative);

exports.default = ThemedDplSummative;
exports.DplSummative = ThemedDplSummative;