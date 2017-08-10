import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { DPLTABLE } from '../identifiers';
import DplIcon from '../dpl_icon';
import {DplScrollbar} from '../dpl_scrollbar';
import { Table, TableHead, TableRow, TableCell } from '../table';
import {DplPopover} from '../dpl_popover';
import {DplMenuContainer} from '../dpl_menuContainer';
import { List, ListItem} from '../list';
import DplLink from '../dpl_link';

const factory = () => {
  class DplTable extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        height: 300
      };
    }

    componentDidMount() {
      var that = this;
      this.setState({height: document.getElementById('tableContainer').offsetHeight});
      setTimeout(function(){
        that.setState({height: document.getElementById('tableContainer').offsetHeight});
      },600);
    }

    render() {
      const {
        chartTitle,
        className,
        data,
        theme,
        tableHeaders,
        sortedData,
        children,
        id,
        label,
        viewLink,
        subHeading,
        ...others
      } = this.props;

      const collapsibleTable = classnames(theme.tableResponsive, theme.scrollableTable);
      
      return (
        <div className={theme.tableConatiner} data-react-toolobox="tableResponsive">   
          <div className={theme.tabelDescription} ref="scrollTable">
            <div className={theme.titleSetting}>              
              <DplMenuContainer title="STANDARD" icon="cog">
                <DplPopover>
                  <List selectable ripple>
                    <ListItem  caption='Export table'/>
                    <ListItem  caption='Reset table'/>
                    <ListItem  caption='Show/Hide columns'/>
                  </List>
                </DplPopover>
              </DplMenuContainer>
              <div className={theme.labelClass}>
                <label>{label}</label>
                <div className={theme.subHeading}>
                  {(subHeading) ? 
                    <label className={theme.subHead}>{subHeading}</label> 
                    : 
                    <DplLink href={viewLink}>View full occupancy report</DplLink>
                  }
                </div>
              </div>
            </div>
          </div>
          <DplScrollbar scrollHeight = {this.state.height}>
            <div className={collapsibleTable} >
              <Table id={id} selectable={false} id="tableContainer">
                {children}
              </Table>
            </div>
          </DplScrollbar>
        </div>
      );
    }
  };

  DplTable.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tableHeaders: PropTypes.array,
    sortedData: PropTypes.array,
    theme: PropTypes.shape({
    }),
  };

  DplTable.defaultProps = {
    className: '',
  };

  return DplTable;
};

const DplTable = factory();
export default themr(DPLTABLE)(DplTable);
export { factory as dplTableFactory };
export { DplTable };
