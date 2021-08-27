import * as React from "react";
import { About } from "../../component/about/about.component";
import { Modal } from "../../component/modal/modal.component";

export const AboutPage: React.FunctionComponent = () => {
  return (
    <Modal
      title="About"
      onClose={() => {
        window.location.hash = "";
      }}>
      <About />
    </Modal>
  );
}
