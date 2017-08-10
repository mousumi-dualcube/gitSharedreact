'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplCollapsible = exports.dplCollapsibleFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _dpl_icon = require('../dpl_icon');

var _dpl_icon2 = _interopRequireDefault(_dpl_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
  var _DplCollapsible$defau;

  var DplCollapsible = function (_React$Component) {
    _inherits(DplCollapsible, _React$Component);

    function DplCollapsible(props) {
      _classCallCheck(this, DplCollapsible);

      var _this = _possibleConstructorReturn(this, (DplCollapsible.__proto__ || Object.getPrototypeOf(DplCollapsible)).call(this, props));

      _this.whichTransitionEnd = function (element) {
        var transitions = {
          'WebkitTransition': 'webkitTransitionEnd',
          'MozTransition': 'transitionend',
          'OTransition': 'oTransitionEnd otransitionend',
          'transition': 'transitionend'
        };

        for (var t in transitions) {
          if (element.style[t] !== undefined) {
            return transitions[t];
          }
        }
      };

      _this.componentDidMount = function () {
        _this.refs.outer.addEventListener(_this.whichTransitionEnd(_this.refs.outer), function (event) {
          if (_this.state.isClosed === false) {
            _this.setState({
              shouldSwitchAutoOnNextCycle: true
            });
          }
        });
      };

      _this.componentDidUpdate = function (prevProps) {

        if (_this.state.shouldSwitchAutoOnNextCycle === true && _this.state.isClosed === false) {
          _this.makeResponsive();
        }

        if (_this.state.shouldSwitchAutoOnNextCycle === true && _this.state.isClosed === true) {
          _this.prepareToOpen();
        }

        if (prevProps.open != _this.props.open) {
          if (_this.props.open === true) {
            _this.openCollapsible();
          } else {
            _this.closeCollapsible();
          }
        }
      };

      _this.handleTriggerClick = function (event) {
        event.preventDefault();
        if (_this.props.triggerDisabled) {
          return;
        }
        if (_this.props.handleTriggerClick) {
          if (_this.props.accordion) {
            if (_this.state.isClosed === true) {
              _this.openCollapsible();
            } else {
              _this.closeCollapsible();
            }
          }
          _this.props.handleTriggerClick(_this.props.accordionPosition);
        } else {
          if (_this.state.isClosed === true) {
            _this.openCollapsible();
          } else {
            _this.closeCollapsible();
          }
        }
      };

      _this.closeCollapsible = function () {
        _this.setState({
          isClosed: true,
          shouldSwitchAutoOnNextCycle: true,
          height: _this.refs.inner.offsetHeight,
          overflow: 'hidden'
        });
      };

      _this.openCollapsible = function () {
        _this.setState({
          height: _this.refs.inner.offsetHeight,
          transition: 'height ' + _this.props.transitionTime + 'ms ' + _this.props.easing,
          isClosed: false,
          hasBeenOpened: true
        });
      };

      _this.makeResponsive = function () {
        _this.setState({
          height: 'auto',
          transition: 'none',
          shouldSwitchAutoOnNextCycle: false,
          overflow: _this.props.overflowWhenOpen
        });
      };

      _this.prepareToOpen = function () {
        window.setTimeout(function () {
          _this.setState({
            height: 0,
            shouldSwitchAutoOnNextCycle: false,
            transition: 'height ' + _this.props.transitionTime + 'ms ' + _this.props.easing
          });
        }, 50);
      };

      _this.renderNonClickableTriggerElement = function () {
        if (_this.props.triggerSibling) {
          return _react2.default.createElement(
            'span',
            { className: _this.props.classParentString + "__trigger-sibling" },
            _this.props.triggerSibling
          );
        }
        return null;
      };

      if (_this.props.open) {
        _this.state = {
          isClosed: false,
          shouldSwitchAutoOnNextCycle: false,
          height: 'auto',
          transition: 'none',
          hasBeenOpened: true,
          overflow: _this.props.overflowWhenOpen
        };
      } else {
        _this.state = {
          isClosed: true,
          shouldSwitchAutoOnNextCycle: false,
          height: 0,
          transition: 'height ' + _this.props.transitionTime + 'ms ' + _this.props.easing,
          hasBeenOpened: false,
          overflow: 'hidden'
        };
      }
      return _this;
    }

    _createClass(DplCollapsible, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            theme = _props.theme,
            className = _props.className,
            openIcon = _props.openIcon,
            closeIcon = _props.closeIcon,
            activeElement = _props.activeElement,
            dir = _props.dir,
            others = _objectWithoutProperties(_props, ['theme', 'className', 'openIcon', 'closeIcon', 'activeElement', 'dir']);

        var dropdownStyle = {
          height: this.state.height,
          WebkitTransition: this.state.transition,
          msTransition: this.state.transition,
          transition: this.state.transition,
          overflow: this.state.overflow
        };

        var openClass = this.state.isClosed ? 'isClosed' : 'isOpen';
        var disabledClass = this.props.triggerDisabled ? theme.isDisabled : '';
        var trigger = this.state.isClosed === false && this.props.triggerWhenOpen !== undefined ? this.props.triggerWhenOpen : this.props.trigger;
        var children = this.props.children;
        if (this.props.lazyRender) if (!this.state.hasBeenOpened) children = null;

        var triggerClassName = (0, _classnames2.default)(theme.collapsibleTrigger, openClass, disabledClass);
        var position = dir;

        return _react2.default.createElement(
          'div',
          { 'data-react-dpl': 'collapsible', 'data-status': openClass, 'data-active': activeElement, className: theme.collapsible },
          _react2.default.createElement(
            'span',
            { className: triggerClassName, onClick: this.handleTriggerClick },
            trigger,
            Array.isArray(children) ? _react2.default.createElement(_dpl_icon2.default, { dir: position, name: this.state.isClosed ? openIcon ? openIcon : 'plus' : closeIcon ? closeIcon : 'minus', iconstyle: true }) : 'props' in children && 'children' in children.props ? _react2.default.createElement(_dpl_icon2.default, { dir: position, name: this.state.isClosed ? openIcon ? openIcon : 'plus' : closeIcon ? closeIcon : 'minus', iconstyle: true }) : ''
          ),
          this.renderNonClickableTriggerElement(),
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(theme.collapsibleContentOuter, this.props.contentOuterClassName), ref: 'outer', style: dropdownStyle },
            _react2.default.createElement(
              'div',
              { className: (0, _classnames2.default)(theme.collapsibleContentInner, this.props.contentInnerClassName), ref: 'inner' },
              Array.isArray(children) ? children : 'props' in children && 'children' in children.props ? children : ''
            )
          )
        );
      }
    }]);

    return DplCollapsible;
  }(_react2.default.Component);

  ;

  DplCollapsible.propTypes = {
    transitionTime: _react2.default.PropTypes.number,
    easing: _react2.default.PropTypes.string,
    open: _react2.default.PropTypes.bool,
    classParentString: _react2.default.PropTypes.string,
    openedClassName: _react2.default.PropTypes.string,
    triggerClassName: _react2.default.PropTypes.string,
    triggerOpenedClassName: _react2.default.PropTypes.string,
    contentOuterClassName: _react2.default.PropTypes.string,
    contentInnerClassName: _react2.default.PropTypes.string,
    accordionPosition: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    handleTriggerClick: _react2.default.PropTypes.func,
    trigger: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
    triggerWhenOpen: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
    triggerDisabled: _react2.default.PropTypes.bool,
    lazyRender: _react2.default.PropTypes.bool,
    overflowWhenOpen: _react2.default.PropTypes.oneOf(['hidden', 'visible', 'auto', 'scroll', 'inherit', 'initial', 'unset']),
    triggerSibling: _react2.default.PropTypes.element,
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.shape()
  };
  DplCollapsible.defaultProps = (_DplCollapsible$defau = {
    transitionTime: 400,
    easing: 'linear',
    open: false,
    classParentString: 'Collapsible',
    triggerDisabled: false,
    lazyRender: false,
    overflowWhenOpen: 'hidden',
    openedClassName: '',
    triggerClassName: '',
    triggerOpenedClassName: '',
    contentOuterClassName: '',
    contentInnerClassName: '',
    className: '',
    triggerSibling: null
  }, _defineProperty(_DplCollapsible$defau, 'className', ''), _defineProperty(_DplCollapsible$defau, 'dir', 'right'), _DplCollapsible$defau);

  return DplCollapsible;
};

var DplCollapsible = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLACCORDION)(DplCollapsible);
exports.dplCollapsibleFactory = factory;
exports.DplCollapsible = DplCollapsible;