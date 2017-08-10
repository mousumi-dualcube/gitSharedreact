import React, { PropTypes } from 'react';
import { themr } from 'react-css-themr';
import { DPLSTATUS } from '../identifiers';
import DplLink from '../dpl_link';

const factory = () => {
  class DplStatus extends React.Component {

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
			<div className = {theme.statusChartContainer}>  
			{ data.map(function(value,index) { 
		        return (
			        <div key={index} className = {theme.statusChartDiv}>
			          <DplLink className={theme.statusChartLink} href={value.url}>
			            <span className={theme.statusChartTitle}>{value.count}</span>
			            <p className={theme.statusChartDesc}>{value.desc}</p>
			          </DplLink>
			        </div>
			    )
		      })
		    }
      		</div>
		)
    }
  };

  DplStatus.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({
    }),
  };

  DplStatus.defaultProps = {
    className: '',
  };

  return DplStatus;
};

const DplStatus = factory();
export default themr(DPLSTATUS)(DplStatus);
export { factory as dplStatusFactory };
export { DplStatus };