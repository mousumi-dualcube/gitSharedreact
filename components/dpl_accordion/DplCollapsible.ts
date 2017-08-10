import * as React from "react";
import ReactToolbox from "../index";

export interface DplCollapsibleTheme {
}

export interface DplCollapsibleProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplCollapsibleTheme;
}

export class DplCollapsible extends React.Component<DplCollapsibleProps, {}> { }

export default DplCollapsible;
