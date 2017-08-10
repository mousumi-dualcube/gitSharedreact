'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplIcon = exports.dplIconFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
  var DplIcon = function (_React$Component) {
    _inherits(DplIcon, _React$Component);

    function DplIcon(props) {
      _classCallCheck(this, DplIcon);

      return _possibleConstructorReturn(this, (DplIcon.__proto__ || Object.getPrototypeOf(DplIcon)).call(this, props));
    }

    _createClass(DplIcon, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            theme = _props.theme,
            name = _props.name,
            disabled = _props.disabled,
            iconstyle = _props.iconstyle,
            className = _props.className,
            dir = _props.dir,
            others = _objectWithoutProperties(_props, ['theme', 'name', 'disabled', 'iconstyle', 'className', 'dir']);

        var classname = (0, _classnames2.default)(theme.renderIconStyle, className);
        return _react2.default.createElement(_reactFontawesome2.default, _extends({}, others, {
          name: name,
          'data-dir': dir == "left" ? "left" : "right",
          disabled: disabled == true ? true : false,
          className: iconstyle == true ? classname : ''
        }));
      }
    }]);

    return DplIcon;
  }(_react2.default.Component);

  ;

  DplIcon.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.shape({})
  };

  DplIcon.defaultProps = {
    className: ''
  };

  return DplIcon;
};

var DplIcon = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLICON)(DplIcon);
exports.dplIconFactory = factory;
exports.DplIcon = DplIcon;