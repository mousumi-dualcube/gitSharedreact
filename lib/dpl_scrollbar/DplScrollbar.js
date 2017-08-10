'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplScrollbar = exports.dplScrollbarFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domCss = require('dom-css');

var _domCss2 = _interopRequireDefault(_domCss);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _dpl_icon = require('../dpl_icon');

var _dpl_icon2 = _interopRequireDefault(_dpl_icon);

var _identifiers = require('../identifiers');

var _reactCustomScrollbars = require('react-custom-scrollbars');

var _dpl_button = require('../dpl_button');

var _dpl_button2 = _interopRequireDefault(_dpl_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
  var DplScrollbar = function (_React$Component) {
    _inherits(DplScrollbar, _React$Component);

    function DplScrollbar(props) {
      _classCallCheck(this, DplScrollbar);

      var _this = _possibleConstructorReturn(this, (DplScrollbar.__proto__ || Object.getPrototypeOf(DplScrollbar)).call(this, props));

      _this.state = {
        scrollLeftZero: true,
        scrollRightZero: false
      };

      _this.handleScrollUpdate = function (values) {
        var _this$refs = _this.refs,
            shadowLeft = _this$refs.shadowLeft,
            shadowRight = _this$refs.shadowRight;
        var scrollLeft = values.scrollLeft,
            scrollWidth = values.scrollWidth,
            clientWidth = values.clientWidth;

        var shadowLeftOpacity = 1 / 20 * Math.min(scrollLeft, 20);
        var rightScrollLeft = scrollWidth - clientWidth;
        var shadowRightOpacity = 1 / 20 * (rightScrollLeft - Math.max(scrollLeft, rightScrollLeft - 20));
        (0, _domCss2.default)(shadowLeft, { opacity: shadowLeftOpacity });
        (0, _domCss2.default)(shadowRight, { opacity: shadowRightOpacity });
      };

      _this.toScrollLeft = function (leftPosition, next_position) {
        var that = _this;
        setTimeout(function () {
          that.refs.scrollbars.scrollLeft(leftPosition);
          leftPosition--;
          if (leftPosition >= 0 && leftPosition > next_position) {
            that.toScrollLeft(leftPosition, next_position);
          }
        }, 0.005);
      };

      _this.toScrollRight = function (leftPosition, next_position) {
        var that = _this;
        setTimeout(function () {
          that.refs.scrollbars.scrollLeft(leftPosition);
          leftPosition++;
          if (leftPosition < next_position) {
            that.toScrollRight(leftPosition, next_position);
          }
        }, 0.005);
      };

      _this.handleScrolling = function (values) {
        var leftPosition = _this.refs.scrollbars.getScrollLeft();
        var scrollGap = 500;
        if (values == 'left') {
          var next_position = leftPosition - scrollGap;
          _this.toScrollLeft(leftPosition, next_position);
          _this.setState({ scrollRightZero: false });
          if (leftPosition <= scrollGap) _this.setState({ scrollLeftZero: true });
        } else if (values == 'right') {
          var _next_position = leftPosition + scrollGap;
          var that = _this;
          _this.toScrollRight(leftPosition, _next_position);
          _this.setState({ scrollLeftZero: false });
          if (_this.refs.scrollbars.getScrollWidth() == _this.refs.scrollbars.getClientWidth() + _this.refs.scrollbars.getScrollLeft()) _this.setState({ scrollRightZero: true });
        }
      };

      return _this;
    }

    _createClass(DplScrollbar, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            className = _props.className,
            children = _props.children,
            theme = _props.theme,
            scrollHeight = _props.scrollHeight,
            others = _objectWithoutProperties(_props, ['className', 'children', 'theme', 'scrollHeight']);

        return _react2.default.createElement(
          'div',
          { className: theme.scrollBarContainer },
          _react2.default.createElement(
            'div',
            { className: theme.scrollBtn },
            _react2.default.createElement(_dpl_button2.default, {
              icon: 'angle-left',
              mini: true,
              onClick: this.handleScrolling.bind(null, 'left'),
              disabled: this.state.scrollLeftZero ? true : false
            }),
            _react2.default.createElement(_dpl_button2.default, {
              icon: 'angle-right',
              mini: true,
              onClick: this.handleScrolling.bind(null, 'right'),
              disabled: this.state.scrollRightZero ? true : false
            })
          ),
          _react2.default.createElement(
            'div',
            { style: { 'position': 'relative' }, className: theme.tableBody },
            _react2.default.createElement(
              _reactCustomScrollbars.Scrollbars,
              { ref: 'scrollbars', style: { 'width': '100%', 'height': scrollHeight + 30, 'minHeight': 447 }, hideTracksWhenNotNeeded: true, onUpdate: this.handleScrollUpdate },
              children
            ),
            _react2.default.createElement('div', {
              ref: 'shadowLeft',
              className: theme.shadowLeftStyle,
              style: { 'height': scrollHeight }
            }),
            _react2.default.createElement('div', {
              ref: 'shadowRight',
              className: theme.shadowRightStyle,
              style: { 'height': scrollHeight }
            })
          )
        );
      }
    }]);

    return DplScrollbar;
  }(_react2.default.Component);

  ;

  DplScrollbar.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    tableHeaders: _react.PropTypes.array,
    sortedData: _react.PropTypes.array,
    theme: _react.PropTypes.shape({})
  };

  DplScrollbar.defaultProps = {
    className: ''
  };

  return DplScrollbar;
};

var DplScrollbar = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLSCROLLBAR)(DplScrollbar);
exports.dplScrollbarFactory = factory;
exports.DplScrollbar = DplScrollbar;