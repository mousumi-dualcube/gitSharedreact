import * as React from "react";
import ReactToolbox from "../index";

export interface DplNavDrawerTheme {
}

export interface DplNavDrawerProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplNavDrawerTheme;
}

export class DplNavDrawer extends React.Component<DplNavDrawerProps, {}> { }

export default DplNavDrawer;
