'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplTab = exports.dplTabFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _tabs = require('../tabs');

var _reactCustomScrollbars = require('react-custom-scrollbars');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
  var DplTab = function (_React$Component) {
    _inherits(DplTab, _React$Component);

    function DplTab(props) {
      _classCallCheck(this, DplTab);

      var _this = _possibleConstructorReturn(this, (DplTab.__proto__ || Object.getPrototypeOf(DplTab)).call(this, props));

      _this.state = {
        index: 0,
        fixedIndex: 1,
        inverseIndex: 1
      };

      _this.handleTabChange = function (index) {
        _this.setState({ index: index });
      };

      return _this;
    }

    _createClass(DplTab, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            theme = _props.theme,
            data = _props.data,
            others = _objectWithoutProperties(_props, ['theme', 'data']);

        return _react2.default.createElement(
          'section',
          { 'data-react-toolbox': 'dplTab' },
          _react2.default.createElement(
            _tabs.Tabs,
            { index: this.state.index, onChange: this.handleTabChange },
            data.map(function (tab_data, idx) {
              return _react2.default.createElement(
                _tabs.Tab,
                { key: idx, label: tab_data.tabtitle },
                _react2.default.createElement(
                  _reactCustomScrollbars.Scrollbars,
                  { style: { 'width': '100%', 'height': 90 } },
                  tab_data.tabtext.map(function (tab_text, tab_data_idx) {
                    return _react2.default.createElement(
                      'p',
                      { key: tab_data_idx },
                      tab_text
                    );
                  })
                )
              );
            })
          )
        );
      }
    }]);

    return DplTab;
  }(_react2.default.Component);

  ;

  DplTab.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.shape({})
  };

  DplTab.defaultProps = {
    className: ''
  };

  return DplTab;
};

var DplTab = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLTAB)(DplTab);
exports.dplTabFactory = factory;
exports.DplTab = DplTab;