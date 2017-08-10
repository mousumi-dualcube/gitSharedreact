'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplCard = exports.dplCardFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _reactFlipcard = require('react-flipcard');

var _reactFlipcard2 = _interopRequireDefault(_reactFlipcard);

var _button = require('../button');

var _dpl_icon = require('../dpl_icon');

var _dpl_icon2 = _interopRequireDefault(_dpl_icon);

var _TilesCard = require('./TilesCard');

var _TilesCard2 = _interopRequireDefault(_TilesCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
  var DplCard = function (_React$Component) {
    _inherits(DplCard, _React$Component);

    function DplCard(props) {
      _classCallCheck(this, DplCard);

      var _this = _possibleConstructorReturn(this, (DplCard.__proto__ || Object.getPrototypeOf(DplCard)).call(this, props));

      _this.state = { isFlipped: false };
      return _this;
    }

    _createClass(DplCard, [{
      key: 'showBack',
      value: function showBack() {
        this.setState({ isFlipped: true });
      }
    }, {
      key: 'showFront',
      value: function showFront() {
        this.setState({ isFlipped: false });
      }
    }, {
      key: 'handleOnFlip',
      value: function handleOnFlip(flipped, dashlet) {
        if (flipped) {
          //this.refs.backButton.getDOMNode().focus();
        }
      }
    }, {
      key: 'handleKeyDown',
      value: function handleKeyDown(e) {
        if (this.state.isFlipped && e.keyCode === 27) {
          this.showFront();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            className = _props.className,
            children = _props.children,
            theme = _props.theme,
            chartTitle = _props.chartTitle,
            renderCharts = _props.renderCharts,
            renderFlipCard = _props.renderFlipCard,
            cardDesciption = _props.cardDesciption,
            flipCard = _props.flipCard,
            option = _props.option,
            pattern = _props.pattern,
            others = _objectWithoutProperties(_props, ['className', 'children', 'theme', 'chartTitle', 'renderCharts', 'renderFlipCard', 'cardDesciption', 'flipCard', 'option', 'pattern']);

        return _react2.default.createElement(
          'div',
          { className: theme.CardContainer, 'data-react-toolobox': 'CardContainer' },
          flipCard ? _react2.default.createElement(
            'div',
            { className: theme.flipCard },
            _react2.default.createElement(
              _reactFlipcard2.default,
              {
                disabled: true,
                flipped: this.state.isFlipped,
                onFlip: this.handleOnFlip,
                onKeyDown: this.handleKeyDown
              },
              _react2.default.createElement(
                'div',
                { className: theme.chartCard },
                _react2.default.createElement(
                  'div',
                  { className: theme.chartTitle },
                  _react2.default.createElement(
                    'h2',
                    null,
                    chartTitle
                  ),
                  _react2.default.createElement(
                    'button',
                    { type: 'button', onClick: this.showBack.bind(this) },
                    _react2.default.createElement(_dpl_icon2.default, { name: 'info-circle', iconstyle: true })
                  )
                ),
                children
              ),
              _react2.default.createElement(
                'div',
                { className: theme.chartCard },
                _react2.default.createElement(
                  'div',
                  { className: theme.chartTitle },
                  _react2.default.createElement(
                    'h2',
                    null,
                    chartTitle
                  ),
                  _react2.default.createElement(
                    'button',
                    { type: 'button', ref: 'backButton', onClick: this.showFront.bind(this) },
                    _react2.default.createElement(_dpl_icon2.default, { name: 'arrow-circle-left', iconstyle: true })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: theme.cardDesciption },
                  cardDesciption
                )
              )
            )
          ) : _react2.default.createElement(
            'div',
            { className: theme.flipCard },
            _react2.default.createElement(
              'div',
              { className: theme.chartCard },
              _react2.default.createElement(_TilesCard2.default, { option: option, theme: theme, pattern: pattern })
            )
          )
        );
      }
    }]);

    return DplCard;
  }(_react2.default.Component);

  ;

  DplCard.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.shape({})
  };

  DplCard.defaultProps = {
    className: ''
  };

  return DplCard;
};

var DplCard = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLCARD)(DplCard);
exports.dplCardFactory = factory;
exports.DplCard = DplCard;