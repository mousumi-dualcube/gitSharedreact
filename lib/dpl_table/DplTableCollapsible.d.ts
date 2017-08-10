import * as React from "react";
import ReactToolbox from "../index";

export interface DplTableCollapsibleTheme {
}

export interface DplTableCollapsibleProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplTableCollapsibleTheme;
}

export class DplTableCollapsible extends React.Component<DplTableCollapsibleProps, {}> { }

export default DplTableCollapsible;
