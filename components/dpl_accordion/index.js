import { themr } from 'react-css-themr';
import { DPLACCORDION } from '../identifiers';
import { dplAccordionFactory } from './DplAccordion';
import { dplCollapsibleFactory } from './DplCollapsible';
import theme from './theme.css';

const DplAccordion = dplAccordionFactory();
const ThemedDplAccordion = themr(DPLACCORDION, theme)(DplAccordion);

const DplCollapsible = dplCollapsibleFactory();
const ThemedDplCollapsible = themr(DPLACCORDION, theme)(DplCollapsible);

export default ThemedDplAccordion;
export { ThemedDplAccordion as DplAccordion };
export { ThemedDplCollapsible as DplCollapsible };