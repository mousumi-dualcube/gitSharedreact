'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplScrollbar = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _DplScrollbar = require('./DplScrollbar');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DplScrollbar = (0, _DplScrollbar.dplScrollbarFactory)();
var ThemedDplScrollbar = (0, _reactCssThemr.themr)(_identifiers.DPLSCROLLBAR, _theme2.default)(DplScrollbar);

exports.default = ThemedDplScrollbar;
exports.DplScrollbar = ThemedDplScrollbar;