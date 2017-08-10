import React, { PropTypes } from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import { DPLTABLE } from '../identifiers';
import DplIcon from '../dpl_icon';
import { Table, TableHead, TableRow, TableCell } from '../table';

const factory = () => {
	class DplTableCollapsible extends React.Component {
		constructor(props) {
			super(props);
			this.state = { 
				iscollapse: false
			};
		}

		handleClick = () => {
		    this.setState({iscollapse: !this.state.iscollapse});
		}

		render() {
			const {
			    chartTitle,
			    className,
			    data,
			    theme,
			    tableHeaders,
			    children,
			    ...others
			} = this.props;

			const collapsibleTable = classnames(theme.tableResponsive, theme.collapsibleTableResponsive);
			return (
				<div className={theme.tableConatiner}> 
					<div className={collapsibleTable} >
					  <div className= {classnames(theme.animated, this.state.iscollapse ? theme.stopanimated : '')}>
					    <Table selectable={false}  >
					      <TableHead onClick = {this.handleClick.bind(this)} className= {!this.state.iscollapse ? theme.iscollapsed : ''}>
					      	{					      	
					      	tableHeaders.map((header, header_id) => (					      		
					      			<TableCell key={header_id} className={this.state.iscollapse ? '' : theme.addPad }>
					      				{
						      				(header_id == 0) 
						      				?	<p className={theme.tableHeading}>
								      				{this.state.iscollapse ? <DplIcon name="chevron-circle-down" iconstyle={true} /> : <DplIcon name="chevron-circle-right"  iconstyle={true} />}
								      				<label>{header.name}</label>
					      						</p>					      			
						      				: 	<p><span className={theme.headerSpan}>{header.name}</span> {!this.state.iscollapse ? <span className={theme.headerSpan}>{header.value}</span> : <span className={theme.headerSpan} style={{"display": "none"}} >{header.value}</span> }</p>
					      				}
					      			</TableCell> 
                			))}
					      </TableHead>
					      {children}
					    </Table>
					  </div>
					</div>
				</div>
		    );
		}
	}

	DplTableCollapsible.propTypes = {
		children: PropTypes.node,
		className: PropTypes.string,
		tableHeaders: PropTypes.array,
		theme: PropTypes.shape({
		}),
	};

	DplTableCollapsible.defaultProps = {
		className: '',
	};

	return DplTableCollapsible;
};

const DplTableCollapsible = factory();
export default themr(DPLTABLE)(DplTableCollapsible);
export { factory as dplTableCollapsibleFactory };
export { DplTableCollapsible };