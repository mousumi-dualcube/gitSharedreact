'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplAccordion = exports.dplAccordionFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _DplCollapsible = require('./DplCollapsible');

var _DplCollapsible2 = _interopRequireDefault(_DplCollapsible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
  var DplAccordion = function (_React$Component) {
    _inherits(DplAccordion, _React$Component);

    function DplAccordion(props) {
      _classCallCheck(this, DplAccordion);

      var _this = _possibleConstructorReturn(this, (DplAccordion.__proto__ || Object.getPrototypeOf(DplAccordion)).call(this, props));

      _this.handleTriggerClick = function (position) {
        _this.setState({
          openPosition: position
        });
      };

      var openPosition = _this.props.startPosition | -1;
      _this.state = {
        openPosition: openPosition
      };
      return _this;
    }

    _createClass(DplAccordion, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            theme = _props.theme,
            className = _props.className,
            others = _objectWithoutProperties(_props, ['theme', 'className']);

        if (Array.isArray(this.props.children)) {
          var nodes = this.props.children.map(function (node, index) {
            var triggerWhenOpen = node.props['data-trigger-when-open'] ? node.props['data-trigger-when-open'] : node.props['data-trigger'];
            var triggerDisabled = node.props['data-trigger-disabled'] || false;
            var activeElement = node.props['data-active'];
            return _react2.default.createElement(
              _DplCollapsible2.default,
              {
                theme: theme,
                key: "DplCollapsible" + index,
                handleTriggerClick: _this2.handleTriggerClick,
                open: index === _this2.state.openPosition,
                trigger: node.props['data-trigger'],
                triggerWhenOpen: triggerWhenOpen,
                triggerDisabled: triggerDisabled,
                transitionTime: _this2.props.transitionTime,
                easing: _this2.props.easing,
                accordionPosition: index,
                accordion: true,
                openIcon: node.props['data-openIcon'] ? node.props['data-openIcon'] : 'plus',
                closeIcon: node.props['data-closeIcon'] ? node.props['data-closeIcon'] : 'minus',
                activeElement: activeElement
              },
              node
            );
          });
          return _react2.default.createElement(
            'div',
            null,
            nodes
          );
        } else {
          var triggerWhenOpen = this.props.children.props['data-trigger-when-open'] ? this.props.children.props['data-trigger-when-open'] : this.props.children.props['data-trigger'];
          var triggerDisabled = this.props.children.props['data-trigger-disabled'] || false;
          var activeElement = this.props.children.props['data-active'];
          return _react2.default.createElement(
            _DplCollapsible2.default,
            {
              theme: theme,
              handleTriggerClick: this.handleTriggerClick,
              open: 0 === this.state.openPosition,
              trigger: this.props.children.props['data-trigger'],
              triggerWhenOpen: triggerWhenOpen,
              triggerDisabled: triggerDisabled,
              transitionTime: this.props.transitionTime,
              easing: this.props.easing,
              accordionPosition: 0,
              accordion: true,
              openIcon: 'fa-plus',
              activeElement: activeElement
            },
            this.props.children
          );
        }
      }
    }]);

    return DplAccordion;
  }(_react2.default.Component);

  ;

  DplAccordion.propTypes = {
    transitionTime: _react2.default.PropTypes.number,
    easing: _react2.default.PropTypes.string,
    startPosition: _react2.default.PropTypes.number,
    classParentString: _react2.default.PropTypes.string,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.shape({})
  };

  DplAccordion.defaultProps = {
    className: ''
  };

  return DplAccordion;
};

var DplAccordion = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLACCORDION)(DplAccordion);
exports.dplAccordionFactory = factory;
exports.DplAccordion = DplAccordion;