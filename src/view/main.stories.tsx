import * as React from "react";
import { storiesOf } from "@storybook/react";

import { MainView } from "./main.view";

const stories = storiesOf("View", module).addParameters({
  component: MainView,
});

stories.add("Main", () => {
  return (
    <MainView />
  );
});
