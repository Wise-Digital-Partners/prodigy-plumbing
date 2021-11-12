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
      ctaText="Prodigy is here for you when you need professional commercial plumbing service in Cerritos or Long Beach. Get a free estimate today."
    >
      <SearchEngineOptimization
        title="Commercial Plumber In Cerritos & Long Beach | Prodigy"
        description="Hire the pros. Call Prodigy, the #1 rated commercial plumber in Cerritos and Long Beach. When we arrive, you know you're about to get the best service in town."
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
            Commercial Plumber In Cerritos & Long Beach
          </h1>
        </div>
      </Hero>

      <section className="pt-8 md:pt-28 mb-20 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-20 lg:gap-x-20">
            <div className="md:col-start-1 md:col-span-8">
              <div className="mb-14 md:mb-20">
                <h2>Courteous. Clean. Trustworthy.</h2>
                <p>
                  At Prodigy, we’re professional, and we over-deliver. We love
                  serving the communities of Cerritos and Long Beach, and when
                  our commercial plumbers arrive, you know you’re about to get
                  the best service in town.
                </p>
              </div>

              <div className="mb-14 md:mb-20">
                <h3>Thorough Maintenance</h3>
                <p>
                  Properly functioning water and sewer systems are crucial in
                  any business. Toilets backing up, low water, pressure, and
                  clogged drains can cause serious problems in larger
                  facilities. Commercial drains, for example, often get a
                  beating from cleansers, fats, oils, and everything else that
                  ends up in them.
                </p>
                <p>
                  That’s why at Prodigy, we focus heavily on preventative
                  maintenance to keep the little problems from escalating into
                  bigger ones. We’ll ensure you’re fully operational at all
                  times.
                </p>
              </div>

              <h3>Expert Service & Repair Technicians</h3>
              <p>
                When pipes get clogged, it might be time for hydro jetting to
                clear them out. Or when they get too old, time to replace them.
                Bringing in Prodigy’s team of licensed technicians is the smart
                choice for your commercial plumbing solutions.
              </p>
            </div>
            <div className="md:col-end-13 md:col-span-4">
              <div className="bg-gray-50 border-4 border-secondary-400 rounded-md p-10 mb-16">
                <h3 className="heading-four normal-case">
                  Call The Commercial Plumbing Experts
                </h3>
                <p>
                  Get top-rated service in Cerritos and Long Beach from the
                  licensed pros at Prodigy. Our team and fully equipped fleet
                  can handle all your commercial plumbing needs.
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
      relativePath: { eq: "2.4 Commercial-Plumbing/1.0 Hero.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
export default Page;
