import { themr } from 'react-css-themr';
import { DPLTABLE } from '../identifiers';
import { dplTableFactory } from './DplTable';
import { dplTableCollapsibleFactory } from './DplTableCollapsible';
import theme from './theme.css';

const DplTable = dplTableFactory();
const ThemeDplTable = themr(DPLTABLE, theme)(DplTable);

const DplTableCollapsible = dplTableCollapsibleFactory();
const ThemeDplTableCollapsible = themr(DPLTABLE, theme)(DplTableCollapsible);


export default ThemeDplTable;
export { ThemeDplTable as DplTable };
export { ThemeDplTableCollapsible as DplTableCollapsible };