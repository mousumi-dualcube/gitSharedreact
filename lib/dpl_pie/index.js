'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplPie = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _DplPie = require('./DplPie');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DplPie = (0, _DplPie.dplPieFactory)();
var ThemedDplPie = (0, _reactCssThemr.themr)(_identifiers.DPLPIE, _theme2.default)(DplPie);

exports.default = ThemedDplPie;
exports.DplPie = ThemedDplPie;