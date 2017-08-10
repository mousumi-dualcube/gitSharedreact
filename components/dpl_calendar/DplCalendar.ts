import * as React from "react";
import ReactToolbox from "../index";

export interface DplCalendarTheme {
}

export interface DplCalendarProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplCalendarTheme;
}

export class DplCalendar extends React.Component<DplCalendarProps, {}> { }

export default DplCalendar;
