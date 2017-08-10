'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TilesCard = exports.DplCard = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _DplCard = require('./DplCard');

var _TilesCard = require('./TilesCard');

var _theme = require('./theme.css');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DplCard = (0, _DplCard.dplCardFactory)();
var ThemedDplCard = (0, _reactCssThemr.themr)(_identifiers.DPLCARD, _theme2.default)(DplCard);

var TilesCard = (0, _TilesCard.tilesCardFactory)();
var ThemedTilesCard = (0, _reactCssThemr.themr)(_identifiers.DPLCARD, _theme2.default)(TilesCard);

exports.default = ThemedDplCard;
exports.DplCard = ThemedDplCard;
exports.TilesCard = ThemedTilesCard;