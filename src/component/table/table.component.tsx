import * as React from "react";
import moment from "moment";

import { ILocationOfInterest } from "../../interface/ILocationOfInterest.interface";

import "./table.scss";

export interface ITableProps {
  locations: ILocationOfInterest[];
  searchTerm: string;
}

export const Table: React.FunctionComponent<ITableProps> = ({ locations, searchTerm }) => {
  const healthlinePhone = "0800611116";

  const dateInputFormat = [
    "DD/MM/YYYY HH:mm",
    "YYYY-MM-DD HH:mm:ss"
  ];

  const displayDate = (input: string, format?: string) => {
    if (!input) {
      return "Unknown";
    }

    const selectedFormat = dateInputFormat[
      input.includes("-") ? 1 : 0
    ];

    const momentValue = moment(input, selectedFormat);

    return momentValue.format(format || "dddd DD MMMM h:mm a");
  }

  const displayWithSeachTerm = (input: string) => {
    const offsetOfText = input.toLowerCase().indexOf(searchTerm.toLowerCase());
    if (!searchTerm || offsetOfText === -1) return input;

    const textPriorToIndex = input.substring(0, offsetOfText);
    const matchedText = input.substring(offsetOfText, offsetOfText + searchTerm.length);
    const textAfterIndex = input.substring(offsetOfText + searchTerm.length);

    return <>{textPriorToIndex}<span className="table__highlight">{matchedText}</span>{textAfterIndex}</>;
  };

  return (
    <section className="table">
      <table className="table__table">
        <thead>
          <tr className="table__table__header">
            <th>Location</th>
            <th>Address</th>
            <th>Day &amp; Time</th>
            <th>What to Do</th>
            <th>Updated</th>
          </tr>
        </thead>

        <tbody>
          {
            locations.map((location) =>
              <tr key={location.properties.id}>
                <td>{displayWithSeachTerm(location.properties.Event)}</td>
                <td>{displayWithSeachTerm(location.properties.Location)}</td>
                <td>{displayDate(location.properties.Start)} – {displayDate(location.properties.End, "h:mm a")}</td>
                <td dangerouslySetInnerHTML={{
                  __html:
                    location.properties.Advice
                    .replace("Call Healthline", `<a href="tel:${healthlinePhone}" class="table__table__healthline">Call Healthline</a>`)
                    .replace("Isolate", `<strong>Isolate</strong>`)
                    .replace("isolate", `<strong>isolate</strong>`),
                  }}></td>
                <td>{displayDate(location.properties.Added, "DD MMM h:mm a")}</td>
              </tr>)
          }
        </tbody>
      </table>
    </section>
  );
}
