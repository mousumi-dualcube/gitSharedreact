import React, { PropTypes } from 'react';
import { themr } from 'react-css-themr';
import { DPLCARD } from '../identifiers';
import DplLink from '../dpl_link';
import DplIcon from '../dpl_icon';
import { Card, CardMedia, CardTitle, CardText, CardActions } from '../card';

const factory = () => {
  class TilesCard extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const {
        className,
        children,
        theme,   
        pattern,     
        ...others
      } = this.props;
      const {
        href,
        imagePath,  
        title,   
        text,     
        version,
        date
      } = this.props.option;

      return (
        <Card className={theme.cards} pattern={(pattern) ? pattern : 'grid'}>
          <DplLink href={(href) ? href : '#'} className={theme.cardItemHover}>
            <div className={theme.CardMediaOption}>
              <CardMedia
                aspectRatio="wide"
                image={imagePath ? imagePath : '#'} 
                className={theme.ListCardMedia}
              />
              <div className={theme.CardDetails}>
                <CardTitle
                  title={title}
                  className={theme.text_bold}
                />
                <CardText className={theme.description}>{text}</CardText>
                <CardActions theme={theme} className={theme.buttons}>
                  <span>
                    <DplIcon name="file" iconstyle={true} />
                    <label>{version}</label>
                  </span>
                  <span>
                    <DplIcon name="clock-o" iconstyle={true} />
                    <label>{date}</label>
                  </span>
                </CardActions>
              </div>
            </div>
          </DplLink>
        </Card>
      );
      
    }
  };


  TilesCard.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({
    }),
  };

  TilesCard.defaultProps = {
    className: '',
  };

  return TilesCard;
};

const TilesCard = factory();
export default themr(DPLCARD)(TilesCard);
export { factory as tilesCardFactory };
export { TilesCard };
