import { themr } from 'react-css-themr';
import { DPLTAB } from '../identifiers';
import { dplTabFactory } from './DplTab';
import theme from './theme.css';

const DplTab = dplTabFactory();
const ThemedDplTab = themr(DPLTAB, theme)(DplTab);

export default ThemedDplTab;
export { ThemedDplTab as DplTab };