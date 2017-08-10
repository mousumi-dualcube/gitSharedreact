import * as React from "react";
import ReactToolbox from "../index";

export interface DplPieTheme {
}

export interface DplPieProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplPieTheme;
}

export class DplPie extends React.Component<DplPieProps, {}> { }

export default DplPie;
