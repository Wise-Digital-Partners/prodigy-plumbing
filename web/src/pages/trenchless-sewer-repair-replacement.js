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
      ctaText="Prodigy is here for you when you need expert trenchless sewer repair or replacement in Long Beach and Los Angeles County. Get a free estimate today."
    >
      <SearchEngineOptimization
        title="Trenchless Sewer Repair & Replacement | Prodigy Plumbing"
        description="Say goodbye to a damaged lawn and demolished walls and floors. Get a free estimate for trenchless sewer repair and replacement in Long Beach & LA County."
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
            Trenchless Sewer Repair & Replacement
          </h1>
        </div>
      </Hero>

      <section className="pt-8 md:pt-28 mb-20 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-20 lg:gap-x-20">
            <div className="md:col-start-1 md:col-span-8">
              <div className="mb-14 md:mb-20">
                <h2>Far Less Digging. Much Less Damage.</h2>
                <p>
                  Say goodbye to the stress of a damaged lawn, demolished walls
                  and floors, and neighborhood street closures. Trenchless sewer
                  repair and replacement is cleaner, quicker, and more
                  cost-effective. Repairs typically take only a few hours, and
                  we can install a new sewer line in just a day or two. Prodigy
                  proudly serves the communities of Long Beach and Los Angeles
                  County.
                </p>
              </div>

              <div className="mb-14 md:mb-20">
                <h3>How Trenchless Works</h3>
                <p>
                  We start by digging access point holes to reach the sewer
                  line. Typically, the access points are located under your
                  basement floor (where wastewater and sewage leave the
                  property) and underneath your yard (at the beginning of the
                  sewer line).
                </p>
                <p>
                  Once we have access, we use special plumbing tools to perform
                  repairs or work on a replacement. Sometimes we’ll need to dig
                  additional access points to replace damaged lines.
                </p>
              </div>

              <div className="mb-14 md:mb-20">
                <h3>Method 1: Trenchless Pipe Bursting</h3>
                <p>
                  Pipe bursting is a process where we use special tools to break
                  apart the existing sewer line to install a new one in its
                  place. We can do this to make a single repair or to do a
                  complete replacement. It’s one of the most efficient methods
                  to install a new sewer line.
                </p>
                <p>
                  At Prodigy Plumbing, we use a special material known as
                  cross-linked polyethylene (PEX). PEX pipes are designed to
                  withstand the elements and resist corrosion, all while
                  maintaining their flexibility. The life expectancy is almost
                  50 years.
                </p>
                <p>
                  Also, since pipe bursting doesn’t use any harmful chemicals,
                  it’s considered an environmentally friendly form of trenchless
                  sewer repair.
                </p>
              </div>

              <div className="mb-14 md:mb-20">
                <h3>Method 2: Trenchless Pipe Lining</h3>
                <p>
                  If the current sewer line still retains its structural
                  integrity, we can line it to perform a repair. We use a
                  flexible tube containing an epoxy resin, insert it into a
                  small hole, and inflate the tube.
                </p>
                <p>
                  This method lines the old sewer line with the epoxy resin
                  (also called cured-in-place-pipe, or CIPP). The CIPP lining
                  dries inside the pipe, and you’re good to go.
                </p>
              </div>

              <h2>Inside The Process</h2>

              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/bJxsX-Pu0ew"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="max-w-lg mb-6"
              ></iframe>
            </div>

            <div className="md:col-end-13 md:col-span-4">
              <div className="bg-gray-50 border-4 border-secondary-400 rounded-md p-10 mb-16">
                <h3 className="heading-four normal-case">Call The Experts</h3>
                <p>
                  Have questions? Want to schedule an inspection? Prodigy’s
                  specialists are standing by.
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

              <ServicesSideNav hiddenLink={4} />
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
      relativePath: { eq: "open-graph/facebook/Trenchless.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Trenchless.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: { eq: "3.3 No-Dig Trenchless Sewer/1.0Hero.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
export default Page;
