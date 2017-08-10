import * as React from "react";
import ReactToolbox from "../index";

export interface DplTabTheme {
}

export interface DplTabProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplTabTheme;
}

export class DplTab extends React.Component<DplTabProps, {}> { }

export default DplTab;
