'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseComponent = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _BaseComponent = require('./BaseComponent');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseComponent = (0, _BaseComponent.baseComponentFactory)();
var ThemedBaseComponent = (0, _reactCssThemr.themr)(_identifiers.BASECOMPONENT, _theme2.default)(BaseComponent);

exports.default = ThemedBaseComponent;
exports.BaseComponent = ThemedBaseComponent;