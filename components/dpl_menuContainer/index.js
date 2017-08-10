import { themr } from 'react-css-themr';
import { DPLMENUCONTAINER } from '../identifiers';
import { dplMenuContainerFactory } from './DplMenuContainer';
import theme from './theme.css';

const DplMenuContainer = dplMenuContainerFactory();
const ThemedDplMenuContainer = themr(DPLMENUCONTAINER, theme)(DplMenuContainer);

export default ThemedDplMenuContainer;
export { ThemedDplMenuContainer as DplMenuContainer };
