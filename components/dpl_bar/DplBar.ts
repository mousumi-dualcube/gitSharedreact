import * as React from "react";
import ReactToolbox from "../index";

export interface DplBarTheme {
}

export interface DplBarProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplBarTheme;
}

export class DplBar extends React.Component<DplBarProps, {}> { }

export default DplBar;
