import { themr } from 'react-css-themr';
import { DPLFILTER } from '../identifiers';
import { dplFilterFactory } from './DplFilter';
import theme from './theme.css';

const DplFilter = dplFilterFactory();
const ThemedDplFilter = themr(DPLFILTER, theme)(DplFilter);

export default ThemedDplFilter;
export { ThemedDplFilter as DplFilter };