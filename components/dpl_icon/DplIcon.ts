import * as React from "react";
import ReactToolbox from "../index";

export interface DplIconTheme {
}

export interface DplIconProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplIconTheme;
}

export class DplIcon extends React.Component<DplIconProps, {}> { }

export default DplIcon;
