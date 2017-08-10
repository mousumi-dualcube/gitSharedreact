import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { DPLSUMMATIVE } from '../identifiers';

const factory = () => {
  class DplSummative extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
      const {
        className,
        theme,
        data,
        ...others
      } = this.props;

  	  return (     
		<div className = {theme.summativeChartContainer}>          
	        <table>
	          <tbody>
            {
              data.map(function(value,index) { 
                return (
    	            <tr key={index}>
    	              <td><span className={theme.rowTitle} >{value.title}</span><span className={theme.rowDate} >{value.subtitle}</span></td>
    	              <td><span className={theme.currency}>{value.value}</span></td>
    	            </tr>
                )
              })
            }
	          </tbody>
	        </table>
	    </div>
	  )
    }
  };

  DplSummative.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({
    }),
  };

  DplSummative.defaultProps = {
    className: '',
  };

  return DplSummative;
};

const DplSummative = factory();
export default themr(DPLSUMMATIVE)(DplSummative);
export { factory as dplSummativeFactory };
export { DplSummative };