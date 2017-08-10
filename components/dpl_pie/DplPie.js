import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { DPLPIE } from '../identifiers';
import PieChart from 'react-d3-basic/lib/pie';
import DplLink from '../dpl_link';

const factory = () => {
  class DplPie extends React.Component {

    constructor(props) {

      super(props);

      this.state = {
        width : 180,
        height : 180,
        chartSeries : [
          {
            "field": "Completed",
            "name": "684 Completed",
            "color": "rgba(141,226,106,1)",
            "url" : "https://www.google.com"
          },
          {
            "field": "Continuing",
            "name": "3764 Continuing",
            "color": "rgba(255,163,0,1)",
            "url" : "https://www.google.com"
          },
          {
            "field": "Temp withdrawn",
            "name": "684 Temp withdrawn",
            "color": "rgba(0,181,226,1)",
            "url" : "https://www.google.com"
          },
          {
            "field": "withdrawn",
            "name": "684 withdrawn",
            "color": "rgba(233,79,59,1)",
            "url" : "https://www.google.com"
          }
        ]
      }
    }

    value = (d) => {
      return +d.result;
    };

    name = (d) => {
      return d.status;
    };

    render() {
      const {
        className,
        data,
        theme,
        chartSeries,
        chartLink,
        ...others
      } = this.props;

      let pieChartLegend = classnames(theme.legendDashlet, 'legend');
      
      let totalValue = 0;
      let createLegend = chartSeries.map(function (chartItem, index) {
        totalValue += data[index].result;
        return ( 
          <DplLink className={pieChartLegend} key={'index' + index} href={chartItem.url}>
            <div style={{"backgroundColor" :  chartItem.color }}></div>
            <div className={theme.legendText} ><strong>{data[index].result}</strong>&nbsp;&nbsp;&nbsp;{data[index].status}</div>
          </DplLink> 
        );
      });

      if(data[0] != "undefined" && data[0] != null) {
        return (
          <div className = {theme.pieChartContainer}>
            <DplLink className={theme.pieChartTotal} href={chartLink}>
              <PieChart
                data= {data}
                width= {this.state.width}
                height= {this.state.height}
                chartSeries= {chartSeries}
                value = {this.value}
                name = {this.name}
                innerRadius = {70}
                outerRadius = {50}
                showLegend={false}
                svgClassName={theme.pieChart}
                legendClassName={theme.legendDashlet}
              />
              <div className={theme.pieChartTotalLink}>              
                <div className={theme.pieChartTotalDiv}>
                  <span className={theme.pieChartTotalText}>Total</span>
                  <span className={theme.pieChartTotalValue}>{totalValue}</span>
                </div>
              </div>              
            </DplLink>
            <div className={pieChartLegend}>
              {createLegend}
            </div>
          </div>
        );
      } else {
        return (<div className = {theme.pieChartContainer} style={{"color":"red"}}>Please choose correct Year</div>);
      }
    }
  };

  DplPie.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({
    }),
  };

  DplPie.defaultProps = {
    className: '',
  };

  return DplPie;
};

const DplPie = factory();
export default themr(DPLPIE)(DplPie);
export { factory as dplPieFactory };
export { DplPie };
