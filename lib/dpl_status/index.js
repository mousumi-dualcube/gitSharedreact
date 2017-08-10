'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplStatus = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _DplStatus = require('./DplStatus');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DplStatus = (0, _DplStatus.dplStatusFactory)();
var ThemedDplStatus = (0, _reactCssThemr.themr)(_identifiers.DPLSTATUS, _theme2.default)(DplStatus);

exports.default = ThemedDplStatus;
exports.DplStatus = ThemedDplStatus;