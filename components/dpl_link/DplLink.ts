import * as React from "react";
import ReactToolbox from "../index";

export interface DplLinkTheme {
}

export interface DplLinkProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplLinkTheme;
}

export class DplLink extends React.Component<DplLinkProps, {}> { }

export default DplLink;
