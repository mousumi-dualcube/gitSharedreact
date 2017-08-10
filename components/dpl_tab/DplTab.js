import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { DPLTAB } from '../identifiers';
import {Tab, Tabs} from '../tabs';
import { Scrollbars } from 'react-custom-scrollbars';

const factory = () => {
  class DplTab extends React.Component {
    constructor(props) {
      super(props);
    }
    state = {
      index: 0,
      fixedIndex: 1,
      inverseIndex: 1
    };

    handleTabChange = (index) => {
      this.setState({index});
    };

    render() {
      const {
        theme,
        data,
        ...others
      } = this.props;

      return (
        <section data-react-toolbox="dplTab">
          <Tabs index={this.state.index} onChange={this.handleTabChange}>
            {
              data.map((tab_data, idx) => (
                <Tab key={idx} label={tab_data.tabtitle}>
                  <Scrollbars style={{'width': '100%', 'height': 90 }}>
                    {
                      tab_data.tabtext.map((tab_text, tab_data_idx) => {
                        return (<p key={tab_data_idx}>{tab_text}</p>);
                      })
                    }
                  </Scrollbars>
                </Tab>
              ))
            }
          </Tabs>
        </section>
      );
    }
  };

  DplTab.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({
    }),
  };

  DplTab.defaultProps = {
    className: '',
  };

  return DplTab;
};

const DplTab = factory();
export default themr(DPLTAB)(DplTab);
export { factory as dplTabFactory };
export { DplTab };