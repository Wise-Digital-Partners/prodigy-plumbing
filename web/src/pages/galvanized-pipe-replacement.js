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
      ctaHeading="Get Your Pipes Inspected"
      ctaText="Prodigy can inspect your old galvanized pipes and let you know if it’s time to replace them. Get a free estimate today."
    >
      <SearchEngineOptimization
        title="Galvanized Pipe Replacement in Cerritos & Long Beach"
        description="Do you own an older home in Cerritos or Long Beach—pre-1980s?. If so, it may be time for galvanized pipe replacement. Call us today for a free estimate."
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
          <h1 className="md:text-white mb-0">Galvanized Pipe Replacement</h1>
        </div>
      </Hero>

      <section className="pt-8 md:pt-28 mb-20 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-20 lg:gap-x-20">
            <div className="md:col-start-1 md:col-span-8">
              <div className="mb-14 md:mb-20">
                <h2>Out With The Old</h2>
                <p>
                  Was your home in Cerritos or Long Beach built before the
                  1980s? If so, you likely have galvanized steel piping.
                  Although the pipes are dipped in molten zinc to help prevent
                  rust, they can corrode over time. As a result, you can end up
                  with leaks or a build-up that restricts water flow and can
                  make it unfit for drinking.
                </p>
              </div>

              <div className="mb-14 md:mb-20">
                <h3>How Long Does Galvanized Piping Last?</h3>
                <p>
                  Galvanized steel pipes tend to last between 25 and 50 years,
                  depending on whether soft or hard water runs through them.
                </p>
              </div>

              <h3>It’s Time. What Are My Options?</h3>
              <p>
                All galvanized steel pipes eventually cause problems as they
                age. Once they’ve outlasted their lifespan, it’s time to
                consider replacing them. Prodigy can evaluate and re-repipe your
                home to give you a new, more efficient, and safer water system.
                Some popular galvanized pipe replacement options include:
              </p>
              <ul className="list-arrows">
                <li>
                  Copper: Lightweight, strong, durable, and resistant to
                  corrosion
                </li>
                <li>
                  Flexible Plastic Hose (PEX): One of the newest advances in
                  plastic piping
                </li>
                <li>
                  Chlorinated Polyvinyl Chloride (CPVC) piping that offers great
                  heat resistance
                </li>
              </ul>
            </div>
            <div className="md:col-end-13 md:col-span-4">
              <div className="bg-gray-50 border-4 border-secondary-400 rounded-md p-10 mb-16">
                <h3 className="heading-four normal-case">
                  Call The Pipe Experts
                </h3>
                <p>
                  Prodigy’s specialists will evaluate your old pipes in your
                  Cerritos or Long Beach home and go over your options if they
                  need to be replaced.
                </p>
                <ButtonSolid
                  href="tel:562-383-0098"
                  text={[
                    <i className="fas fa-phone mr-2.5"></i>,
                    "562-383-0098",
                  ]}
                  className="w-full"
                />
              </div>

              <ServicesSideNav hiddenLink={3} />
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
      relativePath: { eq: "open-graph/facebook/Garlvanized-Pipe.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Garlvanized-Pipe.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(relativePath: { eq: "2.2 Galvanized-Pipe/1.0Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
export default Page;
