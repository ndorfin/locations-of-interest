type DateTime = string;

export interface ILocationOfInterest {
  type: string;
  properties: ILocationOfInterestProperties;
  geometry: ILocationOfInterestGeometry;
}

export interface ILocationOfInterestProperties {
  id: string;
  Event: string;
  Location: string;
  City: string;
  Start: DateTime;
  End: DateTime;
  Advice: string;
  Added: DateTime;
}

export interface ILocationOfInterestGeometry {
  type: string;
  coordinates: number[];
}
