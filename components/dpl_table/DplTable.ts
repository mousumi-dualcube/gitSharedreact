import * as React from "react";
import ReactToolbox from "../index";

export interface DplTableTheme {
}

export interface DplTableProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplTableTheme;
}

export class DplTable extends React.Component<DplTableProps, {}> { }

export default DplTable;
