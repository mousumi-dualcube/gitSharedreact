import { themr } from 'react-css-themr';
import { DPLSUMMATIVE } from '../identifiers';
import { dplSummativeFactory } from './DplSummative';
import theme from './theme.css';

const DplSummative = dplSummativeFactory();
const ThemedDplSummative = themr(DPLSUMMATIVE, theme)(DplSummative);

export default ThemedDplSummative;
export { ThemedDplSummative as DplSummative };
