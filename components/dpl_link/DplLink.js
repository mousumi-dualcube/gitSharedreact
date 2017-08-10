import React, { PropTypes } from 'react';

import classnames from 'classnames';

import { themr } from 'react-css-themr';

import { DPLLINK } from '../identifiers';

import DplIcon from "../dpl_icon";

import {Link} from 'react-router';


const DplLink = ({active, children, className, count, href, icon, label, semibold, theme, ...others}) => {
  const _className = classnames(theme.dplLink, semibold ? theme.semiBold : '', {
    [theme.active]: active
  }, className);

  return (
    <Link data-react-toolbox='link' to={href} className={_className} {...others}>
      {icon ?  <DplIcon name= {icon} iconstyle={true} /> : null}
      {label ? <abbr>{label}</abbr> : null}
      {count && parseInt(count) !== 0 ? <small>{count}</small> : null}
      {children}
    </Link>
  );
};

DplLink.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  count: PropTypes.number,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  label: PropTypes.string,
  theme: PropTypes.shape({
    active: PropTypes.string,
    icon: PropTypes.string,
    link: PropTypes.string
  })
};

DplLink.defaultProps = {
  active: false,
  className: ''
};

export default themr(DPLLINK)(DplLink);
export { DplLink };