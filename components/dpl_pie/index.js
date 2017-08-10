import { themr } from 'react-css-themr';
import { DPLPIE } from '../identifiers';
import { dplPieFactory } from './DplPie';
import theme from './theme.css';

const DplPie = dplPieFactory();
const ThemedDplPie = themr(DPLPIE, theme)(DplPie);

export default ThemedDplPie;
export { ThemedDplPie as DplPie };
