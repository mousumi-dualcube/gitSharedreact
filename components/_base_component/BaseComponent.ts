import * as React from "react";
import ReactToolbox from "../index";

export interface BaseComponentTheme {
}

export interface BaseComponentProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: BaseComponentTheme;
}

export class BaseComponent extends React.Component<BaseComponentProps, {}> { }

export default BaseComponent;
