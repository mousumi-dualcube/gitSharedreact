'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplPalette = exports.dplPaletteFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _card = require('../card');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
  var DplPalette = function (_React$Component) {
    _inherits(DplPalette, _React$Component);

    function DplPalette(props) {
      _classCallCheck(this, DplPalette);

      var _this = _possibleConstructorReturn(this, (DplPalette.__proto__ || Object.getPrototypeOf(DplPalette)).call(this, props));

      _this.state = {
        title: props.paletteTitle,
        color: props.paletteColor,
        type: props.paletteType
      };
      return _this;
    }

    _createClass(DplPalette, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            theme = _props.theme,
            className = _props.className,
            others = _objectWithoutProperties(_props, ['theme', 'className']);

        return _react2.default.createElement(
          'div',
          _extends({ 'data-react-toolbox': 'dpl-palette', 'data-type': this.state.type, className: (0, _classnames2.default)(theme.dplpalette, className) }, others),
          _react2.default.createElement(
            _card.Card,
            { className: theme.paletteCard },
            _react2.default.createElement(_card.CardMedia, {
              aspectRatio: 'wide',
              style: { "backgroundColor": this.state.paletteColor ? this.state.paletteColor : "" },
              className: (0, _classnames2.default)(theme.paletteCardMedia)
            }),
            _react2.default.createElement(_card.CardTitle, {
              title: this.state.title,
              subtitle: this.state.color,
              className: theme.paletteCardTitle
            })
          )
        );
      }
    }]);

    return DplPalette;
  }(_react2.default.Component);

  ;

  DplPalette.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.shape({})
  };

  DplPalette.defaultProps = {
    className: ''
  };

  return DplPalette;
};

var DplPalette = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLPALETTE)(DplPalette);
exports.dplPaletteFactory = factory;
exports.DplPalette = DplPalette;