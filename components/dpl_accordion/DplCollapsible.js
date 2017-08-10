import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { DPLACCORDION } from '../identifiers';
import DplIcon from '../dpl_icon';

const factory = () => {
  class DplCollapsible extends React.Component {
      constructor(props) {
        super(props);
        if(this.props.open){
          this.state = {
            isClosed: false,
            shouldSwitchAutoOnNextCycle: false,
            height: 'auto',
            transition: 'none',
            hasBeenOpened: true,
            overflow: this.props.overflowWhenOpen
          }
        } else {
          this.state = {
            isClosed: true,
            shouldSwitchAutoOnNextCycle: false,
            height: 0,
            transition: 'height ' + this.props.transitionTime + 'ms ' + this.props.easing,
            hasBeenOpened: false,
            overflow: 'hidden'
          }
        }
      }

      whichTransitionEnd = (element) => {
        var transitions = {
            'WebkitTransition' : 'webkitTransitionEnd',
            'MozTransition'    : 'transitionend',
            'OTransition'      : 'oTransitionEnd otransitionend',
            'transition'       : 'transitionend'
        };

        for(var t in transitions){
            if(element.style[t] !== undefined){
                return transitions[t];
            }
        }
      }

      componentDidMount = () => {
        this.refs.outer.addEventListener(this.whichTransitionEnd(this.refs.outer), (event) => {
          if(this.state.isClosed === false){
            this.setState({
              shouldSwitchAutoOnNextCycle: true
            });
          }
        });
      }

      componentDidUpdate = (prevProps) => {

        if(this.state.shouldSwitchAutoOnNextCycle === true && this.state.isClosed === false) {
          this.makeResponsive();
        }

        if(this.state.shouldSwitchAutoOnNextCycle === true && this.state.isClosed === true) {
          this.prepareToOpen();
        }

        if(prevProps.open != this.props.open) {
          if(this.props.open === true) {
            this.openCollapsible();
          }
          else {
            this.closeCollapsible();
          }
        } 
      }

      handleTriggerClick = (event) => {
        event.preventDefault();
        if(this.props.triggerDisabled) {
          return
        }
        if(this.props.handleTriggerClick) {
          if(this.props.accordion) {
            if(this.state.isClosed === true){
              this.openCollapsible();
            } else {
              this.closeCollapsible();
            }
          }
          this.props.handleTriggerClick(this.props.accordionPosition);
        } else {
          if(this.state.isClosed === true){
            this.openCollapsible();
          } else {
            this.closeCollapsible();
          }
        }

      }

      closeCollapsible = () => {
        this.setState({
          isClosed: true,
          shouldSwitchAutoOnNextCycle: true,
          height: this.refs.inner.offsetHeight,
          overflow: 'hidden',
        });
      }

      openCollapsible = () => {
        this.setState({
          height: this.refs.inner.offsetHeight,
          transition: 'height ' + this.props.transitionTime + 'ms ' + this.props.easing,
          isClosed: false,
          hasBeenOpened: true
        });
      }

      makeResponsive = () => {
        this.setState({
          height: 'auto',
          transition: 'none',
          shouldSwitchAutoOnNextCycle: false,
          overflow: this.props.overflowWhenOpen
        });
      }

      prepareToOpen = () => {
        window.setTimeout(() => {
          this.setState({
            height: 0,
            shouldSwitchAutoOnNextCycle: false,
            transition: 'height ' + this.props.transitionTime + 'ms ' + this.props.easing
          });
        }, 50);
      }

      renderNonClickableTriggerElement =  () => {
        if (this.props.triggerSibling) {
          return (
            <span className={this.props.classParentString  + "__trigger-sibling"}>{this.props.triggerSibling}</span>
          )
        }
        return null;
      }

      render() {
        const {
            theme,
            className,
            openIcon,
            closeIcon,
            activeElement,
            dir,
            ...others
        } = this.props;
        let dropdownStyle = {
          height: this.state.height,
          WebkitTransition: this.state.transition,
          msTransition: this.state.transition,
          transition: this.state.transition,
          overflow: this.state.overflow
        }

        let openClass = this.state.isClosed ? 'isClosed' : 'isOpen';
        let disabledClass = this.props.triggerDisabled ? theme.isDisabled : ''
        let trigger = (this.state.isClosed === false) && (this.props.triggerWhenOpen !== undefined) ? this.props.triggerWhenOpen : this.props.trigger;
        let children = this.props.children;
        if(this.props.lazyRender)
          if(!this.state.hasBeenOpened)
            children = null;

        let triggerClassName = classnames(theme.collapsibleTrigger, openClass , disabledClass);
        let position = dir;

        return(
          <div data-react-dpl="collapsible" data-status={openClass} data-active={activeElement} className={theme.collapsible}>
            <span className={triggerClassName} onClick={this.handleTriggerClick}>{trigger}
            {
            Array.isArray(children) 
              ? 
              <DplIcon dir={position} name= {(this.state.isClosed) ? (openIcon) ? openIcon : 'plus' : (closeIcon) ? closeIcon : 'minus'} iconstyle={true} /> 
              : 
              ('props' in children && 'children' in children.props) ? <DplIcon dir={position} name= {(this.state.isClosed) ? (openIcon) ? openIcon : 'plus' : (closeIcon) ? closeIcon : 'minus'} iconstyle={true} /> : ''
             }
            </span>

            {this.renderNonClickableTriggerElement()}

            <div className={classnames(theme.collapsibleContentOuter, this.props.contentOuterClassName)} ref="outer" style={dropdownStyle}>
              <div className={classnames(theme.collapsibleContentInner, this.props.contentInnerClassName)} ref="inner">
                  {Array.isArray(children) ? children : ('props' in children && 'children' in children.props) ? children : ''}
              </div>
            </div>
          </div>
        );
      }
  };

  DplCollapsible.propTypes = {
    transitionTime: React.PropTypes.number,
    easing: React.PropTypes.string,
    open: React.PropTypes.bool,
    classParentString: React.PropTypes.string,
    openedClassName: React.PropTypes.string,
    triggerClassName: React.PropTypes.string,
    triggerOpenedClassName: React.PropTypes.string,
    contentOuterClassName: React.PropTypes.string,
    contentInnerClassName: React.PropTypes.string,
    accordionPosition: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    handleTriggerClick: React.PropTypes.func,
    trigger: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element
    ]),
    triggerWhenOpen:React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element
    ]),
    triggerDisabled: React.PropTypes.bool,
    lazyRender: React.PropTypes.bool,
    overflowWhenOpen: React.PropTypes.oneOf([
      'hidden',
      'visible',
      'auto',
      'scroll',
      'inherit',
      'initial',
      'unset',
    ]),
    triggerSibling: React.PropTypes.element,
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape(),
  };
  DplCollapsible.defaultProps = {
    transitionTime: 400,
    easing: 'linear',
    open: false,
    classParentString: 'Collapsible',
    triggerDisabled: false,
    lazyRender: false,
    overflowWhenOpen: 'hidden',
    openedClassName: '',
    triggerClassName: '',
    triggerOpenedClassName: '',
    contentOuterClassName: '',
    contentInnerClassName: '',
    className: '',
    triggerSibling: null,
    className: '',
    dir: 'right'
  };

  return DplCollapsible;
};

const DplCollapsible = factory();
export default themr(DPLACCORDION)(DplCollapsible);
export { factory as dplCollapsibleFactory };
export { DplCollapsible };
