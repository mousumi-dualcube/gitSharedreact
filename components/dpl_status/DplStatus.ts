import * as React from "react";
import ReactToolbox from "../index";

export interface DplStatusTheme {
}

export interface DplStatusProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplStatusTheme;
}

export class DplStatus extends React.Component<DplStatusProps, {}> { }

export default DplStatus;
