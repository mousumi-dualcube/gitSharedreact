'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TilesCard = exports.tilesCardFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _dpl_link = require('../dpl_link');

var _dpl_link2 = _interopRequireDefault(_dpl_link);

var _dpl_icon = require('../dpl_icon');

var _dpl_icon2 = _interopRequireDefault(_dpl_icon);

var _card = require('../card');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
  var TilesCard = function (_React$Component) {
    _inherits(TilesCard, _React$Component);

    function TilesCard(props) {
      _classCallCheck(this, TilesCard);

      return _possibleConstructorReturn(this, (TilesCard.__proto__ || Object.getPrototypeOf(TilesCard)).call(this, props));
    }

    _createClass(TilesCard, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            className = _props.className,
            children = _props.children,
            theme = _props.theme,
            pattern = _props.pattern,
            others = _objectWithoutProperties(_props, ['className', 'children', 'theme', 'pattern']);

        var _props$option = this.props.option,
            href = _props$option.href,
            imagePath = _props$option.imagePath,
            title = _props$option.title,
            text = _props$option.text,
            version = _props$option.version,
            date = _props$option.date;


        return _react2.default.createElement(
          _card.Card,
          { className: theme.cards, pattern: pattern ? pattern : 'grid' },
          _react2.default.createElement(
            _dpl_link2.default,
            { href: href ? href : '#', className: theme.cardItemHover },
            _react2.default.createElement(
              'div',
              { className: theme.CardMediaOption },
              _react2.default.createElement(_card.CardMedia, {
                aspectRatio: 'wide',
                image: imagePath ? imagePath : '#',
                className: theme.ListCardMedia
              }),
              _react2.default.createElement(
                'div',
                { className: theme.CardDetails },
                _react2.default.createElement(_card.CardTitle, {
                  title: title,
                  className: theme.text_bold
                }),
                _react2.default.createElement(
                  _card.CardText,
                  { className: theme.description },
                  text
                ),
                _react2.default.createElement(
                  _card.CardActions,
                  { theme: theme, className: theme.buttons },
                  _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(_dpl_icon2.default, { name: 'file', iconstyle: true }),
                    _react2.default.createElement(
                      'label',
                      null,
                      version
                    )
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(_dpl_icon2.default, { name: 'clock-o', iconstyle: true }),
                    _react2.default.createElement(
                      'label',
                      null,
                      date
                    )
                  )
                )
              )
            )
          )
        );
      }
    }]);

    return TilesCard;
  }(_react2.default.Component);

  ;

  TilesCard.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.shape({})
  };

  TilesCard.defaultProps = {
    className: ''
  };

  return TilesCard;
};

var TilesCard = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLCARD)(TilesCard);
exports.tilesCardFactory = factory;
exports.TilesCard = TilesCard;