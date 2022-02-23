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
      ctaHeading="Schedule An Appointment"
      ctaText="Prodigy is here for you when you need a water heater fixed or have a new one to be installed. Get a free estimate today."
    >
      <SearchEngineOptimization
        title="Water Heater Repair & Installation | Cerritos & Long Beach"
        description="Need your water heater fixed? Need one installed? Call Prodigy, your top-rated water heater repair and installation specialists in Cerritos and Long Beach."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <div className="mb-5 md:hidden">
        <GatsbyImage image={data.heroDesktop.childImageSharp.gatsbyImageData} />
      </div>

      <Hero
        backgroundImages={data.heroDesktop.childImageSharp.gatsbyImageData}
        mobileRemoveBackground={true}
        padding="md:py-20"
      >
        <div className="md:bg-secondary-800/80 md:rounded-3xl md:px-14 md:py-18 md:max-w-[570px]">
          <h1 className="md:text-white mb-0">
            Water Heater Repair & Installation
          </h1>
        </div>
      </Hero>

      <section className="pt-8 md:pt-28 mb-20 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-20 lg:gap-x-20">
            <div className="md:col-start-1 md:col-span-8">
              <div className="mb-14 md:mb-20">
                <h2>We Know Water Heaters</h2>
                <p>
                  No job is too small for Prodigy’s skilled technicians serving
                  Cerritos and Long Beach. We repair and install all brands of
                  residential and commercial water heaters.
                </p>
              </div>

              <div className="mb-14 md:mb-20">
                <h3>When You Need It Fixed</h3>
                <p>
                  Is your water heater leaking or making funny noises? Is your
                  hot water gone? Is it time to flush and drain it? Our
                  experienced technicians can fix any water heater problem.
                </p>
              </div>

              <h3>When You Need One Installed</h3>
              <p>
                With electricity, gas, and water involved, you’ll want an
                experienced plumber for the job. Prodigy’s technicians can
                install your choice of a standard or tankless water heater.
              </p>
            </div>
            <div className="md:col-end-13 md:col-span-4">
              <div className="bg-gray-50 border-4 border-secondary-400 rounded-md p-10 mb-16">
                <h3 className="heading-four normal-case">
                  Call The Water Heater Experts
                </h3>
                <p>
                  Get fast, professional service in Cerritos and Long Beach from
                  Prodigy’s water heater repair and installation specialists.
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

              <ServicesSideNav hiddenLink={6} />
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
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/WaterHeater.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/WaterHeater.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(relativePath: { eq: "2.3 Water-Heater/1.0Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
export default Page;
