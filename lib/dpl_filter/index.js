'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplFilter = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _DplFilter = require('./DplFilter');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DplFilter = (0, _DplFilter.dplFilterFactory)();
var ThemedDplFilter = (0, _reactCssThemr.themr)(_identifiers.DPLFILTER, _theme2.default)(DplFilter);

exports.default = ThemedDplFilter;
exports.DplFilter = ThemedDplFilter;