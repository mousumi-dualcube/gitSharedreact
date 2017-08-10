import { themr } from 'react-css-themr';
import { DPLDROPDOWN } from '../identifiers';
import { dplDropdownFactory } from './DplDropdown';
import theme from './theme.css';

const DplDropdown = dplDropdownFactory();
const ThemedDplDropdown = themr(DPLDROPDOWN, theme)(DplDropdown);

export default ThemedDplDropdown;
export { ThemedDplDropdown as DplDropdown };
