import * as React from "react";
import ReactToolbox from "../index";

export interface DplDropdownTheme {
}

export interface DplDropdownProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplDropdownTheme;
}

export class DplDropdown extends React.Component<DplDropdownProps, {}> { }

export default DplDropdown;
