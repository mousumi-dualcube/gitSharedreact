import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { DPLFILTER } from '../identifiers';
import {IconMenu, MenuItem, MenuDivider } from '../menu';
import {Typeahead} from 'react-bootstrap-typeahead';
import DplButton from '../dpl_button';
import DplIcon from '../dpl_icon';
import DplDropdown from '../dpl_dropdown'
import DplNavDrawer from '../dpl_navDrawer';
import { DplCollapsible } from '../dpl_accordion';
import Checkbox from '../checkbox';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

import DplCalendar from '../dpl_calendar';

const format = 'YYYY-MM-DD HH:mm:ss';
const cn = location.search.indexOf('cn') !== -1;

const now = moment();
if (cn) {
  now.locale('zh-cn').utcOffset(8);
} else {
  now.locale('en-gb').utcOffset(0);
}
const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

const drop_down_data = [
  { label: 'Funding year: 2016', value: '2016'},
  { label: 'Funding year: 2018', value: '2018' },
  { label: 'Funding year: 2019', value: '2019'}
];
const date_range = [
  { label: 'Select option', value: 'Select option'},
  { label: 'Date range', value: 'Date range'},
  { label: 'After', value: 'After' },
  { label: 'Before', value: 'Before'}
]
const dataTypeahead = [ '3212311', '3212454', '3212666', '3212661' ];

