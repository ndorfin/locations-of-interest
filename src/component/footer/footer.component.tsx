import * as React from "react";
import { ReactNode } from "react";

import "./footer.scss";

import { AppComponent } from "../appComponent/appComponent.component";

export class Footer extends AppComponent {
  public render(): ReactNode {
    return (
      <section className="footer">
        <ul className="footer__links">
          <li className="footer__links__item">
            <a href="https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus" target="_blank" rel="noopener" className="footer__links__item__link">NZ Ministry of Health</a>
          </li>

          <li className="footer__links__item">
            <a
              href="https://covid19.govt.nz/"
              target="_blank"
              rel="noopener"
              className="footer__links__item__link">Unite Against COVID-19</a>
          </li>
        </ul>

        <p className="footer__love">
          {"Made with 💛 by "}
          <a
            href="https://mathewboyles.com/"
            target="_blank"
            rel="noopener"
            className="footer__love__link">Mathew Boyles</a>
          {" and "}
          <a
            href="https://www.chandlerheath.nz/"
            target="_blank"
            rel="noopener"
            className="footer__love__link">Chandler Heath</a>
        </p>

        <p className="footer__disclaimer">This site is not affiliated with <a href="https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus" target="_blank" rel="noopener" className="footer__disclaimer__link">NZ Ministry of Health</a></p>

        <ul className="footer__links footer__links--muted">
          <li className="footer__links__item">
            <a
              href="https://www.locationsofinterest.co.nz"
              target="_top"
              className="footer__links__item__link">www.locationsofinterest.co.nz</a>
          </li>

          <li className="footer__links__item">
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener"
              className="footer__links__item__link">Google Analytics</a>
          </li>

          <li className="footer__links__item">
            <a
              href="https://www.hotjar.com/privacy/"
              target="_blank"
              rel="noopener"
              className="footer__links__item__link">Hotjar</a>
          </li>
        </ul>
      </section>
    );
  }
}
