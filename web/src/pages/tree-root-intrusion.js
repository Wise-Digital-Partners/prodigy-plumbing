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
      ctaText="Prodigy is here for you when you need expert tree root intrusion service in Cerritos and Long Beach. Get a free estimate today."
    >
      <SearchEngineOptimization
        title="Tree Root Intrusion Services in Cerritos & Long Beach"
        description="Call the Prodigy specialists for expert tree root intrusion service in Cerritos and Long Beach. Get a free estimate today. Ask us about our military discount!"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <div className="mb-5 md:hidden">
        <GatsbyImage image={data.heroDesktop.childImageSharp.gatsbyImageData} />
      </div>

      <Hero
        backgroundImages={data.heroDesktop.childImageSharp.gatsbyImageData}
        mobileRemoveBackground={true}
        backgroundPosition="50% 85%"
        padding="md:py-20"
      >
        <div className="md:bg-secondary-800/80 md:rounded-3xl md:px-14 md:py-18 md:max-w-[570px]">
          <h1 className="md:text-white mb-0">Tree Root Intrusion</h1>
        </div>
      </Hero>

      <section className="pt-8 md:pt-28 mb-20 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-20 lg:gap-x-20">
            <div className="md:col-start-1 md:col-span-8">
              <div className="mb-14 md:mb-20">
                <h2>When Roots Break Through</h2>
                <p>
                  Tree roots inside a sewer line are never good—they can cause a
                  lot of damage. Tree root intrusion typically happens in clay
                  or concrete sewer lines, and also in dry climates. At Prodigy,
                  we can detect and provide you with solutions if it’s happening
                  at your home or business in Cerritos or Long Beach.
                </p>
              </div>

              <div className="mb-14 md:mb-20">
                <h3>The Damage They Cause</h3>
                <p>
                  A sewer line collapse is the biggest danger when tree roots
                  invade sewer lines. It’s especially a concern if the pipes are
                  made of weak material.
                </p>
              </div>

              <div className="mb-14 md:mb-20">
                <h3>How To Prevent Tree Root Intrusion</h3>
                <p>Here are some helpful tips from Prodigy’s experts:</p>
                <ul className="list-arrows">
                  <li>
                    Have trees on your property that are near sewer lines? Place
                    a barrier between the two (wood, metal, or a chemical
                    barrier that inhibits root growth).
                  </li>
                  <li>
                    Are you planning on planting new trees? Plant them as far
                    away as you can from sewer lines.
                  </li>
                  <li>
                    Thwart major issues by making it a priority to schedule
                    regular maintenance and inspections (every three years is
                    recommended).
                  </li>
                </ul>
              </div>

              <h3>When Should I Call The Pros?</h3>
              <p>
                Two words—don’t wait. If you’re noticing problems, the longer
                you wait to call a professional, the worse the situation can
                become. If we can find a tree root intrusion early on when it’s
                just begun, it’s going to be much easier to address and correct.
                Wait too long, and you’ll end up with the worst-case
                scenario—damage so bad that part or all of the sewer line will
                need to be replaced.
              </p>
            </div>

            <div className="md:col-end-13 md:col-span-4">
              <div className="bg-gray-50 border-4 border-secondary-400 rounded-md p-10 mb-16">
                <h3 className="heading-four normal-case">Call The Experts</h3>
                <p>
                  Get fast, professional service in Cerritos and Long Beach from
                  Prodigy’s plumbing specialists.
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

              <ServicesSideNav hiddenLink={5} />
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
      relativePath: { eq: "open-graph/facebook/Global.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Global.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: { eq: "3.4 Tree-Root Removal/1.0Hero.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
export default Page;
