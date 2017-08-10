import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { DPLMENUCONTAINER } from '../identifiers';
import {IconMenu, MenuItem, MenuDivider } from '../menu';
import DplIcon from '../dpl_icon';

const factory = () => {
  class DplMenuContainer extends React.Component {
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
        icon,
        children,
        ...others
      } = this.props;

      return (
        <IconMenu 
          {...others}
          icon={<span>{(icon) ? <DplIcon name={icon} iconstyle={true} /> : title}</span>} 
          position='topLeft' 
          className={classnames(theme.menuList, (icon) ? theme.menuListIcon : '' )} 
        >
          {children}
        </IconMenu>
      );
    }
  };

  DplMenuContainer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({
    }),
  };

  DplMenuContainer.defaultProps = {
    className: '',
  };

  return DplMenuContainer;
};

const DplMenuContainer = factory();
export default themr(DPLMENUCONTAINER)(DplMenuContainer);
export { factory as dplMenuContainerFactory };
export { DplMenuContainer };
