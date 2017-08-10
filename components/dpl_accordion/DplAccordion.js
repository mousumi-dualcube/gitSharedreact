import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { DPLACCORDION } from '../identifiers';
import FontAwesome from "react-fontawesome";
import DplCollapsible from './DplCollapsible';

const factory = () => {
 class DplAccordion extends React.Component {
    constructor(props) {
      super(props);
      let openPosition = this.props.startPosition | -1;
      this.state = {
        openPosition: openPosition
      };
    }
    
    handleTriggerClick = (position) => {
      this.setState({
        openPosition: position
      });    
    }

    render() {
      const {
          theme,
          className,
          ...others
      } = this.props;
      
      if(Array.isArray(this.props.children)) {
        let nodes = this.props.children.map((node, index) => {
          let triggerWhenOpen = (node.props['data-trigger-when-open']) ? node.props['data-trigger-when-open'] : node.props['data-trigger'];
          let triggerDisabled = (node.props['data-trigger-disabled']) || false;          
          let activeElement = node.props['data-active'];
          return (                
            <DplCollapsible
              theme={theme}
              key={"DplCollapsible"+index}
              handleTriggerClick={this.handleTriggerClick}
              open= {index === this.state.openPosition}
              trigger={node.props['data-trigger']}
              triggerWhenOpen={triggerWhenOpen}
              triggerDisabled={triggerDisabled}
              transitionTime={this.props.transitionTime}
              easing={this.props.easing}
              accordionPosition={index}
              accordion= {true}
              openIcon= {(node.props['data-openIcon']) ? node.props['data-openIcon'] : 'plus'}
              closeIcon= {(node.props['data-closeIcon']) ? node.props['data-closeIcon'] : 'minus'}
              activeElement= {activeElement}
              >
              {node}
              </DplCollapsible>
            );
        });
        return (<div>{nodes}</div>);
      } else {
          let triggerWhenOpen = (this.props.children.props['data-trigger-when-open']) ? this.props.children.props['data-trigger-when-open'] : this.props.children.props['data-trigger'];
          let triggerDisabled = (this.props.children.props['data-trigger-disabled']) || false;
          let activeElement = this.props.children.props['data-active'];
          return (
          <DplCollapsible
              theme={theme}
              handleTriggerClick={this.handleTriggerClick}
              open= {0 === this.state.openPosition}
              trigger={this.props.children.props['data-trigger']}
              triggerWhenOpen={triggerWhenOpen}
              triggerDisabled={triggerDisabled}
              transitionTime={this.props.transitionTime}
              easing={this.props.easing}
              accordionPosition={0}
              accordion= {true}
              openIcon= 'fa-plus'
              activeElement= {activeElement}
              >
              {this.props.children}
          </DplCollapsible>
          )
      }      
    }
  };

  DplAccordion.propTypes = {
    transitionTime: React.PropTypes.number,
    easing: React.PropTypes.string,
    startPosition: React.PropTypes.number,
    classParentString: React.PropTypes.string,
    className: PropTypes.string,
    theme: PropTypes.shape({
    }),
  };

  DplAccordion.defaultProps = {
    className: '',
  };

  return DplAccordion;
};

const DplAccordion = factory();
export default themr(DPLACCORDION)(DplAccordion);
export { factory as dplAccordionFactory };
export { DplAccordion };
