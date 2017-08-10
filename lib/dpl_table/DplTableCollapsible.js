'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DplTableCollapsible = exports.dplTableCollapsibleFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssThemr = require('react-css-themr');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _identifiers = require('../identifiers');

var _dpl_icon = require('../dpl_icon');

var _dpl_icon2 = _interopRequireDefault(_dpl_icon);

var _table = require('../table');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
	var DplTableCollapsible = function (_React$Component) {
		_inherits(DplTableCollapsible, _React$Component);

		function DplTableCollapsible(props) {
			_classCallCheck(this, DplTableCollapsible);

			var _this = _possibleConstructorReturn(this, (DplTableCollapsible.__proto__ || Object.getPrototypeOf(DplTableCollapsible)).call(this, props));

			_this.handleClick = function () {
				_this.setState({ iscollapse: !_this.state.iscollapse });
			};

			_this.state = {
				iscollapse: false
			};
			return _this;
		}

		_createClass(DplTableCollapsible, [{
			key: 'render',
			value: function render() {
				var _this2 = this;

				var _props = this.props,
				    chartTitle = _props.chartTitle,
				    className = _props.className,
				    data = _props.data,
				    theme = _props.theme,
				    tableHeaders = _props.tableHeaders,
				    children = _props.children,
				    others = _objectWithoutProperties(_props, ['chartTitle', 'className', 'data', 'theme', 'tableHeaders', 'children']);

				var collapsibleTable = (0, _classnames2.default)(theme.tableResponsive, theme.collapsibleTableResponsive);
				return _react2.default.createElement(
					'div',
					{ className: theme.tableConatiner },
					_react2.default.createElement(
						'div',
						{ className: collapsibleTable },
						_react2.default.createElement(
							'div',
							{ className: (0, _classnames2.default)(theme.animated, this.state.iscollapse ? theme.stopanimated : '') },
							_react2.default.createElement(
								_table.Table,
								{ selectable: false },
								_react2.default.createElement(
									_table.TableHead,
									{ onClick: this.handleClick.bind(this), className: !this.state.iscollapse ? theme.iscollapsed : '' },
									tableHeaders.map(function (header, header_id) {
										return _react2.default.createElement(
											_table.TableCell,
											{ key: header_id, className: _this2.state.iscollapse ? '' : theme.addPad },
											header_id == 0 ? _react2.default.createElement(
												'p',
												{ className: theme.tableHeading },
												_this2.state.iscollapse ? _react2.default.createElement(_dpl_icon2.default, { name: 'chevron-circle-down', iconstyle: true }) : _react2.default.createElement(_dpl_icon2.default, { name: 'chevron-circle-right', iconstyle: true }),
												_react2.default.createElement(
													'label',
													null,
													header.name
												)
											) : _react2.default.createElement(
												'p',
												null,
												_react2.default.createElement(
													'span',
													{ className: theme.headerSpan },
													header.name
												),
												' ',
												!_this2.state.iscollapse ? _react2.default.createElement(
													'span',
													{ className: theme.headerSpan },
													header.value
												) : _react2.default.createElement(
													'span',
													{ className: theme.headerSpan, style: { "display": "none" } },
													header.value
												)
											)
										);
									})
								),
								children
							)
						)
					)
				);
			}
		}]);

		return DplTableCollapsible;
	}(_react2.default.Component);

	DplTableCollapsible.propTypes = {
		children: _react.PropTypes.node,
		className: _react.PropTypes.string,
		tableHeaders: _react.PropTypes.array,
		theme: _react.PropTypes.shape({})
	};

	DplTableCollapsible.defaultProps = {
		className: ''
	};

	return DplTableCollapsible;
};

var DplTableCollapsible = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLTABLE)(DplTableCollapsible);
exports.dplTableCollapsibleFactory = factory;
exports.DplTableCollapsible = DplTableCollapsible;