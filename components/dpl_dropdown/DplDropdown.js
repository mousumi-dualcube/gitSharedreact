import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { DPLDROPDOWN } from '../identifiers';
import FontAwesome from "react-fontawesome";
import Dropdown from '../dropdown';

const factory = () => {
  class DplDropdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
    }

    handleChange = (value) => {
      this.setState({value: value});
    };

    render() {
      const {
        theme,
        name,
        disabled,
        iconstyle,
        data,
        className,
        label,
        onChange,
        ...others
      } = this.props;
      let classname = classnames(theme.dplDropdown, className, (this.props.disabled) ? theme.dplDropdownDisabled : "" )
      let letLabel = label ? label : 'Title Placeholder';
      return (
        <Dropdown
          {...others}
          disabled={(this.props.disabled) ? true : false }
          auto = {false}          
          label= {letLabel}
          className = {classnames(theme.dplDropdown, (this.props.disabled) ? theme.dplDropdownDisabled : "", className )}
          onChange={this.props.onChange || this.handleChange}
          source={data}
          value={this.state.value}
        />
      );
    }
  };

  DplDropdown.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({
    }),
  };

  DplDropdown.defaultProps = {
    className: '',
  };

  return DplDropdown;
};

const DplDropdown = factory();
export default themr(DPLDROPDOWN)(DplDropdown);
export { factory as dplDropdownFactory };
export { DplDropdown };
