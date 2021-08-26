import * as React from "react";
import { ILocationOfInterest } from "../../interface/ILocationOfInterest.interface";
import { displayDate } from "../../service/displayDate.service";
import { Message } from "../message/message.component";

import "./event.scss";

export interface IEventProps {
  location: ILocationOfInterest;
  onBackClick: () => void;
}

export const Event: React.FunctionComponent<IEventProps> = ({ location, onBackClick }) => {
  return (
    <Message>
      <section className="event">
        <h2 className="event__title">{location.properties.Event}</h2>

        <p className="event__location">{location.properties.Location}</p>
        <p className="event__date">{displayDate(location.properties.Start)} – {displayDate(location.properties.End, "h:mm a")}</p>


        <div className="event__advice">
          <span className="event__advice__title">Ministry of Health advice:</span>
          <span className="event__advice__text">{location.properties.Advice}</span>
        </div>

        {
          location.properties.Added &&
          <p className="event__updated">Updated at {displayDate(location.properties.Added)}</p>
        }

        <button type="button" className="event__button" onClick={onBackClick}>Go back</button>
      </section>
    </Message>
  );
}
