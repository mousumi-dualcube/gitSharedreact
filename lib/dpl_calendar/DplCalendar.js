'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplCalendar = exports.dplCalendarFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _dpl_icon = require('../dpl_icon');

var _dpl_icon2 = _interopRequireDefault(_dpl_icon);

var _identifiers = require('../identifiers');

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('!style-loader!css-loader!react-datepicker/dist/react-datepicker.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    _classCallCheck(this, Example);

    var _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));

    _this.handleChangeStart = function (date) {
      _this.setState({ startDate: date });
      _this.toggleCalendar();
    };

    _this.handleChangeEnd = function (date) {
      _this.setState({ startDate: date });
      _this.toggleCalendar();
    };

    _this.toggleCalendar = function (e) {
      e && e.preventDefault();
      _this.setState({ isOpen: !_this.state.isOpen });
    };

    _this.state = {
      startDate: (0, _moment2.default)(),
      endDate: (0, _moment2.default)()
    };
    return _this;
  }

  _createClass(Example, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { 'data-type': 'dplCalendar' },
        _react2.default.createElement(_dpl_icon2.default, { name: 'calendar', iconstyle: true, 'data-calendaricon': 'calendaricon', className: (0, _classnames2.default)("calendar-icon", this.state.isOpen ? "open" : "") }),
        _react2.default.createElement('input', {
          className: (0, _classnames2.default)("calender-input", this.state.isOpen ? "open" : ""),
          onFocus: this.toggleCalendar,
          value: this.state.startDate.format("DD-MM-YYYY")
        }),
        this.state.isOpen && _react2.default.createElement(
          'div',
          {
            style: {
              "position": "absolute",
              "left": "100%",
              "top": "0",
              "width": "730px"
            }
          },
          _react2.default.createElement(_reactDatepicker2.default, {
            selected: this.state.startDate,
            selectsStart: true,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            onChange: this.handleChangeStart,
            monthsShown: 3,
            inline: true
          }),
          _react2.default.createElement(_reactDatepicker2.default, {
            selected: this.state.endDate,
            selectsEnd: true,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            onChange: this.handleChangeEnd,
            monthsShown: 3,
            inline: true
          })
        )
      );
    }
  }]);

  return Example;
}(_react2.default.Component);

var factory = function factory() {
  var DplCalendar = function (_React$Component2) {
    _inherits(DplCalendar, _React$Component2);

    function DplCalendar(props) {
      _classCallCheck(this, DplCalendar);

      var _this2 = _possibleConstructorReturn(this, (DplCalendar.__proto__ || Object.getPrototypeOf(DplCalendar)).call(this, props));

      _this2.handleChangeStart = function (date) {
        _this2.setState({ startDate: date });
        _this2.toggleCalendar();
      };

      _this2.handleChangeEnd = function (date) {
        _this2.setState({ endDate: date });
        _this2.toggleCalendar();
      };

      _this2.toggleCalendar = function (e) {
        e && e.preventDefault();
        _this2.setState({ isOpen: !_this2.state.isOpen });
      };

      _this2.state = {
        showTime: true,
        showDateInput: true,
        disabled: false,
        value: _this2.props.defaultValue,
        startDate: _this2.props.startDate,
        endDate: _this2.props.endDate
      };
      return _this2;
    }

    _createClass(DplCalendar, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            theme = _props.theme,
            source = _props.source,
            disabled = _props.disabled,
            title = _props.title,
            children = _props.children,
            data = _props.data,
            others = _objectWithoutProperties(_props, ['theme', 'source', 'disabled', 'title', 'children', 'data']);

        var state = this.state;
        //console.log(props)
        return _react2.default.createElement(
          'div',
          { 'data-type': 'dplCalendar' },
          this.props.calendarDate == "start" ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_dpl_icon2.default, { name: 'calendar', iconstyle: true, 'data-calendaricon': 'calendaricon', className: (0, _classnames2.default)(theme.calendarIcon, this.state.isOpen ? theme.open : "") }),
            _react2.default.createElement('input', {
              className: (0, _classnames2.default)(theme.calenderInput, this.state.isOpen ? theme.open : ""),
              onFocus: this.toggleCalendar,
              value: this.state.startDate.format("DD MMM YYYY"),
              id: 'dateStatusStart'
            }),
            this.state.isOpen && _react2.default.createElement(
              'div',
              {
                style: {
                  "position": "absolute",
                  "left": "100%",
                  "top": "0",
                  "width": "730px",
                  "border": "none"
                },
                className: theme.calendarBlock
              },
              _react2.default.createElement(_reactDatepicker2.default, {
                selected: this.state.startDate,
                selectsStart: true,
                startDate: this.state.startDate,
                endDate: this.state.endDate,
                onChange: this.handleChangeStart,
                monthsShown: 3,
                inline: true,
                calendarClassName: 'dplCalendar'
              })
            )
          ) : _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_dpl_icon2.default, { name: 'calendar', iconstyle: true, 'data-calendaricon': 'calendaricon', className: (0, _classnames2.default)(theme.calendarIcon, this.state.isOpen ? theme.open : "") }),
            _react2.default.createElement('input', {
              className: (0, _classnames2.default)(theme.calenderInput, this.state.isOpen ? theme.open : ""),
              onFocus: this.toggleCalendar,
              value: this.state.endDate.format("DD MMM YYYY"),
              id: 'dateStatusEnd'
            }),
            this.state.isOpen && _react2.default.createElement(
              'div',
              {
                style: {
                  "position": "absolute",
                  "left": "100%",
                  "top": "0",
                  "width": "730px",
                  "border": "none"
                },
                className: theme.calendarBlock
              },
              _react2.default.createElement(_reactDatepicker2.default, {
                selected: this.state.endDate,
                selectsStart: true,
                startDate: this.state.startDate,
                endDate: this.state.endDate,
                onChange: this.handleChangeEnd,
                monthsShown: 3,
                inline: true,
                calendarClassName: 'dplCalendar'
              })
            )
          )
        );
      }
    }]);

    return DplCalendar;
  }(_react2.default.Component);

  ;

  DplCalendar.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.shape({})
  };

  DplCalendar.defaultProps = {
    className: ''
  };

  return DplCalendar;
};

var DplCalendar = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLCALENDAR)(DplCalendar);
exports.dplCalendarFactory = factory;
exports.DplCalendar = DplCalendar;