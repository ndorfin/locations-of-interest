import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Navbar } from "./navbar.component";

const stories = storiesOf("Navbar", module).addParameters({
  component: Navbar,
});

stories.add("Default", () => {
  return (
    <BrowserRouter>
      <Navbar linkOnClick={action("linkOnClick")} />
    </BrowserRouter>
  );
});
