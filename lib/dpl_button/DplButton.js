'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplButton = exports.dplButtonFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _dpl_icon = require('../dpl_icon');

var _dpl_icon2 = _interopRequireDefault(_dpl_icon);

var _button = require('../button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
  var DplButton = function (_Component) {
    _inherits(DplButton, _Component);

    function DplButton() {
      _classCallCheck(this, DplButton);

      return _possibleConstructorReturn(this, (DplButton.__proto__ || Object.getPrototypeOf(DplButton)).apply(this, arguments));
    }

    _createClass(DplButton, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            theme = _props.theme,
            disabled = _props.disabled,
            iconstyle = _props.iconstyle,
            icon = _props.icon,
            label = _props.label,
            iconbutton = _props.iconbutton,
            mini = _props.mini,
            secondary = _props.secondary,
            download = _props.download,
            target = _props.target,
            href = _props.href,
            action = _props.action,
            className = _props.className,
            others = _objectWithoutProperties(_props, ['theme', 'disabled', 'iconstyle', 'icon', 'label', 'iconbutton', 'mini', 'secondary', 'download', 'target', 'href', 'action', 'className']);

        var renderLink = (0, _classnames2.default)(theme.flat, theme.neutral, theme.iconbutton, className);
        var btn = (0, _classnames2.default)(theme.flat, theme.neutral, className);

        if (this.props.download) {
          return _react2.default.createElement(
            'form',
            { method: 'get', action: action, className: theme.downloadButton },
            _react2.default.createElement(
              _button.Button,
              _extends({}, others, {
                className: label ? btn : renderLink,
                disabled: disabled ? true : false,
                mini: mini ? true : false,
                'data-mini': mini ? "mini" : "",
                'data-alt': secondary ? "secondary" : "",
                type: 'submit',
                href: href ? href : "",
                target: target ? target : "",
                ripple: false
              }),
              icon ? _react2.default.createElement(_dpl_icon2.default, { iconstyle: false, name: icon }) : "",
              _react2.default.createElement(
                'span',
                { className: theme.downloadButtonLabel },
                label
              )
            )
          );
        } else {
          return _react2.default.createElement(
            _button.Button,
            _extends({}, others, {
              className: label ? btn : renderLink,
              disabled: disabled ? true : false,
              mini: mini ? true : false,
              'data-alt': secondary ? "secondary" : "",
              'data-mini': mini ? "mini" : "",
              href: href ? href : "",
              target: target ? target : "",
              ripple: false
            }),
            icon ? _react2.default.createElement(_dpl_icon2.default, { iconstyle: false, name: icon }) : "",
            label
          );
        }
      }
    }]);

    return DplButton;
  }(_react.Component);

  ;

  DplButton.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.shape({})
  };

  DplButton.defaultProps = {
    className: ''
  };

  return DplButton;
};

var DplButton = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLBUTTON)(DplButton);
exports.dplButtonFactory = factory;
exports.DplButton = DplButton;