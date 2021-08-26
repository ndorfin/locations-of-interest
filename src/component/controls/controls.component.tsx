import * as React from "react";

import "./controls.scss";

export interface IControlsProps {
  onSearch: () => void;
  onReset: () => void;
  onSetelectedBlock: (view: number) => void;
  selectedBlock: number;
}

export const Controls: React.FunctionComponent<IControlsProps> = ({
  onSearch,
  onReset,
  onSetelectedBlock,
  selectedBlock,
}) => {
  return (
    <section className="controls">
      <div className="controls__items controls__items--criteria">
        <button
          type="button"
          className="controls__items__button controls__items__button--dark"
          onClick={onSearch}>Search</button>

        <button
          type="button"
          className="controls__items__button" onClick={onReset}>Reset</button>
      </div>

      <div className="controls__items controls__items--side-by-side">
        <button
          type="button"
          className={[
            "controls__items__button",
            selectedBlock === 1 && "controls__items__button--dark",
          ].filter((c) => !!c).join(" ")}
          onClick={() => onSetelectedBlock(1)}>Map view</button>

        <button
          type="button"
          className={[
            "controls__items__button",
            selectedBlock === 2 && "controls__items__button--dark",
          ].filter((c) => !!c).join(" ")}
          onClick={() => onSetelectedBlock(2)}>Table View</button>

        <button
          type="button"
          className={[
            "controls__items__button",
            "controls__items__button--side-by-side",
            selectedBlock === 0 && "controls__items__button--dark",
          ].filter((c) => !!c).join(" ")}
          onClick={() => onSetelectedBlock(0)}>Side-by-Side View</button>
      </div>
    </section>
  );
}
