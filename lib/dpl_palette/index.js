'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplPalette = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _DplPalette = require('./DplPalette');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DplPalette = (0, _DplPalette.dplPaletteFactory)();
var ThemedDplPalette = (0, _reactCssThemr.themr)(_identifiers.DPLPALETTE, _theme2.default)(DplPalette);

exports.default = ThemedDplPalette;
exports.DplPalette = ThemedDplPalette;