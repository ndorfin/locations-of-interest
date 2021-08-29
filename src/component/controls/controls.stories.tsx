import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Controls } from "./controls.component";

export default {
  title: "Controls",
  component: Controls,
  argTypes: {
    selectedBlock: {
      control: "number",
    },
  },
} as ComponentMeta<typeof Controls>;

export const Default: ComponentStory<typeof Controls> = (args) => <Controls {...args} />;
