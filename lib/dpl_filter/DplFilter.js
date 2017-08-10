'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DplFilter = exports.dplFilterFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _menu = require('../menu');

var _reactBootstrapTypeahead = require('react-bootstrap-typeahead');

var _dpl_button = require('../dpl_button');

var _dpl_button2 = _interopRequireDefault(_dpl_button);

var _dpl_icon = require('../dpl_icon');

var _dpl_icon2 = _interopRequireDefault(_dpl_icon);

var _dpl_dropdown = require('../dpl_dropdown');

var _dpl_dropdown2 = _interopRequireDefault(_dpl_dropdown);

var _dpl_navDrawer = require('../dpl_navDrawer');

var _dpl_navDrawer2 = _interopRequireDefault(_dpl_navDrawer);

var _dpl_accordion = require('../dpl_accordion');

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/zh-cn');

require('moment/locale/en-gb');

var _dpl_calendar = require('../dpl_calendar');

var _dpl_calendar2 = _interopRequireDefault(_dpl_calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var format = 'YYYY-MM-DD HH:mm:ss';
var cn = location.search.indexOf('cn') !== -1;

var now = (0, _moment2.default)();
if (cn) {
  now.locale('zh-cn').utcOffset(8);
} else {
  now.locale('en-gb').utcOffset(0);
}
var defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

var drop_down_data = [{ label: 'Funding year: 2016', value: '2016' }, { label: 'Funding year: 2018', value: '2018' }, { label: 'Funding year: 2019', value: '2019' }];
var date_range = [{ label: 'Select option', value: 'Select option' }, { label: 'Date range', value: 'Date range' }, { label: 'After', value: 'After' }, { label: 'Before', value: 'Before' }];
var dataTypeahead = ['3212311', '3212454', '3212666', '3212661'];

var SubCategory = _react2.default.createClass({
  displayName: 'SubCategory',

  getInitialState: function getInitialState() {
    return {
      checkBox: false
    };
  },
  handleFilterChange: function handleFilterChange(a, b) {
    //event.preventDefault()
    var container, added;
    var idX = this.refs[a].getAttribute("id");

    container = document.getElementById(idX);

    added = container.getAttribute('data-add');

    if (added == "remove") {
      container.setAttribute("data-add", "add");
      this.props.changeFilterList(this.refs[a].getAttribute("value"), this.refs[a].getAttribute("id"));
    } else {
      container.setAttribute("data-add", "remove");
      this.props.deleteFilterList(container);
    }
  },
  render: function render() {
    var that = this;
    var currentList = this.props.stateFilterList;
    var list = this.props.data.map(function (el, i) {
      var statePresent = false;
      if (Array.isArray(el.child)) {
        return _react2.default.createElement(
          'li',
          { key: el.value + i, 'data-hasCollapsible': 'true' },
          _react2.default.createElement(
            _dpl_accordion.DplCollapsible,
            _defineProperty({ trigger: el.value, dir: 'left', openIcon: 'chevron-circle-right', closeIcon: 'chevron-circle-down' }, 'dir', 'left'),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(SubCategory, { data: el.child, titleVisibility: true, deleteFilterList: that.props.deleteFilterList, changeFilterList: that.props.changeFilterList, stateFilterList: currentList })
            )
          )
        );
      } else if (!statePresent) {
        return !el.typeahead ? _react2.default.createElement(
          'li',
          { 'data-add': 'remove', key: el.value + i, 'data-list': 'lastChild', ref: "filterInput" + el.id, onClick: that.handleFilterChange.bind(null, "filterInput" + el.id), value: el.value, id: el.id },
          el.value
        ) : _react2.default.createElement(_reactBootstrapTypeahead.Typeahead, {
          className: theme.dataTypeahead,
          options: el.child,
          labelKey: 'value',
          style: { "width": "92%" },
          renderMenu: function renderMenu(dataList, menuProps) {
            return _react2.default.createElement(
              'ul',
              null,
              dataList.map(function (item, index) {
                return _react2.default.createElement(
                  'li',
                  { 'data-add': 'remove', style: { "padding": "0 19px", "lineHeight": "27px" }, key: item.value + index, 'data-list': 'lastChild', ref: "filterInput" + item.id, onClick: that.handleFilterChange.bind(null, "filterInput" + item.id), value: item.value, id: item.id },
                  item
                );
              })
            );
          }
        });
      }
    });
    return _react2.default.createElement(
      'ul',
      null,
      list
    );
  }
});
var factory = function factory() {
  var DplFilter = function (_React$Component) {
    _inherits(DplFilter, _React$Component);

    function DplFilter(props) {
      _classCallCheck(this, DplFilter);

      var _this = _possibleConstructorReturn(this, (DplFilter.__proto__ || Object.getPrototypeOf(DplFilter)).call(this, props));

      _this.changeFilterList = function (valueX, idX) {
        //event.preventDefault();
        var currentList = _this.state.filterList.slice();
        var statePresent = true;
        for (var i = 0; i < currentList.length; i++) {
          if (currentList[i].id == idX) {
            statePresent = false;
            return;
          }
        }
        if (statePresent) currentList.push({ "id": idX, "value": valueX });
        _this.setState({ filterList: currentList });
      };

      _this.showFilterList = function () {
        var that = _this;
        _this.setState({ showFilterList: !_this.state.showFilterList });
      };

      _this.deleteFilterList = function (idX) {
        var currentList = _this.state.filterList.slice();
        var val = idX;

        var index = currentList.findIndex(function (item, i) {
          return item.id == val;
        });
        currentList.splice(index, 1);
        _this.setState({ filterList: currentList });
      };

      _this.componentDidUpdate = function () {
        _this._typeahead.getInstance().focus();
      };

      _this.dateApply = function (value, idX) {
        _this.changeFilterList(value + " : " + document.getElementById("dateStatusStart").value + " - " + document.getElementById("dateStatusEnd").value, idX);
      };

      _this.handleChange = function (value) {

        _this.setState({ currentDateFormate: value });
        value == "Date range" ? _this.setState({ startDateRange: true, endDateRange: true }) : value == "After" ? _this.setState({ startDateRange: true, endDateRange: false }) : value == "Before" ? _this.setState({ startDateRange: false, endDateRange: true }) : _this.setState({ startDateRange: false, endDateRange: false });
      };

      _this.handleFilterChange = function (a, b) {
        /*event.preventDefault()*/
        var container = void 0,
            added = void 0,
            text = void 0;

        container = document.getElementById(a);

        added = container.getAttribute('data-add');
        text = b + " : " + container.getAttribute("value");
        if (added == "remove") {
          container.setAttribute("data-add", "add");
          _this.changeFilterList(text, container.getAttribute("id"));
        } else {
          container.setAttribute("data-add", "remove");
          _this.deleteFilterList(container);
        }
      };

      _this.state = {
        filterList: [{ 'value': 'DESTINATION & PROGRESION', 'id': 'id_11' }, { 'value': 'ENROLMENT', 'id': 'id_12' }],
        createData: [],
        value: '',
        showFilterList: false,
        currentYr: "Funding year: 2017",
        currentDateFormate: "Select option",
        focusTypeahead: "none",
        styles: {
          top: 0,
          left: 0
        },
        typeaheadArray: [],

        startDate: (0, _moment2.default)(),
        endDate: (0, _moment2.default)(),
        startDateRange: false,
        endDateRange: false,
        dplDateFilter: "PROGRAMME DATA"
      };
      _this.showFilterList = _this.showFilterList.bind(_this);

      return _this;
    }

    _createClass(DplFilter, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            theme = _props.theme,
            source = _props.source,
            disabled = _props.disabled,
            iconstyle = _props.iconstyle,
            title = _props.title,
            children = _props.children,
            data = _props.data,
            others = _objectWithoutProperties(_props, ['theme', 'source', 'disabled', 'iconstyle', 'title', 'children', 'data']);

        return _react2.default.createElement(
          'div',
          { id: 'dplfilter', className: theme.dplfilter, 'data-openStatus': this.state.showFilterList },
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(theme.dplfilterList, this.state.showFilterList ? theme.show : theme.hide)

            },
            _react2.default.createElement(
              'div',
              { className: theme.dplfilterListView, style: { "display": "block" } },
              _react2.default.createElement(
                'ul',
                { className: theme.dplfilterListing, id: 'dplfilterList', style: { width: 320 } },
                _react2.default.createElement(
                  'li',
                  { className: theme.autocompleteList, 'data-autocomplete': 'true' },
                  _react2.default.createElement(_dpl_icon2.default, { name: 'search', iconstyle: true, className: theme.searchIcon }),
                  _react2.default.createElement(_reactBootstrapTypeahead.Typeahead, {
                    options: data,
                    labelKey: 'value',
                    ref: function ref(_ref) {
                      return _this2._typeahead = _ref;
                    },
                    renderMenu: function renderMenu(data, menuProps) {
                      return _react2.default.createElement(
                        'ul',
                        null,
                        data.map(function (item, index) {
                          var currentList = _this2.state.filterList.slice();
                          var statePresent = false;

                          return (item.typeahead || item.child) && !statePresent && !item.type ? _react2.default.createElement(
                            'li',
                            { key: index,
                              className: item.typeahead ? theme.typeaheadData : theme.childData,
                              'data-hasCollapsible': 'true'
                            },
                            _react2.default.createElement(
                              _dpl_accordion.DplCollapsible,
                              { trigger: _react2.default.createElement('span', { style: { "fontWeight": "400" },
                                  dangerouslySetInnerHTML: {
                                    __html: item.value.replace(new RegExp(menuProps.text, "gi"), '<strong>$&</strong>')

                                  }
                                }), className: theme.dplListCollapsible },
                              _react2.default.createElement(
                                'div',
                                null,
                                Array.isArray(item.child) && !item.typeahead ? _react2.default.createElement(SubCategory, { menuProps: menuProps, data: item.child, titleVisibility: true, deleteFilterList: _this2.deleteFilterList, changeFilterList: _this2.changeFilterList, stateFilterList: currentList, handleFilterChange: _this2.handleFilterChange }) : _react2.default.createElement(_reactBootstrapTypeahead.Typeahead, {
                                  className: theme.dataTypeahead,
                                  options: item.child,
                                  labelKey: 'value',
                                  style: { "width": "92%" },
                                  renderMenu: function renderMenu(dataList, menuProps) {
                                    return _react2.default.createElement(
                                      'div',
                                      null,
                                      _react2.default.createElement(
                                        'span',
                                        { className: theme.resultsCount },
                                        dataList.length,
                                        ' results'
                                      ),
                                      _react2.default.createElement(
                                        'ul',
                                        null,
                                        dataList.map(function (item, index) {
                                          return _react2.default.createElement(
                                            'li',
                                            { 'data-add': 'remove',
                                              style: {
                                                "padding": "0 19px",
                                                "lineHeight": "27px",
                                                "fontWeight": "400"
                                              },
                                              key: item + index,
                                              'data-list': 'lastChild',
                                              ref: "filterInput" + item.id,
                                              onClick: _this2.handleFilterChange.bind(null, "filterInput" + item.id, "Employer ID"),
                                              value: item.value,
                                              id: "filterInput" + item.id },
                                            _react2.default.createElement('span', {
                                              dangerouslySetInnerHTML: {
                                                __html: item.value.replace(new RegExp(menuProps.text, "gi"), '<strong>$&</strong>')

                                              }
                                            })
                                          );
                                        })
                                      )
                                    );
                                  }
                                })
                              )
                            )
                          ) : item.type == "date" ? _react2.default.createElement(
                            'li',
                            { key: index, className: theme.dateRange, 'data-date': 'dateRange', id: 'calendarID', 'data-hasCollapsible': 'true' },
                            _react2.default.createElement(
                              _dpl_accordion.DplCollapsible,
                              { trigger: _react2.default.createElement('span', { style: { "fontWeight": "400" },
                                  dangerouslySetInnerHTML: {
                                    __html: item.value.replace(new RegExp(menuProps.text, "gi"), '<strong>$&</strong>')

                                  }
                                }), className: theme.dplListCollapsible },
                              _react2.default.createElement(
                                'div',
                                { id: 'dateSec' },
                                _react2.default.createElement(_dpl_dropdown2.default, { data: date_range, label: item.value, className: theme.dateRangeDropDwon, onChange: _this2.handleChange }),
                                _react2.default.createElement(
                                  'div',
                                  { className: theme.dplcalendar },
                                  _react2.default.createElement(
                                    'div',
                                    null,
                                    _this2.state.startDateRange ? _react2.default.createElement(
                                      'div',
                                      { 'data-calendarInput': 'calendarInput' },
                                      _react2.default.createElement(
                                        'label',
                                        null,
                                        'From'
                                      ),
                                      _react2.default.createElement(_dpl_calendar2.default, { calendarDate: 'start', startDate: _this2.state.startDate, endDate: _this2.state.endDate })
                                    ) : ""
                                  ),
                                  _react2.default.createElement(
                                    'div',
                                    null,
                                    _this2.state.endDateRange ? _react2.default.createElement(
                                      'div',
                                      { 'data-calendarInput': 'calendarInput' },
                                      _react2.default.createElement(
                                        'label',
                                        null,
                                        'To'
                                      ),
                                      _react2.default.createElement(_dpl_calendar2.default, { calendarDate: 'end', startDate: _this2.state.startDate, endDate: _this2.state.endDate })
                                    ) : ""
                                  ),
                                  _react2.default.createElement('div', { style: { clear: 'both', "display": "block" } })
                                ),
                                _this2.state.startDateRange || _this2.state.endDateRange ? _react2.default.createElement(
                                  'div',
                                  { className: theme.applyCalendar },
                                  _react2.default.createElement(
                                    'div',
                                    { className: theme.row },
                                    _react2.default.createElement(_dpl_button2.default, { secondary: true, mini: true, label: 'Cancel', style: {
                                        "margin": "15px",
                                        "marginLeft": "0"
                                      } }),
                                    _react2.default.createElement(_dpl_button2.default, { mini: true, label: 'Apply',
                                      onClick: _this2.dateApply.bind(null, item.value, item.id),
                                      style: {
                                        "margin": "15px",
                                        "marginLeft": "0"
                                      }
                                    })
                                  )
                                ) : ""
                              )
                            )
                          ) : _react2.default.createElement(
                            'li',
                            { key: index, onClick: _this2.changeFilterList.bind(null, item.value, item.id) },
                            _react2.default.createElement('span', { style: { "fontWeight": "400" },
                              dangerouslySetInnerHTML: {
                                __html: item.value.replace(new RegExp(menuProps.text, "gi"), '<strong>$&</strong>')

                              }
                            })
                          );
                        })
                      );
                    }
                  })
                )
              )
            )
          ),
          _react2.default.createElement(_dpl_button2.default, { style: { "margin": "7px", "marginLeft": "0", "float": "left" }, icon: 'plus-circle', mini: true, label: 'ADD FILTER', onClick: this.showFilterList, className: theme.addFilter }),
          _react2.default.createElement(
            'span',
            { style: { "margin": "7px", "marginBottom": 0, "display": "inline-block", "float": "left" } },
            _react2.default.createElement(_dpl_dropdown2.default, { data: drop_down_data, label: this.state.currentYr, className: theme.dateDropDwon })
          ),
          this.state.showFilterList ? _react2.default.createElement(
            'div',
            {
              style: { "display": "inline" }
            },
            _react2.default.createElement(_dpl_icon2.default, { name: 'caret-up', iconstyle: true, className: theme.topMenuIcon })
          ) : "",
          this.state.filterList.map(function (item, idx) {

            return _react2.default.createElement(_dpl_button2.default, { key: idx, style: { "margin": "7px", "float": "left" }, id: item.id, onClick: _this2.deleteFilterList.bind(null, item.id), icon: 'times-circle', mini: true, secondary: true, label: item.value });
          }),
          _react2.default.createElement(_dpl_icon2.default, { name: 'question-circle', iconstyle: true, className: theme.helpIcon })
        );
      }
    }]);

    return DplFilter;
  }(_react2.default.Component);

  ;

  DplFilter.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.shape({})
  };

  DplFilter.defaultProps = {
    className: ''
  };

  return DplFilter;
};

var DplFilter = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DPLFILTER)(DplFilter);
exports.dplFilterFactory = factory;
exports.DplFilter = DplFilter;