let SubCategory = React.createClass({
  getInitialState: function() {
    return {
      checkBox: false
    }
  },
  handleFilterChange: function(a, b) {
    //event.preventDefault()
    var container, added;
    var idX = this.refs[a].getAttribute("id");
    
    container = document.getElementById(idX);

    added = container.getAttribute('data-add');
    
    if(added=="remove") {
      container.setAttribute("data-add","add")
      this.props.changeFilterList(this.refs[a].getAttribute("value"), this.refs[a].getAttribute("id")) 
    } else {
      container.setAttribute("data-add","remove")
      this.props.deleteFilterList(container)
    }
  },
  render: function () {
    let that = this
    let currentList = this.props.stateFilterList
    let list = this.props.data.map(function(el, i) {
      let statePresent = false;
      if(Array.isArray(el.child)) {
        return (<li key={el.value+i} data-hasCollapsible="true">
          <DplCollapsible trigger={el.value} dir="left" openIcon="chevron-circle-right" closeIcon="chevron-circle-down" dir="left">
            <div>
              <SubCategory data={ el.child } titleVisibility={true} deleteFilterList={that.props.deleteFilterList} changeFilterList={that.props.changeFilterList} stateFilterList={currentList} />
            </div>
          </DplCollapsible>
        </li>);
      } else if(!statePresent) {
        return (
          (!el.typeahead)
          ? <li data-add="remove" key={el.value+i} data-list="lastChild" ref={"filterInput"+el.id} onClick={that.handleFilterChange.bind(null, "filterInput"+el.id)} value={ el.value } id={el.id}>
              { el.value }
            </li>
          : (<Typeahead 
              className={theme.dataTypeahead} 
              options={el.child} 
              labelKey="value" 
              style={{"width": "92%"}} 
              renderMenu={(dataList, menuProps) => {
                return (
                  <ul>
                    {
                      dataList.map((item, index) => {
                        return (
                          <li data-add="remove" style={{"padding": "0 19px", "lineHeight": "27px"}} key={item.value+index} data-list="lastChild" ref={"filterInput"+item.id} onClick={that.handleFilterChange.bind(null, "filterInput"+item.id)} value={ item.value } id={item.id}>
                            {item}
                          </li>
                        )
                      })
                    }
                  </ul>

                );
              }}
            />)
        )
      }
    });
    return <ul>{ list }</ul>;
  }
});
const factory = () => {
  class DplFilter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterList: [{'value' : 'DESTINATION & PROGRESION', 'id' :  'id_11'},
                    {'value' : 'ENROLMENT', 'id' :  'id_12'}],
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

        startDate: moment(),
        endDate: moment(),
        startDateRange: false,
        endDateRange: false,
        dplDateFilter: "PROGRAMME DATA"
      }
      this.showFilterList = this.showFilterList.bind(this);

    }
    
    changeFilterList = (valueX, idX) => {
      //event.preventDefault();
      let currentList = this.state.filterList.slice() 
      let statePresent = true;
      for(let i=0; i<currentList.length; i++) {
        if(currentList[i].id == idX) {
          statePresent = false
          return
        }
      }
      if(statePresent) currentList.push({"id": idX, "value": valueX});
      this.setState({filterList: currentList});
    }

    showFilterList = () => {
      let that = this;
      this.setState({ showFilterList: !this.state.showFilterList });
    }

    deleteFilterList = (idX) => {
      let currentList = this.state.filterList.slice()
      let val = idX
      
      let index = currentList.findIndex(function(item, i){
        return item.id == val
      });
      currentList.splice(index, 1);
      this.setState({filterList: currentList});
    }
    
    componentDidUpdate = () => {
      this._typeahead.getInstance().focus();
    }
    
    dateApply = (value,idX) => {
      this.changeFilterList(value+" : " +document.getElementById("dateStatusStart").value + " - " +document.getElementById("dateStatusEnd").value, idX);
    }

    handleChange = (value) => {
      
      this.setState({currentDateFormate: value});
      ((value=="Date range") 
        ? 
          this.setState({startDateRange: true, endDateRange: true})
        : 
          ((value=="After") 
            ? 
              this.setState({startDateRange: true, endDateRange: false})
            : 
              ((value=="Before") 
                ? 
                  this.setState({startDateRange: false, endDateRange: true})
                : 
                  this.setState({startDateRange: false, endDateRange: false})
              )
          )
      );
    }
    handleFilterChange = (a, b) => {
      /*event.preventDefault()*/
      let container, added, text;
      
      container = document.getElementById(a);

      added = container.getAttribute('data-add');
      text = b + " : " + container.getAttribute("value")
      if(added=="remove") {
        container.setAttribute("data-add","add")
        this.changeFilterList(text, container.getAttribute("id")) 
      } else {
        container.setAttribute("data-add","remove")
        this.deleteFilterList(container)
      }
    }
    render() {
      const {
        theme,
        source,
        disabled,
        iconstyle,
        title,
        children,
        data,
        ...others
      } = this.props;
      
      return (
        <div id="dplfilter" className={theme.dplfilter} data-openStatus={this.state.showFilterList}>
          <div className={classnames(theme.dplfilterList, (this.state.showFilterList) ? theme.show : theme.hide)}

          >
            <div className={theme.dplfilterListView} style={{"display": "block"}}>
              <ul className={theme.dplfilterListing} id="dplfilterList" style={{ width: 320 }}>
                <li className={theme.autocompleteList} data-autocomplete="true">
                  <DplIcon name="search" iconstyle={true} className={theme.searchIcon} />
                  <Typeahead
                    options={data}
                    labelKey="value"
                    ref={ref => this._typeahead = ref}
                    renderMenu={(data, menuProps) => {
                      return (
                        <ul>
                          {
                            data.map((item, index) => {
                              let currentList = this.state.filterList.slice() 
                              let statePresent = false;
                              
                              return (
                              ((item.typeahead || item.child) && !statePresent && !item.type)
                              ?
                              <li key={index}
                                className={(item.typeahead) ? theme.typeaheadData : theme.childData}
                                data-hasCollapsible="true"
                              >
                                <DplCollapsible trigger={
                                  <span style={{"fontWeight":"400"}}
                                    dangerouslySetInnerHTML={{
                                      __html :item.value.replace(new RegExp(menuProps.text, "gi"), '<strong>$&</strong>')

                                    }}
                                  />
                                } className={theme.dplListCollapsible}>
                                  <div>
                                    {
                                      ( Array.isArray(item.child) && !item.typeahead) ?
                                      <SubCategory menuProps={menuProps} data={ item.child } titleVisibility={true} deleteFilterList={this.deleteFilterList} changeFilterList={this.changeFilterList} stateFilterList={currentList} handleFilterChange={this.handleFilterChange} />
                                      : (<Typeahead 
                                          className={theme.dataTypeahead} 
                                          options={item.child} 
                                          labelKey="value" 
                                          style={{"width": "92%"}} 
                                          renderMenu={(dataList, menuProps) => {
                                            return (
                                              <div>
                                                <span className={theme.resultsCount}>{dataList.length} results</span>
                                                <ul>
                                                  {
                                                    dataList.map((item, index) => {
                                                      return (
                                                        <li data-add="remove" 
                                                          style={{
                                                            "padding": "0 19px", 
                                                            "lineHeight": "27px",
                                                            "fontWeight": "400"
                                                          }} 
                                                          key={item+index} 
                                                          data-list="lastChild" 
                                                          ref={"filterInput"+item.id} 
                                                          onClick={this.handleFilterChange.bind(null, "filterInput"+item.id, "Employer ID")} 
                                                          value={ item.value } 
                                                          id={"filterInput"+item.id}>
                                                            {
                                                              <span 
                                                                dangerouslySetInnerHTML={{
                                                                  __html :item.value.replace(new RegExp(menuProps.text, "gi"), '<strong>$&</strong>')

                                                                }}
                                                              />
                                                            }
                                                            
                                                        </li>
                                                      )
                                                    })
                                                  }
                                                </ul>
                                              </div>
                                            );
                                          }}
                                        />)
                                    }
                                  </div>
                                </DplCollapsible>
                              </li>
                              :
                              ((item.type=="date") 
                                ? 
                                <li key={index} className={theme.dateRange} data-date="dateRange" id="calendarID" data-hasCollapsible="true">
                                  <DplCollapsible trigger={
                                    <span style={{"fontWeight":"400"}}
                                      dangerouslySetInnerHTML={{
                                        __html :item.value.replace(new RegExp(menuProps.text, "gi"), '<strong>$&</strong>')

                                      }}
                                    />
                                  } className={theme.dplListCollapsible}>
                                    <div id="dateSec">
                                      <DplDropdown data={date_range} label={item.value} className={theme.dateRangeDropDwon} onChange={this.handleChange} />
                                      <div className={theme.dplcalendar}>
                                        <div>
                                          {(this.state.startDateRange) ? 
                                            <div data-calendarInput="calendarInput">
                                              <label>From</label>
                                              <DplCalendar calendarDate="start" startDate={this.state.startDate} endDate={this.state.endDate}/>
                                            </div>
                                           : "" }
                                        </div>
                                        <div>
                                          {(this.state.endDateRange) ? 
                                            <div data-calendarInput="calendarInput">
                                              <label>To</label>
                                              <DplCalendar calendarDate="end" startDate={this.state.startDate} endDate={this.state.endDate} />
                                            </div>
                                           : "" }
                                        </div>
                                      <div style={{ clear: 'both', "display": "block" }}></div>
                                      </div>
                                      {(this.state.startDateRange || this.state.endDateRange) ?
                                      <div className={theme.applyCalendar}>
                                        <div className={theme.row}>
                                          <DplButton secondary mini label="Cancel" style={{
                                            "margin": "15px",
                                            "marginLeft": "0"
                                          }}/>
                                          <DplButton mini label="Apply" 
                                            onClick={this.dateApply.bind(null,item.value,item.id)}
                                            style={{
                                              "margin": "15px",
                                              "marginLeft": "0"
                                            }}
                                          />
                                        </div>
                                      </div> : ""
                                      }
                                    </div>
                                  </DplCollapsible>
                                </li>
                                : <li key={index} onClick={this.changeFilterList.bind(null, item.value, item.id)}>
                                    <span style={{"fontWeight":"400"}}
                                      dangerouslySetInnerHTML={{
                                        __html :item.value.replace(new RegExp(menuProps.text, "gi"), '<strong>$&</strong>')

                                      }}
                                    />
                                  </li>
                              )
                              
                            );
                            })
                          }
                        </ul>

                      );
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
          <DplButton style={{"margin":"7px","marginLeft":"0", "float": "left"}} icon="plus-circle" mini label="ADD FILTER" onClick={this.showFilterList} className={theme.addFilter} />
          <span style={{"margin":"7px", "marginBottom": 0, "display": "inline-block", "float": "left"}}>
            <DplDropdown data={drop_down_data} label={this.state.currentYr} className={theme.dateDropDwon}/>
          </span>
          {(this.state.showFilterList) ? 
            <div
              style={{"display": "inline"}}
            >
              <DplIcon name="caret-up" iconstyle={true} className={theme.topMenuIcon} />
            </div>
             : ""
          }
          {this.state.filterList.map((item, idx) => {

            return <DplButton key={idx} style={{"margin":"7px", "float": "left"}} id={item.id} onClick={this.deleteFilterList.bind(null, item.id)} icon="times-circle" mini secondary label={item.value} />
          })}
          <DplIcon name="question-circle" iconstyle={true} className={theme.helpIcon} />
        </div>
      );
    }
  };

  DplFilter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({
    }),
  };

  DplFilter.defaultProps = {
    className: '',
  };

  return DplFilter;
};

const DplFilter = factory();
export default themr(DPLFILTER)(DplFilter);
export { factory as dplFilterFactory };
export { DplFilter };
