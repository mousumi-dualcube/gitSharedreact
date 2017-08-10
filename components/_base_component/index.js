import { themr } from 'react-css-themr';
import { BASECOMPONENT } from '../identifiers';
import { baseComponentFactory } from './BaseComponent';
import theme from './theme.css';

const BaseComponent = baseComponentFactory();
const ThemedBaseComponent = themr(BASECOMPONENT, theme)(BaseComponent);

export default ThemedBaseComponent;
export { ThemedBaseComponent as BaseComponent };
