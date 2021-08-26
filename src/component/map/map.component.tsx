import * as React from "react";

import { ILocationOfInterest } from "../../interface/ILocationOfInterest.interface";
import { Message } from "../message/message.component";

import "./map.scss";

const DISABLE_MAP = window.location.hostname === "localhost";

export interface IMapProps {
  locations: ILocationOfInterest[];
  onMarkerClick: (location: ILocationOfInterest) => void;
}

export const Map: React.FunctionComponent<IMapProps> = ({ locations, onMarkerClick }) => {
  if (DISABLE_MAP) {
    return <Message>Map temporarily disabled.</Message>;
  }

  const [ref, setRef] = React.useState<HTMLElement | null>(null);
  const [map, setMap] = React.useState<google.maps.Map>();
  const [_, setMarkers] = React.useState<google.maps.Marker[]>([]);

  const center = {
    lat: -41.42149185194225,
    lng: -187.52520963795772,
  };

  const renderMap = () => {
    const newMap = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center,
      zoom: 5,
      fullscreenControl: false,
    });

    setMap(newMap);
  }

  React.useEffect(() => {
    if (ref) {
      if ((window as any).MAPS_READY) {
        renderMap();
      } else {
        document.addEventListener("MapsReady", () => {
          renderMap();
        });
      }
    }
  }, [ref]);

  React.useEffect(() => {
    if (map) {
      const newMarkers =
        locations.map((location) => {
          const marker = new google.maps.Marker({
            position: new google.maps.LatLng(location.geometry.coordinates[1], location.geometry.coordinates[0]),
            map,
          });

          marker.addListener("click", async () => {
            onMarkerClick(location);
            map.setZoom(10);
            map.setCenter(marker.getPosition() as google.maps.LatLng);
          });

          return marker;
        });

      setMarkers((ms) => {
        ms.forEach((m) => m.setMap(null));
        return newMarkers;
      });
    }
  }, [map, locations])

  return (
    <section className="map" id="map" ref={setRef}></section>
  );
}
