'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplMenuContainer = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _DplMenuContainer = require('./DplMenuContainer');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DplMenuContainer = (0, _DplMenuContainer.dplMenuContainerFactory)();
var ThemedDplMenuContainer = (0, _reactCssThemr.themr)(_identifiers.DPLMENUCONTAINER, _theme2.default)(DplMenuContainer);

exports.default = ThemedDplMenuContainer;
exports.DplMenuContainer = ThemedDplMenuContainer;