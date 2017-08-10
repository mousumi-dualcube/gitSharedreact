'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplMenuContainer = exports.dplMenuContainerFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _menu = require('../menu');

var _dpl_icon = require('../dpl_icon');

var _dpl_icon2 = _interopRequireDefault(_dpl_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
  var DplMenuContainer = function (_React$Component) {
    _inherits(DplMenuContainer, _React$Component);

    function DplMenuContainer(props) {
      _classCallCheck(this, DplMenuContainer);

      return _possibleConstructorReturn(this, (DplMenuContainer.__proto__ || Object.getPrototypeOf(DplMenuContainer)).call(this, props));
    }

    _createClass(DplMenuContainer, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            theme = _props.theme,
            name = _props.name,
            disabled = _props.disabled,
            iconstyle = _props.iconstyle,
            title = _props.title,
            icon = _props.icon,
            children = _props.children,
            others = _objectWithoutProperties(_props, ['theme', 'name', 'disabled', 'iconstyle', 'title', 'icon', 'children']);

        return _react2.default.createElement(
          _menu.IconMenu,
          _extends({}, others, {
            icon: _react2.default.createElement(
              'span',
              null,
              icon ? _react2.default.createElement(_dpl_icon2.default, { name: icon, iconstyle: true }) : title
            ),
            position: 'topLeft',
            className: (0, _classnames2.default)(theme.menuList, icon ? theme.menuListIcon : '')
          }),
          children
        );
      }
    }]);

    return DplMenuContainer;
  }(_react2.default.Component);

  ;

  DplMenuContainer.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.shape({})
  };

  DplMenuContainer.defaultProps = {
    className: ''
  };

  return DplMenuContainer;
};

var DplMenuContainer = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLMENUCONTAINER)(DplMenuContainer);
exports.dplMenuContainerFactory = factory;
exports.DplMenuContainer = DplMenuContainer;