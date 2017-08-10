import * as React from "react";
import ReactToolbox from "../index";

export interface DplCardTheme {
}

export interface DplCardProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplCardTheme;
}

export class DplCard extends React.Component<DplCardProps, {}> { }

export default DplCard;
