import * as React from "react";
import ReactToolbox from "../index";

export interface TilesCardTheme {
}

export interface TilesCardProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: TilesCardTheme;
}

export class TilesCard extends React.Component<TilesCardProps, {}> { }

export default TilesCard;
