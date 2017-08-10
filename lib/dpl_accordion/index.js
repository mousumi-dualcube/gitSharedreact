'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplCollapsible = exports.DplAccordion = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _DplAccordion = require('./DplAccordion');

var _DplCollapsible = require('./DplCollapsible');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DplAccordion = (0, _DplAccordion.dplAccordionFactory)();
var ThemedDplAccordion = (0, _reactCssThemr.themr)(_identifiers.DPLACCORDION, _theme2.default)(DplAccordion);

var DplCollapsible = (0, _DplCollapsible.dplCollapsibleFactory)();
var ThemedDplCollapsible = (0, _reactCssThemr.themr)(_identifiers.DPLACCORDION, _theme2.default)(DplCollapsible);

exports.default = ThemedDplAccordion;
exports.DplAccordion = ThemedDplAccordion;
exports.DplCollapsible = ThemedDplCollapsible;