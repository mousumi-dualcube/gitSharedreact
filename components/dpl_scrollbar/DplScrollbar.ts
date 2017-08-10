import * as React from "react";
import ReactToolbox from "../index";

export interface DplScrollbarTheme {
}

export interface DplScrollbarProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplScrollbarTheme;
}

export class DplScrollbar extends React.Component<DplScrollbarProps, {}> { }

export default DplScrollbar;
