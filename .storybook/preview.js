import { addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

import "./decorators";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
