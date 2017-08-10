import * as React from "react";
import ReactToolbox from "../index";

export interface DplPopoverTheme {
}

export interface DplPopoverProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplPopoverTheme;
}

export class DplPopover extends React.Component<DplPopoverProps, {}> { }

export default DplPopover;
