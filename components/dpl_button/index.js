import { themr } from 'react-css-themr';
import { DPLBUTTON } from '../identifiers';
import { dplButtonFactory } from './DplButton';
import theme from './theme.css';

const DplButton = dplButtonFactory();
const ThemeDplButton = themr(DPLBUTTON, theme)(DplButton);

export default ThemeDplButton;
export { ThemeDplButton as DplButton };

window.onload = function() {
  if ("ontouchstart" in window || "ontouch" in window) { 
    document.body.setAttribute("data-screen", "touch");
  }
}