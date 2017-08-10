import { themr } from 'react-css-themr';
import { DPLICON } from '../identifiers';
import { dplIconFactory } from './DplIcon';
import theme from './theme.css';

const DplIcon = dplIconFactory();
const ThemedDplIcon = themr(DPLICON, theme)(DplIcon);

export default ThemedDplIcon;
export { ThemedDplIcon as DplIcon };

window.onload = function() {
  if ("ontouchstart" in window || "ontouch" in window) { 
    document.body.setAttribute("data-screen", "touch");
  }
}