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
      ctaHeading="Call The Drain & Sewer Experts"
      ctaText="Prodigy is here for you when you have a clogged drain or sewer line or have questions about preventative maintenance. Get a free estimate today for drain and sewer services."
    >
      <SearchEngineOptimization
        title="Emergency Plumbing in Long Beach & LA County | Prodigy"
        description="Get help FAST from Prodigy's expert plumbers. Burst pipe? No problem. Major leak? We're on our way. Call us for emergency plumbing in Long Beach & LA County."
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
            Emergency Plumbing in Long Beach & Los Angeles County
          </h1>
        </div>
      </Hero>

      <section className="pt-8 md:pt-28 mb-20 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-20 lg:gap-x-20">
            <div className="md:col-start-1 md:col-span-8">
              <div className="mb-10 md:mb-12">
                <h2>Need Urgent Help?</h2>
                <p>
                  When you need help FAST, our expert team can help. Whether
                  it’s a burst pipe, major leak, or overflowing toilet, our
                  Prodigy specialists will troubleshoot the problem and fix it
                  immediately.
                </p>
                <p>
                  Call us—we’ll dispatch a technician right away. The Prodigy
                  Service Fleet is fully equipped and standing by to respond to
                  emergencies.
                </p>
              </div>
              <div className="mb-8 md:mb-10">
                <h3 className="text-lg normal-case font-bold">
                  Business Hours
                </h3>
                <p>
                  Need emergency service during the weekdays? Call us Monday
                  through Friday (from 8 a.m. to 5 p.m.), and we’ll send a
                  plumbing specialist right away.
                </p>
              </div>
              <h3 className="text-lg normal-case font-bold">After Hours</h3>
              <p>
                Plumbing emergencies can happen anytime—nights, weekends, and
                holidays. That’s why at Prodigy, we have an Emergency Support
                Team if you need us after hours.
              </p>
            </div>
            <div className="md:col-end-13 md:col-span-4">
              <div className="bg-gray-50 border-4 border-secondary-400 rounded-md p-10 mb-16">
                <h3 className="heading-four normal-case">
                  Keep Calm And Call Prodigy
                </h3>
                <p>
                  Get same-day emergency service from the #1 rated plumber in
                  Long Beach and Los Angeles County.
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

              <ServicesSideNav hiddenLink={0} />
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
      relativePath: { eq: "open-graph/facebook/Emergency.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Emergency.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: { eq: "2.1 Emergency-Plumbing/1.0Hero.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
export default Page;
