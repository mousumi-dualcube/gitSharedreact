'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplDropdown = exports.dplDropdownFactory = undefined;

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

var _dropdown = require('../dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
  var DplDropdown = function (_React$Component) {
    _inherits(DplDropdown, _React$Component);

    function DplDropdown(props) {
      _classCallCheck(this, DplDropdown);

      var _this = _possibleConstructorReturn(this, (DplDropdown.__proto__ || Object.getPrototypeOf(DplDropdown)).call(this, props));

      _this.handleChange = function (value) {
        _this.setState({ value: value });
      };

      _this.state = { value: '' };
      return _this;
    }

    _createClass(DplDropdown, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            theme = _props.theme,
            name = _props.name,
            disabled = _props.disabled,
            iconstyle = _props.iconstyle,
            data = _props.data,
            className = _props.className,
            label = _props.label,
            onChange = _props.onChange,
            others = _objectWithoutProperties(_props, ['theme', 'name', 'disabled', 'iconstyle', 'data', 'className', 'label', 'onChange']);

        var classname = (0, _classnames2.default)(theme.dplDropdown, className, this.props.disabled ? theme.dplDropdownDisabled : "");
        var letLabel = label ? label : 'Title Placeholder';
        return _react2.default.createElement(_dropdown2.default, _extends({}, others, {
          disabled: this.props.disabled ? true : false,
          auto: false,
          label: letLabel,
          className: (0, _classnames2.default)(theme.dplDropdown, this.props.disabled ? theme.dplDropdownDisabled : "", className),
          onChange: this.props.onChange || this.handleChange,
          source: data,
          value: this.state.value
        }));
      }
    }]);

    return DplDropdown;
  }(_react2.default.Component);

  ;

  DplDropdown.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.shape({})
  };

  DplDropdown.defaultProps = {
    className: ''
  };

  return DplDropdown;
};

var DplDropdown = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLDROPDOWN)(DplDropdown);
exports.dplDropdownFactory = factory;
exports.DplDropdown = DplDropdown;