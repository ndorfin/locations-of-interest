import * as React from "react";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

import "../../styles/main.scss";

import { AppComponent } from "../appComponent/appComponent.component";

export interface INavbarProps {
  linkOnClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export class Navbar extends AppComponent<INavbarProps> {
  public render(): ReactNode {
    return (
      <nav className="nav">
        <NavLink
          to="/"
          exact
          className="nav-link"
          activeClassName="active"
          onClick={this.props.linkOnClick?.bind(this)}>Index</NavLink>

        <NavLink
          to="/page2"
          exact
          className="nav-link"
          activeClassName="active"
          onClick={this.props.linkOnClick?.bind(this)}>Page2</NavLink>
      </nav>
    );
  }
}
