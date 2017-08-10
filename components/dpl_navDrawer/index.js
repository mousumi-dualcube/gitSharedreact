import { themr } from 'react-css-themr';
import { DPLNAVDRAWER } from '../identifiers';
import { dplNavDrawerFactory } from './DplNavDrawer';
import theme from './theme.css';

const DplNavDrawer = dplNavDrawerFactory();
const ThemedDplNavDrawer = themr(DPLNAVDRAWER, theme)(DplNavDrawer);

export default ThemedDplNavDrawer;
export { ThemedDplNavDrawer as DplNavDrawer };