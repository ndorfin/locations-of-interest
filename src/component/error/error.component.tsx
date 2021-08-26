import * as React from "react";
import { Message } from "../message/message.component";

export const Error: React.FunctionComponent = () => {
  return (
    <Message>
      <p>{"An error occurred while loading the locations of interest."}</p>

      <a
        href="https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-health-advice-public/contact-tracing-covid-19/covid-19-contact-tracing-locations-interest">
        {"Visit Ministry of Health site"}
      </a>
    </Message>
  )
}
