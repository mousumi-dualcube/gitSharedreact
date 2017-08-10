import { themr } from 'react-css-themr';
import { DPLPALETTE } from '../identifiers';
import { dplPaletteFactory } from './DplPalette';
import theme from './theme.css';

const DplPalette = dplPaletteFactory();
const ThemedDplPalette = themr(DPLPALETTE, theme)(DplPalette);

export default ThemedDplPalette;
export { ThemedDplPalette as DplPalette };
