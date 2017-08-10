import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { DPLICON } from '../identifiers';
import FontAwesome from "react-fontawesome";

const factory = () => {
  class DplIcon extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const {
        theme,
        name,
        disabled,
        iconstyle,
        className,
        dir,
        ...others
      } = this.props;

      const classname = classnames(theme.renderIconStyle, className);
      return (<FontAwesome 
        {...others} 
        name={name} 
        data-dir={(dir=="left") ? "left" : "right"}
        disabled ={(disabled == true) ? true : false}  
        className ={(iconstyle == true) ? classname : ''} 
      />);
    }
  };

  DplIcon.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({
    }),
  };

  DplIcon.defaultProps = {
    className: '',
  };

  return DplIcon;
};

const DplIcon = factory();
export default themr(DPLICON)(DplIcon);
export { factory as dplIconFactory };
export { DplIcon };
