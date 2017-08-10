import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { DPLBAR } from '../identifiers';
import BarChart from 'react-d3-basic/lib/bar';

const factory = () => {
  class DplBar extends React.Component {

    constructor(props) {

      super(props);

      this.state = {
		width: 320,
		height: 120,
		title: "Bar Chart",
		chartSeries: [
		  {
			field: 'data',
			name: 'Data',
			color: "#00B5E2",
			style: {
			  'fillOpacity': 1
			}
		  }
		],
		xScale: 'ordinal',
		xLabel: "Month",
		yLabel: "Data",
		yTicks: [0, "%"],
		margins: {top: 12, right: 0, bottom: 30, left: 0}
		
	  }
    }

    render() {
      const {
        className,
        data,
        theme,
        chartSeries,
        yOptional,
        ...others
      } = this.props;

      	if(this.props.data[0] != "undefined" && this.props.data[0] != null) {
	      	if(yOptional == true) {
			  	return (     
					<div className = {theme.barChartContainer}>     
					  <BarChart
						title= {this.state.title}
						data= {this.props.data}
						width= {this.state.width}
						height= {this.state.height}
						chartSeries = {this.props.chartSeries}
						x= {this.props.xAxix}
						margins= {this.state.margins}
						xScale= 'ordinal'
						showXGrid= {false}
						showYAxis= {false}
						barPadding={0}
						showLegend={false}
						svgClassName={theme.barChart}
						legendClassName={theme.legendBarDashlet}
					  />
					  <div className={theme.barChartEnrolment}>
						  {(this.props.legendDesc) ? this.props.legendDesc : ''}
					  </div>
					</div>
			  	);
			} else {
				return (     
					<div className = {theme.barChartContainer}>     
					  <BarChart
						title= {this.state.title}
						data= {this.props.data}
						width= {this.state.width}
						height= {this.state.height}
						chartSeries = {this.props.chartSeries}
						x= {this.props.xAxix}
						y= { this.props.yAxix}
						margins= {this.state.margins}
						xScale= 'ordinal'
						showXGrid= {false}
						showYAxis= {false}
						barPadding={0}
						showLegend={false}
						svgClassName={theme.barChart}
						legendClassName={theme.legendBarDashlet}
					  />
					  <div className={theme.barChartEnrolment}>
						  {(this.props.legendDesc) ? this.props.legendDesc : ''}
					  </div>
					</div>
			  	);
			}
		}  else {
		  return (<div className = {theme.barChartContainer} style={{"color":"red"}}>Please choose correct Year</div>);
		}
    }
  };

  DplBar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({
    }),
  };

  DplBar.defaultProps = {
    className: '',
  };

  return DplBar;
};

const DplBar = factory();
export default themr(DPLBAR)(DplBar);
export { factory as dplBarFactory };
export { DplBar };