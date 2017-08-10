import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import DplIcon from '../dpl_icon';
import { DPLCALENDAR } from '../identifiers';

import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import '!style-loader!css-loader!react-datepicker/dist/react-datepicker.css';

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment()
    };
  }
 
  handleChangeStart = (date) => {
    this.setState({startDate: date})
    this.toggleCalendar()
  }

  handleChangeEnd = (date) => {
    this.setState({startDate: date})
    this.toggleCalendar()
  }

  toggleCalendar = (e) => {
    e && e.preventDefault()
    this.setState({isOpen: !this.state.isOpen})
  }
 
  render() {
    return (<div data-type="dplCalendar">
      <DplIcon name="calendar" iconstyle={true} data-calendaricon="calendaricon" className={classnames("calendar-icon" , (this.state.isOpen) ? "open" : "")} />
      <input
          className={classnames("calender-input" , (this.state.isOpen) ? "open" : "")}
          onFocus={this.toggleCalendar}
          value={this.state.startDate.format("DD-MM-YYYY")}
      />
      {
          this.state.isOpen && (
              <div
                  style={{
                    "position": "absolute",
                    "left": "100%",
                    "top": "0",
                    "width": "730px"
                  }}
              >
              <DatePicker
                  selected={this.state.startDate}
                  selectsStart
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onChange={this.handleChangeStart}
                  monthsShown={3}
                  inline
              />

              <DatePicker
                  selected={this.state.endDate}
                  selectsEnd
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onChange={this.handleChangeEnd}
                  monthsShown={3}
                  inline
              />


              
            </div>
          )
      }
    </div>);
  }
}

const factory = () => {
  class DplCalendar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showTime: true,
        showDateInput: true,
        disabled: false,
        value: this.props.defaultValue,
        startDate: this.props.startDate,
        endDate: this.props.endDate
      }
    }
       
    handleChangeStart = (date) => {
      this.setState({startDate: date})
      this.toggleCalendar()
    }

    handleChangeEnd = (date) => {
      this.setState({endDate: date})
      this.toggleCalendar()
    }

    toggleCalendar = (e) => {
      e && e.preventDefault()
      this.setState({isOpen: !this.state.isOpen})
    }
    render() {
      const {
        theme,
        source,
        disabled,
        title,
        children,
        data,
        ...others
      } = this.props;
      const state = this.state;
      //console.log(props)
      return (
      <div data-type="dplCalendar">
      {(this.props.calendarDate=="start") 
        ?
        (<div>
          <DplIcon name="calendar" iconstyle={true} data-calendaricon="calendaricon" className={classnames(theme.calendarIcon , (this.state.isOpen) ? theme.open : "")} />
          <input
              className={classnames(theme.calenderInput , (this.state.isOpen) ? theme.open : "")}
              onFocus={this.toggleCalendar}
              value={this.state.startDate.format("DD MMM YYYY")}
              id="dateStatusStart"
          />
          {
              this.state.isOpen && (
                  <div
                      style={{
                        "position": "absolute",
                        "left": "100%",
                        "top": "0",
                        "width": "730px",
                        "border": "none"
                      }}
                       className={theme.calendarBlock}
                  >
                    <DatePicker
                        selected={this.state.startDate}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeStart}
                        monthsShown={3}
                        inline
                        calendarClassName="dplCalendar"
                    />
                  </div>
              )
          }
        </div>)
        : 
        (<div>
          <DplIcon name="calendar" iconstyle={true} data-calendaricon="calendaricon" className={classnames(theme.calendarIcon , (this.state.isOpen) ? theme.open : "")} />
          <input
              className={classnames(theme.calenderInput , (this.state.isOpen) ? theme.open : "")}
              onFocus={this.toggleCalendar}
              value={this.state.endDate.format("DD MMM YYYY")}
              id="dateStatusEnd"
          />
          {
              this.state.isOpen && (
                  <div
                      style={{
                        "position": "absolute",
                        "left": "100%",
                        "top": "0",
                        "width": "730px",
                        "border": "none"
                      }}
                       className={theme.calendarBlock}
                  >
                    <DatePicker
                        selected={this.state.endDate}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeEnd}
                        monthsShown={3}
                        inline
                        calendarClassName="dplCalendar"
                    />
                  </div>
              )
          }
        </div>)
      }
        
      </div>
      );
    }
  };

  DplCalendar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({
    }),
  };

  DplCalendar.defaultProps = {
    className: '',
  };

  return DplCalendar;
};

const DplCalendar = factory();
export default themr(DPLCALENDAR)(DplCalendar);
export { factory as dplCalendarFactory };
export { DplCalendar };