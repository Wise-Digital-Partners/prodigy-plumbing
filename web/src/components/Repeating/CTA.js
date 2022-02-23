import React from "react";

import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";

const CTA = ({ ctaHeading, headingLevel, ctaText, hideSubtext, className }) => {
  const HeadingTag = headingLevel || "h2";

  const url = typeof window !== "undefined" ? window.location.href : "";

  return (
    <section
      className={`bg-secondary-800 px-6 md:px-10 lg:px-14 pt-14 md:pt-16 pb-18 md:pb-14 mx-6 md:mx-10 border-4 border-secondary-400 rounded-3xl ${
        className || ""
      }`}
    >
      <div className="container">
        <HeadingTag className="text-white text-shadow heading-one">
          {ctaHeading || ["The Smart Choice For Plumbing & HVAC"]}
        </HeadingTag>
        <div className="flex flex-col lg:flex-row justify-between lg:items-end lg:space-x-6">
          <div className="max-w-[700px]">
            <p className="text-lg lg:text-xl text-white mb-4.5">
              {ctaText ||
                "Prodigy is the smart choice when you want premier plumbing services in Cerritos and Long Beach. Get a free estimate today."}
            </p>

            {hideSubtext !== true && (
              <p className="font-heading font-bold text-secondary-200 lg:mb-0">
                Are you in the service? Ask us about our military discount!
              </p>
            )}
          </div>

          <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
            <ButtonGhost
              href="tel:562-413-1928"
              text={[
                <i className="fas fa-phone text-primary-500 group-hover:text-white mr-2.5 transition-colors duration-300 ease-linear"></i>,
                "562-413-1928",
              ]}
              altStyle={true}
              className="w-full md:w-auto"
            />

            {url.indexOf("careers") !== -1 ? (
              <ButtonSolid
                modal="modal-apply"
                text="Apply Today"
                className="w-full md:w-auto"
              />
            ) : (
              <ButtonSolid
                modal="modal-contact"
                text="Book Service"
                className="w-full md:w-auto"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
