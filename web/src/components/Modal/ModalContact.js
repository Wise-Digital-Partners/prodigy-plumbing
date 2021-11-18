import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import MicroModal from "micromodal";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Contact from "../Form/Contact";
import RequestAppointment from "../Form/RequestAppointment";

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

const StyledTabs = styled.div`
  .react-tabs__tab-list {
    ${tw`grid grid-cols-2 gap-2 mb-6 md:mb-10 border-none`}
  }
  .react-tabs__tab {
    ${tw`text-sm text-black/40 font-semibold py-2.5 px-4 bg-gray-50 rounded flex items-center justify-center w-full border-none cursor-pointer transition-colors duration-300 ease-linear`}
  }
  .react-tabs__tab-panel {
    ${tw`hidden`}
  }
  .react-tabs__tab-panel--selected {
    ${tw`block`}
  }
  .react-tabs__tab--selected {
    ${tw`text-white text-opacity-100 bg-primary-500 rounded`}
    svg path {
      ${tw`text-white`}
    }
  }
`;

const Modal = ({ modalTabIndex }) => {
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

  const data = useStaticQuery(graphql`
    {
      commercial: file(
        relativePath: { eq: "6.0 Contact/Commercial Icon.svg" }
      ) {
        publicURL
      }
      residential: file(
        relativePath: { eq: "6.0 Contact/Residental Icon.svg" }
      ) {
        publicURL
      }
    }
  `);

  // const [tabIndex, setTabIndex] = useState(modalTabIndex);
  const [tabIndex, setTabIndex] = useState(1);

  // useEffect(() => {
  //   setTabIndex(modalTabIndex);
  // }, [modalTabIndex]);

  const invisible = "hidden";
  const visible = "block";
  const [setServices, setServicesState] = useState(visible);
  const [setPhoneNumbers, setPhoneNumbersState] = useState(visible);
  const [setBackButton1, setBackButton1State] = useState(invisible);
  const [setBackButton2, setBackButton2State] = useState(invisible);
  const [setAppointmentForm, setAppointmentFormState] = useState(invisible);
  useState(invisible);
  const [setStep1, setStep1State] = useState(visible);
  const [setStep2, setStep2State] = useState(invisible);
  const [setSelectedService, setSelectedServiceState] = useState("");

  function showServices() {
    setServicesState(visible);
    setPhoneNumbersState(visible);
    setBackButton1State(invisible);
    setAppointmentFormState(invisible);
  }

  function showAppointmentForm(service) {
    setServicesState(invisible);
    setPhoneNumbersState(invisible);
    setStep1State(visible);
    setStep2State(invisible);
    setBackButton1State(visible);
    setBackButton2State(invisible);
    setAppointmentFormState(visible);
    setSelectedServiceState(service);
  }

  return (
    <StyledModal>
      <div
        className="modal relative hidden z-50"
        id="modal-contact"
        aria-hidden="false"
      >
        <div
          className="overlay fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black/40 outline-none"
          tabIndex="-1"
          data-modal-close
        >
          <div
            className="content-wrapper bg-white w-full h-screen overflow-auto max-w-[720px] ml-auto"
            role="dialog"
            aria-modal="true"
          >
            <div className="group flex justify-between items-center pt-12 pb-4 md:py-4 px-5 border-b border-gray-200 min-h[48px]">
              <div className={`flex space-x-6 md:space-x-8 ${setPhoneNumbers}`}>
                <a
                  href="tel:562-413-1928"
                  className="font-heading font-semibold text-primary-500"
                >
                  <i className="fas fa-phone-alt mr-1.5"></i>
                  <span>562-413-1928</span>
                </a>
              </div>

              <button
                onClick={showServices}
                className={`text-primary-500 hover:text-primary-500 font-heading font-semibold flex items-center space-x-1.5 ${setBackButton1}`}
              >
                <i className="far fa-arrow-left"></i>
                <span>Go Back</span>
              </button>

              <button
                onClick={showAppointmentForm}
                className={`text-primary-500 hover:text-primary-500 font-heading font-semibold flex items-center space-x-1.5 ${setBackButton2}`}
              >
                <i className="far fa-arrow-left"></i>
                <span>Go Back</span>
              </button>

              <i
                className="close fal fa-times text-xl text-black hover:text-primary-500 cursor-pointer transition-all duration-300 ease-linear"
                data-modal-close
              ></i>
            </div>

            <div className="pt-8 px-6 md:px-18 pb-24">
              <div className="mb-7 text-center">
                <p className="font-body text-mobile-4xl md:text-4xl text-gray-900 font-bold mb-3">
                  Contact Us
                </p>
              </div>

              <StyledTabs>
                <Tabs
                  selectedIndex={tabIndex}
                  forceRenderTabPanel={true}
                  onSelect={(index) => setTabIndex(index)}
                >
                  <TabList>
                    <Tab>
                      <i className="far fa-envelope text-lg mr-2"></i>
                      Send a Message
                    </Tab>
                    <Tab>
                      <i className="far fa-calendar text-lg mr-2"></i>
                      Request Appointment
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <Contact />
                  </TabPanel>

                  <TabPanel>
                    <div className={`grid grid-cols-2 gap-4 ${setServices}`}>
                      <button
                        onClick={() =>
                          showAppointmentForm("Residential Service")
                        }
                        className="group border border-solid border-gray-100 bg-gray-50 hover:border-primary-500 rounded p-4 md:px-6 md:pt-8 md:pb-10 cursor-pointer text-center transition-colors duration-300 ease-linear"
                      >
                        <img
                          src={data.residential.publicURL}
                          alt="Residential Service"
                          className="mx-auto mb-4"
                        />

                        <div className="font-heading text-lg text-secondary-800 font-bold mb-0 leading-none transition-colors duration-300 ease-linear">
                          Residential Service
                        </div>
                      </button>

                      <button
                        onClick={() =>
                          showAppointmentForm("Commercial Service")
                        }
                        className="group border border-solid border-gray-100 bg-gray-50 hover:border-primary-500 rounded p-4 md:px-6 md:pt-8 md:pb-10 cursor-pointer text-center transition-colors duration-300 ease-linear"
                      >
                        <img
                          src={data.commercial.publicURL}
                          alt="Commercial Service"
                          className="mx-auto mb-4"
                        />

                        <div className="font-heading text-lg text-secondary-800 font-bold mb-0 leading-none transition-colors duration-300 ease-linear">
                          Commercial Service
                        </div>
                      </button>
                    </div>

                    <div className={`${setAppointmentForm}`}>
                      <RequestAppointment
                        selectedService={setSelectedService}
                        setBackButton1State={setBackButton1State}
                        setBackButton2State={setBackButton2State}
                        setStep1={setStep1}
                        setStep1State={setStep1State}
                        setStep2={setStep2}
                        setStep2State={setStep2State}
                      />
                    </div>
                  </TabPanel>
                </Tabs>
              </StyledTabs>
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};
export default Modal;
