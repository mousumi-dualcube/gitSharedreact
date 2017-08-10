'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.DplBar = exports.dplBarFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _bar = require('react-d3-basic/lib/bar');

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
		var DplBar = function (_React$Component) {
				_inherits(DplBar, _React$Component);

				function DplBar(props) {
						_classCallCheck(this, DplBar);

						var _this = _possibleConstructorReturn(this, (DplBar.__proto__ || Object.getPrototypeOf(DplBar)).call(this, props));

						_this.state = {
								width: 320,
								height: 120,
								title: "Bar Chart",
								chartSeries: [{
										field: 'data',
										name: 'Data',
										color: "#00B5E2",
										style: {
												'fillOpacity': 1
										}
								}],
								xScale: 'ordinal',
								xLabel: "Month",
								yLabel: "Data",
								yTicks: [0, "%"],
								margins: { top: 12, right: 0, bottom: 30, left: 0 }

						};
						return _this;
				}

				_createClass(DplBar, [{
						key: 'render',
						value: function render() {
								var _props = this.props,
								    className = _props.className,
								    data = _props.data,
								    theme = _props.theme,
								    chartSeries = _props.chartSeries,
								    yOptional = _props.yOptional,
								    others = _objectWithoutProperties(_props, ['className', 'data', 'theme', 'chartSeries', 'yOptional']);

								if (this.props.data[0] != "undefined" && this.props.data[0] != null) {
										if (yOptional == true) {
												return _react2.default.createElement(
														'div',
														{ className: theme.barChartContainer },
														_react2.default.createElement(_bar2.default, {
																title: this.state.title,
																data: this.props.data,
																width: this.state.width,
																height: this.state.height,
																chartSeries: this.props.chartSeries,
																x: this.props.xAxix,
																margins: this.state.margins,
																xScale: 'ordinal',
																showXGrid: false,
																showYAxis: false,
																barPadding: 0,
																showLegend: false,
																svgClassName: theme.barChart,
																legendClassName: theme.legendBarDashlet
														}),
														_react2.default.createElement(
																'div',
																{ className: theme.barChartEnrolment },
																this.props.legendDesc ? this.props.legendDesc : ''
														)
												);
										} else {
												return _react2.default.createElement(
														'div',
														{ className: theme.barChartContainer },
														_react2.default.createElement(_bar2.default, {
																title: this.state.title,
																data: this.props.data,
																width: this.state.width,
																height: this.state.height,
																chartSeries: this.props.chartSeries,
																x: this.props.xAxix,
																y: this.props.yAxix,
																margins: this.state.margins,
																xScale: 'ordinal',
																showXGrid: false,
																showYAxis: false,
																barPadding: 0,
																showLegend: false,
																svgClassName: theme.barChart,
																legendClassName: theme.legendBarDashlet
														}),
														_react2.default.createElement(
																'div',
																{ className: theme.barChartEnrolment },
																this.props.legendDesc ? this.props.legendDesc : ''
														)
												);
										}
								} else {
										return _react2.default.createElement(
												'div',
												{ className: theme.barChartContainer, style: { "color": "red" } },
												'Please choose correct Year'
										);
								}
						}
				}]);

				return DplBar;
		}(_react2.default.Component);

		;

		DplBar.propTypes = {
				children: _react.PropTypes.node,
				className: _react.PropTypes.string,
				theme: _react.PropTypes.shape({})
		};

		DplBar.defaultProps = {
				className: ''
		};

		return DplBar;
};

var DplBar = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLBAR)(DplBar);
exports.dplBarFactory = factory;
exports.DplBar = DplBar;