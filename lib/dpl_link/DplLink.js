'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplLink = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _dpl_icon = require('../dpl_icon');

var _dpl_icon2 = _interopRequireDefault(_dpl_icon);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DplLink = function DplLink(_ref) {
  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      count = _ref.count,
      href = _ref.href,
      icon = _ref.icon,
      label = _ref.label,
      semibold = _ref.semibold,
      theme = _ref.theme,
      others = _objectWithoutProperties(_ref, ['active', 'children', 'className', 'count', 'href', 'icon', 'label', 'semibold', 'theme']);

  var _className = (0, _classnames3.default)(theme.dplLink, semibold ? theme.semiBold : '', _defineProperty({}, theme.active, active), className);

  return _react2.default.createElement(
    _reactRouter.Link,
    _extends({ 'data-react-toolbox': 'link', to: href, className: _className }, others),
    icon ? _react2.default.createElement(_dpl_icon2.default, { name: icon, iconstyle: true }) : null,
    label ? _react2.default.createElement(
      'abbr',
      null,
      label
    ) : null,
    count && parseInt(count) !== 0 ? _react2.default.createElement(
      'small',
      null,
      count
    ) : null,
    children
  );
};

DplLink.propTypes = {
  active: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  count: _react.PropTypes.number,
  icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
  label: _react.PropTypes.string,
  theme: _react.PropTypes.shape({
    active: _react.PropTypes.string,
    icon: _react.PropTypes.string,
    link: _react.PropTypes.string
  })
};

DplLink.defaultProps = {
  active: false,
  className: ''
};

exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLLINK)(DplLink);
exports.DplLink = DplLink;