import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { DPLPOPOVER } from '../identifiers';
import {IconMenu, MenuItem, MenuDivider } from '../menu';

const factory = () => {
  class DplPopover extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      const {
        theme,
        name,
        disabled,
        iconstyle,
        title,
        children,
        ...others
      } = this.props;

      return <li data-react-toolbox="dpl_popover">{children}</li>;
    }
  };

  DplPopover.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({
    }),
  };

  DplPopover.defaultProps = {
    className: '',
  };

  return DplPopover;
};

const DplPopover = factory();
export default themr(DPLPOPOVER)(DplPopover);
export { factory as dplPopoverFactory };
export { DplPopover };
