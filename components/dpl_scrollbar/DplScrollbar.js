import css from 'dom-css';
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import DplIcon from '../dpl_icon';
import { DPLSCROLLBAR } from '../identifiers';
import { Scrollbars } from 'react-custom-scrollbars';
import DplButton from '../dpl_button';

const factory = () => {
  class DplScrollbar extends React.Component {
    state = {
      scrollLeftZero: true,
      scrollRightZero: false
    };
    constructor(props) {
      super(props);
    }
    handleScrollUpdate = (values) => {
        const { shadowLeft, shadowRight } = this.refs; 
        const { scrollLeft, scrollWidth, clientWidth } = values;      
        const shadowLeftOpacity = 1 / 20 * Math.min(scrollLeft, 20);
        const rightScrollLeft = scrollWidth - clientWidth;
        const shadowRightOpacity = 1 / 20 * (rightScrollLeft - Math.max(scrollLeft, rightScrollLeft - 20));
        css(shadowLeft, { opacity: shadowLeftOpacity });
        css(shadowRight, { opacity: shadowRightOpacity }); 
    }
    toScrollLeft = (leftPosition, next_position) => { 
       var that = this;   
       setTimeout(function () {
          that.refs.scrollbars.scrollLeft(leftPosition)    
          leftPosition--;                 
          if (leftPosition >=0 && leftPosition > next_position) {        
             that.toScrollLeft(leftPosition, next_position);         
          }                    
       }, 0.005)
    }

    toScrollRight= (leftPosition, next_position) => { 
       var that = this;   
       setTimeout(function () {
          that.refs.scrollbars.scrollLeft(leftPosition)    
          leftPosition++;                 
          if (leftPosition < next_position) {
             that.toScrollRight(leftPosition, next_position);         
          }                    
       }, 0.005)
    }

    handleScrolling = (values) => {
      let leftPosition = this.refs.scrollbars.getScrollLeft();    
      let scrollGap = 500; 
      if (values == 'left') { 
        let next_position =  leftPosition - scrollGap;  
        this.toScrollLeft(leftPosition, next_position);
        this.setState({scrollRightZero: false});
        if(leftPosition <= scrollGap) this.setState({scrollLeftZero: true});
      }  
      else if (values == 'right') {
        let next_position =  leftPosition + scrollGap;  
        let that = this;        
        this.toScrollRight(leftPosition, next_position); 
        this.setState({scrollLeftZero: false});       
        if(this.refs.scrollbars.getScrollWidth() ==  (this.refs.scrollbars.getClientWidth() + this.refs.scrollbars.getScrollLeft())) this.setState({scrollRightZero: true});
      }
    }
    render() {
      const {
        className,
        children,
        theme,
        scrollHeight,
        ...others
      } = this.props;

      return (
        <div className={theme.scrollBarContainer}>
          <div className={theme.scrollBtn}>                    
            <DplButton 
              icon="angle-left" 
              mini 
              onClick={this.handleScrolling.bind(null, 'left')} 
              disabled = { this.state.scrollLeftZero ? true : false }
            />
            <DplButton 
              icon="angle-right" 
              mini 
              onClick={this.handleScrolling.bind(null, 'right')} 
              disabled = { this.state.scrollRightZero ? true : false }
            />  
          </div>
          
          <div style={{'position': 'relative'}} className={theme.tableBody}>
            <Scrollbars ref="scrollbars" style={{ 'width': '100%', 'height' : scrollHeight + 30, 'minHeight' : 447 }} hideTracksWhenNotNeeded={true} onUpdate={this.handleScrollUpdate}>
              {children}
            </Scrollbars>
            <div
              ref="shadowLeft"
              className={theme.shadowLeftStyle} 
              style={{ 'height' : scrollHeight }}
              />
            <div
              ref="shadowRight"
              className={theme.shadowRightStyle}
              style={{ 'height' : scrollHeight }}
              />
          </div>
        </div>
      );
    }
  };

  DplScrollbar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tableHeaders: PropTypes.array,
    sortedData: PropTypes.array,
    theme: PropTypes.shape({
    }),
  };

  DplScrollbar.defaultProps = {
    className: '',
  };

  return DplScrollbar;
};

const DplScrollbar = factory();
export default themr(DPLSCROLLBAR)(DplScrollbar);
export { factory as dplScrollbarFactory };
export { DplScrollbar };
