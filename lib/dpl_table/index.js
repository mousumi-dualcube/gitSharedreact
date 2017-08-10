'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplTableCollapsible = exports.DplTable = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _DplTable = require('./DplTable');

var _DplTableCollapsible = require('./DplTableCollapsible');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DplTable = (0, _DplTable.dplTableFactory)();
var ThemeDplTable = (0, _reactCssThemr.themr)(_identifiers.DPLTABLE, _theme2.default)(DplTable);

var DplTableCollapsible = (0, _DplTableCollapsible.dplTableCollapsibleFactory)();
var ThemeDplTableCollapsible = (0, _reactCssThemr.themr)(_identifiers.DPLTABLE, _theme2.default)(DplTableCollapsible);

exports.default = ThemeDplTable;
exports.DplTable = ThemeDplTable;
exports.DplTableCollapsible = ThemeDplTableCollapsible;