import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { DPLBUTTON } from '../identifiers';
import DplIcon from '../dpl_icon';
import { Button, IconButton, BrowseButton } from '../button';

const factory = () => {
  class DplButton extends Component {

    render() {
      const {
        theme,
        disabled,
        iconstyle,
        icon,
        label,
        iconbutton,
        mini,
        secondary,
        download,
        target,
        href,
        action,
        className,
        ...others
      } = this.props;

      const renderLink = classnames(theme.flat, theme.neutral, theme.iconbutton, className);
      const btn = classnames(theme.flat, theme.neutral, className);
      
      if(this.props.download) {
        return (
          <form method="get" action={action} className={theme.downloadButton}>
            <Button  
              {...others}
              className={label ? btn : renderLink}
              disabled = {disabled ? true : false}
              mini={mini ? true : false}
              data-mini={mini ? "mini" : ""}
              data-alt={secondary ? "secondary" : ""}
              type="submit"
              href={href ? href : ""}
              target={target ? target : ""}
              ripple={false}
            >
              {icon ? <DplIcon iconstyle={false} name={icon} />:""}
              <span className={theme.downloadButtonLabel}>{label}</span>
            </Button>
          </form>
        )
      } else {
        return (
          <Button 
            {...others}
            className={label ? btn : renderLink} 
            disabled = {disabled ? true : false}
            mini={mini ? true : false}
            data-alt={secondary ? "secondary" : ""}
            data-mini={mini ? "mini" : ""}
            href={href ? href : ""}
            target={target ? target : ""}
            ripple={false}
          >
            {icon ? <DplIcon iconstyle={false} name={icon} />:""}
            {label}
          </Button>
        );
      }
    }
  };

  DplButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({

    }),
  };

  DplButton.defaultProps = {
    className: '',
  };

  return DplButton;
};

const DplButton = factory();
export default themr(DPLBUTTON)(DplButton);
export { factory as dplButtonFactory };
export { DplButton };
