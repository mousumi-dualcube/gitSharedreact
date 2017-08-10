import * as React from "react";
import ReactToolbox from "../index";

export interface DplAccordionTheme {
}

export interface DplAccordionProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: DplAccordionTheme;
}

export class DplAccordion extends React.Component<DplAccordionProps, {}> { }

export default DplAccordion;
