import * as React from "react";
import { ReactNode } from "react";

import { AuthStore } from "../../store/auth/authStore.store";
import { AppComponent } from "../appComponent/appComponent.component";
import { Navbar } from "../navbar/navbar.component";

export class Page extends AppComponent {
  constructor(props: {}) {
    super(props);

    this.stores = [AuthStore];
  }

  public render(): ReactNode {
    return (
      <>
        <Navbar />
        {this.props.children}
      </>
    );
  }
}
