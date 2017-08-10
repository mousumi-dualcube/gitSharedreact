import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { DPLNAVDRAWER } from '../identifiers';
import { DplAccordion } from '../dpl_accordion';
import {DplIcon} from '../dpl_icon';

const factory = () => {
  class DplNavDrawer extends React.Component {
    constructor(props) {
      super(props);
    }
    setActiveParent = (child) => {
      let obj = child.map((item, idx) => (
        (this.props.active === item.href) ?  true : false
      ));      
      return obj.includes(true);
    }
    render() {
      const {
        theme,
        data,
        logo,
        active,
        ...others
      } = this.props;
      return (
        <div className={theme.sidebarContainer}>
          <ul className={theme.sidebarNav}>
            <li className={theme.sidebarBrand}>
              <DplIcon name="times" iconstyle={true} className={theme.navClose}/>
              {(!logo) ? 
                "" :
                  <a href="#">
                    <img src={logo} alt ="logo" className={theme.logo} />
                  </a>
              }
            </li>
            <li>
              <DplAccordion>             
                {data.map((item, index) => (
                  (item.child) 
                    ? 
                  <ul key={index} data-active={this.setActiveParent(item.child)} data-trigger={item.name} data-openIcon='plus' data-closeIcon='minus'>
                    {item.child.map((item, idx) => (
                      <li key={idx}><a data-active={(active === item.href) ? true : false }  href="#" style={{"width":"100%", "display":"block"}}>{item.name}</a></li>
                    ))}
                  </ul>    
                    :
                  <ul key={index}  data-active={(active === item.href) ? true : false } data-trigger={item.name}></ul>
                ))}
              </DplAccordion>
            </li>
          </ul>
        </div>
      );
    }
  };

  DplNavDrawer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({
    }),
  };

  DplNavDrawer.defaultProps = {
    className: '',
  };

  return DplNavDrawer;
};

const DplNavDrawer = factory();
export default themr(DPLNAVDRAWER)(DplNavDrawer);
export { factory as dplNavDrawerFactory };
export { DplNavDrawer };
