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
      ctaText="Prodigy is here for you when you need expert drain cleaning and repair service in Cerritos and Long Beach. Get a free estimate today."
    >
      <SearchEngineOptimization
        title="Drain Cleaning & Repair Services in Cerritos & Long Beach"
        description="Make Prodigy your first call for top-rated drain cleaning and repair services in Cerritos and Long Beach. Book an appointment today!"
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
        <div className="md:bg-secondary-800/80 md:rounded-3xl md:px-14 md:py-18 md:max-w-[570px]">
          <h1 className="md:text-white mb-0">
            Drain Cleaning & Repair Services
          </h1>
        </div>
      </Hero>

      <section className="pt-8 md:pt-28 mb-20 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-20 lg:gap-x-20">
            <div className="md:col-start-1 md:col-span-8">
              <div className="mb-14 md:mb-20">
                <h2>On-Site Estimates. Competitive Pricing.</h2>
                <p>
                  Make Prodigy your first call for drain cleaning and repair
                  services in Cerritos and Long Beach. When we arrive, you can
                  expect a plumber that’s polite, experienced, and trustworthy.
                  Plus, you’ll get a fast on-site estimate at a competitive
                  price.
                </p>
              </div>

              <h3>Prodigy: The Smart Choice</h3>
              <p>
                We take pride in our work, and it shows in our consistent 5-star
                ratings. Whether it’s a deep clean or an entire pipe
                reconstruction, our team of qualified and talented plumbing
                technicians can do the job. Our services include:
              </p>

              <ul className="list-arrows">
                <li>Upfront, flat-rate pricing</li>
                <li>Guaranteed workmanship</li>
                <li>Bonded and insured team</li>
                <li>Licensed plumbing experts</li>
                <li>Friendly professionals</li>
                <li>Locally owned and operated</li>
              </ul>
            </div>

            <div className="md:col-end-13 md:col-span-4">
              <div className="bg-gray-50 border-4 border-secondary-400 rounded-md p-10 mb-16">
                <h3 className="heading-four normal-case">Call The Experts</h3>
                <p>
                  Call us today to schedule an appointment at your home or
                  business in Cerritos or Long Beach.
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

              <ServicesSideNav hiddenLink={7} />
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
      relativePath: { eq: "3.5 Drains _ Leak Repairs/1.0 Hero.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
export default Page;
