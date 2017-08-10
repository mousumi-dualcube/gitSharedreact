'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplDropdown = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _DplDropdown = require('./DplDropdown');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DplDropdown = (0, _DplDropdown.dplDropdownFactory)();
var ThemedDplDropdown = (0, _reactCssThemr.themr)(_identifiers.DPLDROPDOWN, _theme2.default)(DplDropdown);

exports.default = ThemedDplDropdown;
exports.DplDropdown = ThemedDplDropdown;