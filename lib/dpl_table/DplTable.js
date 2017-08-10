'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplTable = exports.dplTableFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _dpl_icon = require('../dpl_icon');

var _dpl_icon2 = _interopRequireDefault(_dpl_icon);

var _dpl_scrollbar = require('../dpl_scrollbar');

var _table = require('../table');

var _dpl_popover = require('../dpl_popover');

var _dpl_menuContainer = require('../dpl_menuContainer');

var _list = require('../list');

var _dpl_link = require('../dpl_link');

var _dpl_link2 = _interopRequireDefault(_dpl_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
  var DplTable = function (_React$Component) {
    _inherits(DplTable, _React$Component);

    function DplTable(props) {
      _classCallCheck(this, DplTable);

      var _this = _possibleConstructorReturn(this, (DplTable.__proto__ || Object.getPrototypeOf(DplTable)).call(this, props));

      _this.state = {
        height: 300
      };
      return _this;
    }

    _createClass(DplTable, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var that = this;
        this.setState({ height: document.getElementById('tableContainer').offsetHeight });
        setTimeout(function () {
          that.setState({ height: document.getElementById('tableContainer').offsetHeight });
        }, 600);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            chartTitle = _props.chartTitle,
            className = _props.className,
            data = _props.data,
            theme = _props.theme,
            tableHeaders = _props.tableHeaders,
            sortedData = _props.sortedData,
            children = _props.children,
            id = _props.id,
            label = _props.label,
            viewLink = _props.viewLink,
            subHeading = _props.subHeading,
            others = _objectWithoutProperties(_props, ['chartTitle', 'className', 'data', 'theme', 'tableHeaders', 'sortedData', 'children', 'id', 'label', 'viewLink', 'subHeading']);

        var collapsibleTable = (0, _classnames2.default)(theme.tableResponsive, theme.scrollableTable);

        return _react2.default.createElement(
          'div',
          { className: theme.tableConatiner, 'data-react-toolobox': 'tableResponsive' },
          _react2.default.createElement(
            'div',
            { className: theme.tabelDescription, ref: 'scrollTable' },
            _react2.default.createElement(
              'div',
              { className: theme.titleSetting },
              _react2.default.createElement(
                _dpl_menuContainer.DplMenuContainer,
                { title: 'STANDARD', icon: 'cog' },
                _react2.default.createElement(
                  _dpl_popover.DplPopover,
                  null,
                  _react2.default.createElement(
                    _list.List,
                    { selectable: true, ripple: true },
                    _react2.default.createElement(_list.ListItem, { caption: 'Export table' }),
                    _react2.default.createElement(_list.ListItem, { caption: 'Reset table' }),
                    _react2.default.createElement(_list.ListItem, { caption: 'Show/Hide columns' })
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: theme.labelClass },
                _react2.default.createElement(
                  'label',
                  null,
                  label
                ),
                _react2.default.createElement(
                  'div',
                  { className: theme.subHeading },
                  subHeading ? _react2.default.createElement(
                    'label',
                    { className: theme.subHead },
                    subHeading
                  ) : _react2.default.createElement(
                    _dpl_link2.default,
                    { href: viewLink },
                    'View full occupancy report'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _dpl_scrollbar.DplScrollbar,
            { scrollHeight: this.state.height },
            _react2.default.createElement(
              'div',
              { className: collapsibleTable },
              _react2.default.createElement(
                _table.Table,
                _defineProperty({ id: id, selectable: false }, 'id', 'tableContainer'),
                children
              )
            )
          )
        );
      }
    }]);

    return DplTable;
  }(_react2.default.Component);

  ;

  DplTable.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    tableHeaders: _react.PropTypes.array,
    sortedData: _react.PropTypes.array,
    theme: _react.PropTypes.shape({})
  };

  DplTable.defaultProps = {
    className: ''
  };

  return DplTable;
};

var DplTable = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLTABLE)(DplTable);
exports.dplTableFactory = factory;
exports.DplTable = DplTable;