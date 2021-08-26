import * as React from "react";

import { Page } from "../../component/page/page.component";
import { SideBySide } from "../../component/sideBySide/sideBySide.component";
import { Error } from "../../component/error/error.component";
import { Footer } from "../../component/footer/footer.component";

export const ErrorPage: React.FunctionComponent = () => {
  return (
    <Page>
      <SideBySide
        selectedBlock={1}
        content1={<Error />}
      />

      <Footer />
    </Page>
  );
}
