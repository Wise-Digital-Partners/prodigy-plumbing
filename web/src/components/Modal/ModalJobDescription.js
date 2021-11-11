import React from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";

import SliderJobDescription from "../Slider/SliderJobDescription";

const StyledModal = styled.div`
  .modal {
    &[aria-hidden="false"] {
      .overlay {
        animation: mmfadeIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="false"] {
      .content-wrapper {
        animation: mmpopUp 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .overlay {
        animation: mmfadeOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .content-wrapper {
        animation: mmpopOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }
`;

const Modal = ({ slideIndex, slides }) => {
  if (typeof window !== `undefined`) {
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
    <div>
      <StyledModal>
        <div
          className="modal relative hidden z-50"
          id="modal-job-description"
          aria-hidden="false"
        >
          <div
            className="overlay fixed flex justify-center inset-0 bg-black/75 outline-none"
            tabIndex="-1"
            data-modal-close
          >
            <div
              className="content-wrapper bg-white shadow-3xl w-full max-w-[960px] overflow-auto pt-4 pb-12 my-10 mx-4 relative"
              role="dialog"
            >
              <SliderJobDescription slideIndex={slideIndex} slides={slides} />
              <i
                className="fal fa-times absolute top-5 md:top-7 right-4 text-black hover:text-primary-500 text-2xl cursor-pointer transition-all duration-300 ease-linear z-10"
                data-modal-close
              ></i>
            </div>
          </div>
          {/* <i className="close fal fa-times" data-modal-close></i> */}
          {/* <div className="md:hidden bg-primary-400 h-20 fixed bottom-0 w-full"></div>               */}
        </div>
      </StyledModal>
    </div>
  );
};

export default Modal;
