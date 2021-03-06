'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplPopover = exports.dplPopoverFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _menu = require('../menu');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
  var DplPopover = function (_React$Component) {
    _inherits(DplPopover, _React$Component);

    function DplPopover(props) {
      _classCallCheck(this, DplPopover);

      return _possibleConstructorReturn(this, (DplPopover.__proto__ || Object.getPrototypeOf(DplPopover)).call(this, props));
    }

    _createClass(DplPopover, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            theme = _props.theme,
            name = _props.name,
            disabled = _props.disabled,
            iconstyle = _props.iconstyle,
            title = _props.title,
            children = _props.children,
            others = _objectWithoutProperties(_props, ['theme', 'name', 'disabled', 'iconstyle', 'title', 'children']);

        return _react2.default.createElement(
          'li',
          { 'data-react-toolbox': 'dpl_popover' },
          children
        );
      }
    }]);

    return DplPopover;
  }(_react2.default.Component);

  ;

  DplPopover.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.shape({})
  };

  DplPopover.defaultProps = {
    className: ''
  };

  return DplPopover;
};

var DplPopover = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLPOPOVER)(DplPopover);
exports.dplPopoverFactory = factory;
exports.DplPopover = DplPopover;