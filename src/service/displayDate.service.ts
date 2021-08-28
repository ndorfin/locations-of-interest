import moment from "moment";

export const displayDate = (input: string, format?: string) => {
  const dateInputFormat = [
    "DD/MM/YYYY HH:mm a",
    "YYYY-MM-DD HH:mm:ss"
  ];

  if (!input) {
    return "Unknown";
  }

  const selectedFormat = dateInputFormat[
    input.includes("-") ? 1 : 0
  ];

  const momentValue = moment(input, selectedFormat);

  return momentValue.format(format || "dddd DD MMMM h:mm a");
}
