import React from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";

import Apply from "../Form/Apply";

const StyledModal = styled.div`
  .modal {
    &[aria-hidden="false"] {
      .overlay {
        animation: mmfadeIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="false"] {
      .content-wrapper {
        animation: mmslideIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .overlay {
        animation: mmfadeOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .content-wrapper {
        animation: mmslideOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }
`;

const Modal = () => {
  if (typeof window !== "undefined") {
    MicroModal.init({
      openTrigger: "data-modal-open",
      closeTrigger: "data-modal-close",
      disableFocus: true,
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
    });
  }

  return (
    <StyledModal>
      <div
        className="modal relative hidden z-50"
        id="modal-apply"
        aria-hidden="false"
      >
        <div
          className="overlay fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black/40 outline-none"
          tabIndex="-1"
          data-modal-close
        >
          <div
            className="content-wrapper bg-white w-full h-screen overflow-auto max-w-[720px] ml-auto pt-16 md:pt-20 px-6 md:px-20 pb-20"
            role="dialog"
            aria-modal="true"
          >
            <i
              className="close fal fa-times absolute right-4 top-4 text-xl text-black hover:text-primary-500 cursor-pointer transition-all duration-300 ease-linear"
              data-modal-close
            ></i>

            <div>
              <header className="mb-6 md:mb-8">
                <p className="heading-two">Apply Today</p>
              </header>
              <Apply />
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};
export default Modal;
