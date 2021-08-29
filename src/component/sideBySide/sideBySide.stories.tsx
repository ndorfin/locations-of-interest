import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SideBySide } from "./sideBySide.component";

export default {
  title: "SideBySide",
  component: SideBySide,
  argTypes: {
    selectedBlock: {
      control: "number",
    },
    content1: {
      control: "text",
      defaultValue: "Content 1",
    },
    content2: {
      control: "text",
      defaultValue: "Content 2",
    },
    content3: {
      control: "text",
      defaultValue: "Content 3",
    },
  },
} as ComponentMeta<typeof SideBySide>;

export const Default: ComponentStory<typeof SideBySide> = (args) => <SideBySide {...args} />;
