import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Table } from "./table.component";
import { ILocationOfInterest } from "../../interface/ILocationOfInterest.interface";

export default {
  title: "Table",
  component: Table,
  argTypes: {
    locations: {
      control: "array",
      defaultValue: [
        {
          type: "",
          properties: {
            id: "0",
            Event: "Event name 01/08/2021",
            Location: "123 Address",
            City: "Wellington",
            Start: "01/08/2021 18:30",
            End: "01/08/2021 18:45",
            Advice: "Isolate and Call Healthline.",
            Added: "02/08/2021 12:00",
          },
          geometry: {
            type: "",
            coordinates: [0, 0],
          }
        },

        {
          type: "",
          properties: {
            id: "1",
            Event: "Event name 01/08/2021",
            Location: "456 Address",
            City: "Auckland",
            Start: "01/08/2021 16:15",
            End: "01/08/2021 16:30",
            Advice: "Isolate and Call Healthline.",
            Added: "01/08/2021 13:00",
          },
          geometry: {
            type: "",
            coordinates: [0, 0],
          }
        },
      ] as ILocationOfInterest[],
    },

    searchTerm: {
      control: "text",
      defaultValue: "123",
    },
  },
} as ComponentMeta<typeof Table>;

export const Default: ComponentStory<typeof Table> = (args) => <Table {...args} />;
