import * as React from "react";
import { ReactNode } from "react";

import "./searchShoutout.scss";

import { AppComponent } from "../appComponent/appComponent.component";

export class SearchShoutout extends AppComponent {
  public render(): ReactNode {
    return (
      <section className="searchShoutout">
        <h1 className="searchShoutout__title">{"Search Locations of Interest"}</h1>
        <p className="searchShoutout__text">{"Locations of interest for people who may be contacts of COVID-19 cases in the community."}</p>
        <p className="searchShoutout__text">{"Contacts who attended one of the locations in New Zealand during the relevant times are asked to follow the directions for that location."}</p>
      </section>
    );
  }
}
