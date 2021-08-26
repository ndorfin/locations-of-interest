import * as React from "react";
import { ReactNode } from "react";

import "./sideBySide.scss";

import { AppComponent } from "../appComponent/appComponent.component";

export interface ISideBySideProps {
  selectedBlock?: number;
  content1: ReactNode;
  content2?: ReactNode;
}

export class SideBySide extends AppComponent<ISideBySideProps> {
  public render(): ReactNode {
    return (
      <section className={[
        "sideBySide",
        this.props.selectedBlock ? "sideBySide--has-selected" : "sideBySide--none-selected",
        this.props.selectedBlock === 1 && "sideBySide--content1",
        this.props.selectedBlock === 2 && "sideBySide--content2",
      ].filter((c) => !!c).join(" ")} id="sideBySide">
        <div className={[
          "sideBySide__block",
          this.props.selectedBlock !== 1 && "sideBySide__block--default-hidden",
          this.props.selectedBlock === 2 && "sideBySide__block--hidden",
        ].filter((c) => !!c).join(" ")}>{this.props.content1}</div>

        <div className={[
          "sideBySide__block",
          this.props.selectedBlock === 1 && "sideBySide__block--hidden",
        ].filter((c) => !!c).join(" ")}>{this.props.content2}</div>
      </section>
    );
  }
}
