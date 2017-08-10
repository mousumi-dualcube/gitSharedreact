import { themr } from 'react-css-themr';
import { DPLBAR } from '../identifiers';
import { dplBarFactory } from './DplBar';
import theme from './theme.css';

const DplBar = dplBarFactory();
const ThemedDplBar = themr(DPLBAR, theme)(DplBar);

export default ThemedDplBar;
export { ThemedDplBar as DplBar };
