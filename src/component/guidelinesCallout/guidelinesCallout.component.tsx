import * as React from "react";
import { ReactNode } from "react";

import "./guidelinesCallout.scss";

import { AppComponent } from "../appComponent/appComponent.component";

export class GuidelinesCallout extends AppComponent {
  public render(): ReactNode {
    return (
      <section className="guidelines-callout">
        <p className="guidelines-callout__text">
          {"If you have been at any of these locations of interest during the relevant time, please follow the "}
          <a href="https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus" target="_blank" rel="noopener" className="guidelines-callout__text__link">
            {"NZ Ministry of Health’s guidelines"}
          </a>
          {"."}</p>
      </section>
    );
  }
}
