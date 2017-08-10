import { themr } from 'react-css-themr';
import { DPLSTATUS } from '../identifiers';
import { dplStatusFactory } from './DplStatus';
import theme from './theme.css';

const DplStatus = dplStatusFactory();
const ThemedDplStatus = themr(DPLSTATUS, theme)(DplStatus);

export default ThemedDplStatus;
export { ThemedDplStatus as DplStatus };
