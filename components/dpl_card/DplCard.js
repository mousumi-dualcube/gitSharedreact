import React, { PropTypes } from 'react';
import { themr } from 'react-css-themr';
import { DPLCARD } from '../identifiers';
import FlipCard from 'react-flipcard';
import { Button, IconButton, BrowseButton } from '../button';
import DplIcon from '../dpl_icon';
import TilesCard from './TilesCard';

const factory = () => {
  class DplCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isFlipped: false};
    }

    showBack() {
      this.setState({isFlipped: true});
    }

    showFront() {
      this.setState({isFlipped: false});
    }

    handleOnFlip(flipped, dashlet) {
      if (flipped) {
        //this.refs.backButton.getDOMNode().focus();
      }
    }

    handleKeyDown(e) {
      if (this.state.isFlipped && e.keyCode === 27) {
        this.showFront();
      }
    }
    render() {

      const {
        className,
        children,
        theme,
        chartTitle,
        renderCharts,
        renderFlipCard,
        cardDesciption,
        flipCard,
        option,
        pattern,
        ...others
      } = this.props;

      return (
        <div className= {theme.CardContainer} data-react-toolobox="CardContainer">
          {
            (flipCard) 
            ?
            <div className= {theme.flipCard}>
              <FlipCard
                disabled={true}
                flipped={this.state.isFlipped}
                onFlip={this.handleOnFlip}
                onKeyDown={this.handleKeyDown}
                >
                <div className={theme.chartCard}>   
                  <div className={theme.chartTitle}>
                    <h2>{chartTitle}</h2>
                    <button type="button" onClick={this.showBack.bind(this)}><DplIcon name="info-circle" iconstyle={true}/></button>
                  </div>
                  {children}
                </div>
                <div className={theme.chartCard}>
                  <div className={theme.chartTitle}>
                    <h2>{chartTitle}</h2>
                    <button type="button" ref="backButton" onClick={this.showFront.bind(this)}><DplIcon name="arrow-circle-left" iconstyle={true}/></button>
                  </div>
                  <div className={theme.cardDesciption}>
                    {cardDesciption}
                  </div>
                </div>
              </FlipCard>
            </div>
            :
            <div className= {theme.flipCard}>
              <div className= {theme.chartCard}>
                <TilesCard option={option} theme={theme} pattern={pattern}/>
              </div>
            </div>
          }
        </div>
      );
      
    }
  };


  DplCard.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({
    }),
  };

  DplCard.defaultProps = {
    className: '',
  };

  return DplCard;
};

const DplCard = factory();
export default themr(DPLCARD)(DplCard);
export { factory as dplCardFactory };
export { DplCard };
