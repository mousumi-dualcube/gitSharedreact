import { themr } from 'react-css-themr';
import { DPLCARD } from '../identifiers';
import { dplCardFactory } from './DplCard';
import { tilesCardFactory } from './TilesCard';
import theme from './theme.css';

const DplCard = dplCardFactory();
const ThemedDplCard = themr(DPLCARD, theme)(DplCard);

const TilesCard = tilesCardFactory();
const ThemedTilesCard = themr(DPLCARD, theme)(TilesCard);

export default ThemedDplCard;
export { ThemedDplCard as DplCard };
export { ThemedTilesCard as TilesCard };