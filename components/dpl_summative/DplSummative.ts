import * as React from "react";
import ReactToolbox from "../index";

export interface DplSummativeTheme {
}

export interface DplSummativeProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplSummativeTheme;
}

export class DplSummative extends React.Component<DplSummativeProps, {}> { }

export default DplSummative;
