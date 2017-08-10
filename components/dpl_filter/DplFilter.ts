import * as React from "react";
import ReactToolbox from "../index";

export interface DplFilterTheme {
}

export interface DplFilterProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplFilterTheme;
}

export class DplFilter extends React.Component<DplFilterProps, {}> { }

export default DplFilter;
