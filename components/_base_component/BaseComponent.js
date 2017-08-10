import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { BASECOMPONENT } from '../identifiers';

const factory = () => {
  const BaseComponent = ({ className, theme, children, ...other }) => {
    const classes = classnames(theme.baseComponent, {
    }, className);

    return (
      <div data-react-toolbox="base-component" className={classes} {...other}>
        <span>Base Component {children}</span>
      </div>
    );
  };

  BaseComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({
    }),
  };

  BaseComponent.defaultProps = {
    className: '',
  };

  return BaseComponent;
};

const BaseComponent = factory();
export default themr(BASECOMPONENT)(BaseComponent);
export { factory as baseComponentFactory };
export { BaseComponent };
