'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseComponent = exports.baseComponentFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var factory = function factory() {
  var BaseComponent = function BaseComponent(_ref) {
    var className = _ref.className,
        theme = _ref.theme,
        children = _ref.children,
        other = _objectWithoutProperties(_ref, ['className', 'theme', 'children']);

    var classes = (0, _classnames2.default)(theme.baseComponent, {}, className);

    return _react2.default.createElement(
      'div',
      _extends({ 'data-react-toolbox': 'base-component', className: classes }, other),
      _react2.default.createElement(
        'span',
        null,
        'Base Component ',
        children
      )
    );
  };

  BaseComponent.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.shape({})
  };

  BaseComponent.defaultProps = {
    className: ''
  };

  return BaseComponent;
};

var BaseComponent = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.BASECOMPONENT)(BaseComponent);
exports.baseComponentFactory = factory;
exports.BaseComponent = BaseComponent;