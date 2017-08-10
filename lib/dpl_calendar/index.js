'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplCalendar = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _DplCalendar = require('./DplCalendar');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DplCalendar = (0, _DplCalendar.dplCalendarFactory)();
var ThemedDplCalendar = (0, _reactCssThemr.themr)(_identifiers.DPLCALENDAR, _theme2.default)(DplCalendar);

exports.default = ThemedDplCalendar;
exports.DplCalendar = ThemedDplCalendar;