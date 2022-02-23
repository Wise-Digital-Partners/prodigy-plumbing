import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import ButtonSolid from "../components/Button/ButtonSolid";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Hero from "../components/Hero/HeroFullWidth";
import ReputationBadges from "../components/Repeating/ReputationBadges";
import ServicesSideNav from "../components/Repeating/ServicesSideNav";

const Page = ({ data }) => {
  return (
    <Layout
      ctaHeading="The #1 Choice"
      ctaText="Prodigy is here for you when you need an HVAC specialist in Cerritos and Long Beach. Give us a call or book an appointment today."
    >
      <SearchEngineOptimization
        title="HVAC Services in Cerritos & Long Beach | Prodigy"
        description="Struggling to stay cool or warm? Can't keep comfortable? Make Prodigy your first call for HVAC in Cerritos and Long Beach. Book an appointment today!"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <div className="mb-5 md:hidden">
        <GatsbyImage image={data.heroDesktop.childImageSharp.gatsbyImageData} />
      </div>

      <Hero
        backgroundImages={data.heroDesktop.childImageSharp.gatsbyImageData}
        mobileRemoveBackground={true}
        backgroundPosition="50% 0%"
        padding="md:py-20"
      >
        <div className="md:bg-secondary-50/80 md:rounded-3xl md:px-14 md:py-18 md:max-w-[570px]">
          <h1 className="mb-0">HVAC In Cerritos & Long Beach</h1>
        </div>
      </Hero>

      <section className="pt-8 md:pt-28 mb-20 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-20 lg:gap-x-20">
            <div className="md:col-start-1 md:col-span-8">
              <div className="mb-14 md:mb-10">
                <p className="md:text-xl">
                  Are you struggling to stay cool or warm? Prodigy’s skilled
                  technicians are well-versed in both residential and commercial
                  HVAC systems. We aim to answer the following questions and any
                  others you have:
                </p>

                <ul className="list-arrows">
                  <li>How is the system performing overall? </li>
                  <li>
                    Are there temperature fluctuations in different areas of the
                    house?
                  </li>
                  <li>How old is the unit? </li>
                  <li>Is it or any of its parts under warranty? </li>
                  <li>
                    Was the system installed properly, and has it been properly
                    maintained?
                  </li>
                  <li>What does the air quality look like in the home? </li>
                  <li>
                    How are the air delivery systems (ductwork and vents)
                    operating?
                  </li>
                  <li>How much would it cost to change the equipment? </li>
                  <li>How energy efficient is the system?</li>
                </ul>
              </div>

              <div className="mb-14 md:mb-20">
                <h2>Get Help With Your Air Conditioning</h2>
                <p>
                  Stay cool and comfortable when the heat hits. Hire the
                  specialists at Prodigy for your repairs, new installs, and
                  preventative maintenance.
                </p>
                <ul className="list-arrows">
                  <li>AC Unit Troubleshooting & Repair</li>
                  <li>Expert Installation</li>
                  <li>Ventilation/Air Quality Check</li>
                  <li>Preventative Maintenance</li>
                </ul>
              </div>

              <h3>Get Help With Your Heating</h3>
              <p>
                Keep warm and cozy when it gets chilly. Whether it’s a repair
                you need or a new install, our heating specialists can help.
              </p>
              <ul className="list-arrows">
                <li>Heater/Furnace Troubleshooting & Repair</li>
                <li>Expert Installation</li>
                <li>Ventilation/Air Quality Check</li>
                <li>Preventative Maintenance</li>
              </ul>
            </div>

            <div className="md:col-end-13 md:col-span-4">
              <div className="bg-gray-50 border-4 border-secondary-400 rounded-md p-10 mb-16">
                <h3 className="heading-four normal-case">
                  Call The HVAC Experts
                </h3>
                <p>
                  Prodigy is your top choice for HVAC service and maintenance in
                  Cerritos and Long Beach.
                </p>
                <ButtonSolid
                  href="tel:562-413-1928"
                  text={[
                    <i className="fas fa-phone mr-2.5"></i>,
                    "562-413-1928",
                  ]}
                  className="w-full"
                />
              </div>

              <ServicesSideNav hiddenLink={8} />
            </div>
          </div>
        </div>
      </section>

      <ReputationBadges className="mb-0" />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(relativePath: { eq: "open-graph/facebook/HVAC.jpg" }) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/HVAC.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(relativePath: { eq: "4.0 HVAC/1.0 Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
export default Page;
