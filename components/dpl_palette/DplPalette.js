import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { DPLPALETTE } from '../identifiers';
import { Card, CardMedia, CardTitle, CardText, CardActions } from '../card';

const factory = () => {
  class DplPalette extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: props.paletteTitle,
        color: props.paletteColor,
        type: props.paletteType
      }
    }
    render() {
      const {
        theme,
        className,
        ...others
      } = this.props;
      return (<div data-react-toolbox="dpl-palette" data-type={this.state.type} className={classnames(theme.dplpalette, className)} {...others}>
        <Card className={theme.paletteCard} >
          <CardMedia
            aspectRatio="wide"
            style={{"backgroundColor":(this.state.paletteColor ? this.state.paletteColor : "")}}
            className={classnames(theme.paletteCardMedia)}
          />
          <CardTitle
            title={this.state.title}
            subtitle={this.state.color}
            className={theme.paletteCardTitle}
          />
        </Card>
      </div>);
    }
  };

  DplPalette.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({
    }),
  };

  DplPalette.defaultProps = {
    className: '',
  };

  return DplPalette;
};

const DplPalette = factory();
export default themr(DPLPALETTE)(DplPalette);
export { factory as dplPaletteFactory };
export { DplPalette };
