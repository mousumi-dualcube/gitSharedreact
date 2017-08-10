'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplNavDrawer = exports.dplNavDrawerFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _dpl_accordion = require('../dpl_accordion');

var _dpl_icon = require('../dpl_icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
  var DplNavDrawer = function (_React$Component) {
    _inherits(DplNavDrawer, _React$Component);

    function DplNavDrawer(props) {
      _classCallCheck(this, DplNavDrawer);

      var _this = _possibleConstructorReturn(this, (DplNavDrawer.__proto__ || Object.getPrototypeOf(DplNavDrawer)).call(this, props));

      _this.setActiveParent = function (child) {
        var obj = child.map(function (item, idx) {
          return _this.props.active === item.href ? true : false;
        });
        return obj.includes(true);
      };

      return _this;
    }

    _createClass(DplNavDrawer, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            theme = _props.theme,
            data = _props.data,
            logo = _props.logo,
            active = _props.active,
            others = _objectWithoutProperties(_props, ['theme', 'data', 'logo', 'active']);

        return _react2.default.createElement(
          'div',
          { className: theme.sidebarContainer },
          _react2.default.createElement(
            'ul',
            { className: theme.sidebarNav },
            _react2.default.createElement(
              'li',
              { className: theme.sidebarBrand },
              _react2.default.createElement(_dpl_icon.DplIcon, { name: 'times', iconstyle: true, className: theme.navClose }),
              !logo ? "" : _react2.default.createElement(
                'a',
                { href: '#' },
                _react2.default.createElement('img', { src: logo, alt: 'logo', className: theme.logo })
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _dpl_accordion.DplAccordion,
                null,
                data.map(function (item, index) {
                  return item.child ? _react2.default.createElement(
                    'ul',
                    { key: index, 'data-active': _this2.setActiveParent(item.child), 'data-trigger': item.name, 'data-openIcon': 'plus', 'data-closeIcon': 'minus' },
                    item.child.map(function (item, idx) {
                      return _react2.default.createElement(
                        'li',
                        { key: idx },
                        _react2.default.createElement(
                          'a',
                          { 'data-active': active === item.href ? true : false, href: '#', style: { "width": "100%", "display": "block" } },
                          item.name
                        )
                      );
                    })
                  ) : _react2.default.createElement('ul', { key: index, 'data-active': active === item.href ? true : false, 'data-trigger': item.name });
                })
              )
            )
          )
        );
      }
    }]);

    return DplNavDrawer;
  }(_react2.default.Component);

  ;

  DplNavDrawer.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.shape({})
  };

  DplNavDrawer.defaultProps = {
    className: ''
  };

  return DplNavDrawer;
};

var DplNavDrawer = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLNAVDRAWER)(DplNavDrawer);
exports.dplNavDrawerFactory = factory;
exports.DplNavDrawer = DplNavDrawer;