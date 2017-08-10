import * as React from "react";
import ReactToolbox from "../index";

export interface DplMenuContainerTheme {
}

export interface DplMenuContainerProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplMenuContainerTheme;
}

export class DplMenuContainer extends React.Component<DplMenuContainerProps, {}> { }

export default DplMenuContainer;
