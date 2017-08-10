'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplNavDrawer = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _DplNavDrawer = require('./DplNavDrawer');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DplNavDrawer = (0, _DplNavDrawer.dplNavDrawerFactory)();
var ThemedDplNavDrawer = (0, _reactCssThemr.themr)(_identifiers.DPLNAVDRAWER, _theme2.default)(DplNavDrawer);

exports.default = ThemedDplNavDrawer;
exports.DplNavDrawer = ThemedDplNavDrawer;