import * as React from "react";
import ReactToolbox from "../index";

export interface DplPaletteTheme {
}

export interface DplPaletteProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplPaletteTheme;
}

export class DplPalette extends React.Component<DplPaletteProps, {}> { }

export default DplPalette;
