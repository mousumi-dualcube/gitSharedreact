import { themr } from 'react-css-themr';
import { DPLLINK } from '../identifiers';
import theme from './theme.css';

import {DplLink} from './DplLink';

const ThemedDplLink = themr(DPLLINK, theme)(DplLink);

export default ThemedDplLink;
export {ThemedDplLink as DplLink};

window.onload = function() {
  if ("ontouchstart" in window || "ontouch" in window) { 
    document.body.setAttribute("data-screen", "touch");
  }
}