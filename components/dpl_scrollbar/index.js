import { themr } from 'react-css-themr';
import { DPLSCROLLBAR } from '../identifiers';
import { dplScrollbarFactory } from './DplScrollbar';

import theme from './theme.css';

const DplScrollbar = dplScrollbarFactory();
const ThemedDplScrollbar = themr(DPLSCROLLBAR, theme)(DplScrollbar);

export default ThemedDplScrollbar;
export { ThemedDplScrollbar as DplScrollbar };
