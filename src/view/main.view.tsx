import * as React from "react";
import { ReactNode } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "../styles/main.scss";

import { AppComponent } from "../component/appComponent/appComponent.component";
import { Page } from "../component/page/page.component";

export class MainView extends AppComponent {
  public render(): ReactNode {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Page>Index</Page>} />
          <Route path="/page2" exact render={() => <Page>Page2</Page>} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}
