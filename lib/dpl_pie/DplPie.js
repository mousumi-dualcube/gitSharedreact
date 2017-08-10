'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplPie = exports.dplPieFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _pie = require('react-d3-basic/lib/pie');

var _pie2 = _interopRequireDefault(_pie);

var _dpl_link = require('../dpl_link');

var _dpl_link2 = _interopRequireDefault(_dpl_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
  var DplPie = function (_React$Component) {
    _inherits(DplPie, _React$Component);

    function DplPie(props) {
      _classCallCheck(this, DplPie);

      var _this = _possibleConstructorReturn(this, (DplPie.__proto__ || Object.getPrototypeOf(DplPie)).call(this, props));

      _this.value = function (d) {
        return +d.result;
      };

      _this.name = function (d) {
        return d.status;
      };

      _this.state = {
        width: 180,
        height: 180,
        chartSeries: [{
          "field": "Completed",
          "name": "684 Completed",
          "color": "rgba(141,226,106,1)",
          "url": "https://www.google.com"
        }, {
          "field": "Continuing",
          "name": "3764 Continuing",
          "color": "rgba(255,163,0,1)",
          "url": "https://www.google.com"
        }, {
          "field": "Temp withdrawn",
          "name": "684 Temp withdrawn",
          "color": "rgba(0,181,226,1)",
          "url": "https://www.google.com"
        }, {
          "field": "withdrawn",
          "name": "684 withdrawn",
          "color": "rgba(233,79,59,1)",
          "url": "https://www.google.com"
        }]
      };
      return _this;
    }

    _createClass(DplPie, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            className = _props.className,
            data = _props.data,
            theme = _props.theme,
            chartSeries = _props.chartSeries,
            chartLink = _props.chartLink,
            others = _objectWithoutProperties(_props, ['className', 'data', 'theme', 'chartSeries', 'chartLink']);

        var pieChartLegend = (0, _classnames2.default)(theme.legendDashlet, 'legend');

        var totalValue = 0;
        var createLegend = chartSeries.map(function (chartItem, index) {
          totalValue += data[index].result;
          return _react2.default.createElement(
            _dpl_link2.default,
            { className: pieChartLegend, key: 'index' + index, href: chartItem.url },
            _react2.default.createElement('div', { style: { "backgroundColor": chartItem.color } }),
            _react2.default.createElement(
              'div',
              { className: theme.legendText },
              _react2.default.createElement(
                'strong',
                null,
                data[index].result
              ),
              '\xA0\xA0\xA0',
              data[index].status
            )
          );
        });

        if (data[0] != "undefined" && data[0] != null) {
          return _react2.default.createElement(
            'div',
            { className: theme.pieChartContainer },
            _react2.default.createElement(
              _dpl_link2.default,
              { className: theme.pieChartTotal, href: chartLink },
              _react2.default.createElement(_pie2.default, {
                data: data,
                width: this.state.width,
                height: this.state.height,
                chartSeries: chartSeries,
                value: this.value,
                name: this.name,
                innerRadius: 70,
                outerRadius: 50,
                showLegend: false,
                svgClassName: theme.pieChart,
                legendClassName: theme.legendDashlet
              }),
              _react2.default.createElement(
                'div',
                { className: theme.pieChartTotalLink },
                _react2.default.createElement(
                  'div',
                  { className: theme.pieChartTotalDiv },
                  _react2.default.createElement(
                    'span',
                    { className: theme.pieChartTotalText },
                    'Total'
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: theme.pieChartTotalValue },
                    totalValue
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: pieChartLegend },
              createLegend
            )
          );
        } else {
          return _react2.default.createElement(
            'div',
            { className: theme.pieChartContainer, style: { "color": "red" } },
            'Please choose correct Year'
          );
        }
      }
    }]);

    return DplPie;
  }(_react2.default.Component);

  ;

  DplPie.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.shape({})
  };

  DplPie.defaultProps = {
    className: ''
  };

  return DplPie;
};

var DplPie = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLPIE)(DplPie);
exports.dplPieFactory = factory;
exports.DplPie = DplPie;