'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.DplStatus = exports.dplStatusFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _dpl_link = require('../dpl_link');

var _dpl_link2 = _interopRequireDefault(_dpl_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
		var DplStatus = function (_React$Component) {
				_inherits(DplStatus, _React$Component);

				function DplStatus(props) {
						_classCallCheck(this, DplStatus);

						return _possibleConstructorReturn(this, (DplStatus.__proto__ || Object.getPrototypeOf(DplStatus)).call(this, props));
				}

				_createClass(DplStatus, [{
						key: 'render',
						value: function render() {
								var _props = this.props,
								    className = _props.className,
								    theme = _props.theme,
								    data = _props.data,
								    others = _objectWithoutProperties(_props, ['className', 'theme', 'data']);

								return _react2.default.createElement(
										'div',
										{ className: theme.statusChartContainer },
										data.map(function (value, index) {
												return _react2.default.createElement(
														'div',
														{ key: index, className: theme.statusChartDiv },
														_react2.default.createElement(
																_dpl_link2.default,
																{ className: theme.statusChartLink, href: value.url },
																_react2.default.createElement(
																		'span',
																		{ className: theme.statusChartTitle },
																		value.count
																),
																_react2.default.createElement(
																		'p',
																		{ className: theme.statusChartDesc },
																		value.desc
																)
														)
												);
										})
								);
						}
				}]);

				return DplStatus;
		}(_react2.default.Component);

		;

		DplStatus.propTypes = {
				children: _react.PropTypes.node,
				className: _react.PropTypes.string,
				theme: _react.PropTypes.shape({})
		};

		DplStatus.defaultProps = {
				className: ''
		};

		return DplStatus;
};

var DplStatus = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLSTATUS)(DplStatus);
exports.dplStatusFactory = factory;
exports.DplStatus = DplStatus;