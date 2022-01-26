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
      ctaText="When you want to see inside the lines, your Prodigy experts can help. Get a free estimate today."
    >
      <SearchEngineOptimization
        title="Sewer Camera Inspection Services in Cerritos & Long Beach"
        description="Want to see what’s in your pipes? Call Prodigy Plumbers today to schedule a sewer camera inspection service for your Cerritos or Long Beach home or business."
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
            Sewer Camera Inspection Services
          </h1>
        </div>
      </Hero>

      <section className="pt-8 md:pt-28 mb-20 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-20 lg:gap-x-20">
            <div className="md:col-start-1 md:col-span-8">
              <div className="mb-14 md:mb-20">
                <h2>Probing The Pipes</h2>
                <p>
                  The best way to determine what’s happening inside a sewer line
                  is to send in a camera. We can get to the root of the problem
                  quickly, without digging. Let the professional plumbers at
                  Prodigy inspect your home or business—serving Cerritos and
                  Long Beach.
                </p>
              </div>

              <div className="mb-14 md:mb-20">
                <h3>What The Camera Can Find</h3>
                <p>
                  Sewer line cameras are small and flexible, allowing us to
                  easily maneuver through a sewer line to see exactly what’s
                  going on inside. Some of the most common problems we can
                  detect include:
                </p>
                <ul className="list-arrows">
                  <li>Tree root intrusion</li>
                  <li>A broken line</li>
                  <li>A misaligned line</li>
                  <li>Pipe deterioration</li>
                  <li>A collapsed line</li>
                </ul>
                <p>
                  We’ll take both pictures and video inside your sewer line. If
                  you’d like to have those for your records, we can include them
                  upon request along with our analysis.
                </p>
              </div>

              <h3>When Is It A Good Idea To Have This Done?</h3>
              <p>
                You should have your septic systems inspected about every three
                years. Here are some other times when it’s a good idea to have a
                camera inspection done:
              </p>
              <ul className="list-arrows">
                <li>
                  Your home was built more than 20 years ago, and you’ve never
                  had the lines inspected, or it’s been a very long time since
                  you’ve had it done.
                </li>
                <li>
                  You’re purchasing an older home, especially if it’s one that’s
                  surrounded by trees.
                </li>
                <li>
                  You keep having problems with drainage, especially if it
                  involves multiple drains.
                </li>
                <li>You’ve started smelling sewage from your drains.</li>
                <li>
                  There’s suddenly a new, bright green patch of grass on your
                  lawn.
                </li>
                <li>Your water pressure isn’t consistent.</li>
              </ul>
            </div>

            <div className="md:col-end-13 md:col-span-4">
              <div className="bg-gray-50 border-4 border-secondary-400 rounded-md p-10 mb-16">
                <h3 className="heading-four normal-case">
                  Call Us To Schedule A Camera Inspection
                </h3>
                <p>
                  Want to see what’s in your pipes? Give us a call to schedule a
                  sewer camera inspection service for your Cerritos or Long
                  Beach home or business.
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

              <ServicesSideNav hiddenLink={2} />
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
      relativePath: { eq: "open-graph/facebook/Sewer-Camera.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Sewer-Camera.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(relativePath: { eq: "3.2 Sewer-Camera/1.0Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
export default Page;
