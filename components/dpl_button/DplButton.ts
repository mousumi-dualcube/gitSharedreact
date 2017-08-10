import * as React from "react";
import ReactToolbox from "../index";

export interface DplButtonTheme {
}

export interface DplButtonProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplButtonTheme;
}

export class DplButton extends React.Component<DplButtonProps, {}> { }

export default DplButton;
