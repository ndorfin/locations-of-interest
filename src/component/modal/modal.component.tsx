import * as React from "react";

import "./modal.scss";

export interface IModalProps {
  title: string;
  onClose: () => void;
}

export const Modal: React.FunctionComponent<IModalProps> = ({ title, onClose, children }) => {
  return (
    <section className="modal">
      <div className="modal__backdrop" onClick={onClose}>&nbsp;</div>

      <div className="modal__container">
        <div className="modal__container__content">
          <div title="Close modal window">
            <svg viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg" className="modal__container__content__close" onClick={onClose}>
              <g filter="url(#filter0_d)">
                <rect x="20" y="20" width="42" height="42" rx="10" fill="#FAFAFA"/>
              </g>

              <path d="M42.4573 41L50.698 32.7592C51.1007 32.357 51.1007 31.7042 50.698 31.302C50.2954 30.8993 49.6434 30.8993 49.2407 31.302L41 39.5427L32.7592 31.302C32.357 30.8993 31.7042 30.8993 31.302 31.302C30.8993 31.7042 30.8993 32.357 31.302 32.7592L39.5427 41L31.302 49.2407C30.8993 49.643 30.8993 50.2958 31.302 50.698C31.5029 50.8993 31.7671 51 32.0306 51C32.2941 51 32.5579 50.8993 32.7592 50.698L41 42.4573L49.2407 50.698C49.4421 50.8993 49.7059 51 49.9694 51C50.2329 51 50.4967 50.8993 50.698 50.698C51.1007 50.2958 51.1007 49.643 50.698 49.2407L42.4573 41Z" fill="black"/>

              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="82"
                  height="82"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="10"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>

          <h2 className="modal__container__content__header">{title}</h2>
          <div className="modal__container__content__content">{children}</div>
        </div>
      </div>
    </section>
  )
}
