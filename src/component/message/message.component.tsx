import * as React from "react";

import "./message.scss";

export const Message: React.FunctionComponent = ({ children }) => {
  return (
    <section className="message">
      <div className="message__caption">{children}</div>
    </section>
  )
}
