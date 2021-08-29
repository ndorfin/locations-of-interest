import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SearchCriteria } from "./searchCriteria.component";

export default {
  title: "SearchCriteria",
  component: SearchCriteria,
  argTypes: {
    locations: {
      control: "array",
      defaultValue: [],
    },
    onChange: {
      control: "function",
    },
  },
} as ComponentMeta<typeof SearchCriteria>;

export const Default: ComponentStory<typeof SearchCriteria> = (args) => <SearchCriteria {...args} />;
