import { themr } from 'react-css-themr';
import { DPLCALENDAR } from '../identifiers';
import { dplCalendarFactory } from './DplCalendar';
import theme from './theme.css';

const DplCalendar = dplCalendarFactory();
const ThemedDplCalendar = themr(DPLCALENDAR, theme)(DplCalendar);

export default ThemedDplCalendar;
export { ThemedDplCalendar as DplCalendar };