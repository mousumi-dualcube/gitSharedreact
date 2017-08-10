import { themr } from 'react-css-themr';
import { DPLPOPOVER } from '../identifiers';
import { dplPopoverFactory } from './DplPopover';
import theme from './theme.css';

const DplPopover = dplPopoverFactory();
const ThemedDplPopover = themr(DPLPOPOVER, theme)(DplPopover);

export default ThemedDplPopover;
export { ThemedDplPopover as DplPopover };

window.onload = function() {
  if ("ontouchstart" in window || "ontouch" in window) { 
    document.body.setAttribute("data-screen", "touch");
  }
}