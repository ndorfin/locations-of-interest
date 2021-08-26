import * as React from "react";

import { Page } from "../../component/page/page.component";
import { SearchShoutout } from "../../component/searchShoutout/searchShoutout.component";
import { SearchCriteria } from "../../component/searchCriteria/searchCriteria.component";
import { SideBySide } from "../../component/sideBySide/sideBySide.component";
import { Controls } from "../../component/controls/controls.component";
import { GuidelinesCallout } from "../../component/guidelinesCallout/guidelinesCallout.component";
import { Footer } from "../../component/footer/footer.component";
import { Loading } from "../../component/loading/loading.component";

export const LoadingPage: React.FunctionComponent = () => {
  return (
    <Page>
      <SearchShoutout />

      <SearchCriteria
        locations={[]}
        onChange={() => {
          // null;
        }} />

      <Controls
        onSearch={() => {
          // null;
        }}
        onReset={() => {
          // null;
        }}
        onSetelectedBlock={() => {
          // null;
        }}
        selectedBlock={0} />

      <SideBySide
        selectedBlock={0}
        content1={<Loading />}
        content2={<Loading />}
      />

      <GuidelinesCallout />

      <Footer />
    </Page>
  );
}
