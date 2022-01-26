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
      ctaText="Prodigy is here for you when you need expert hydro jetting services in Cerritos or Long Beach. Get a free estimate today."
    >
      <SearchEngineOptimization
        title="Hydro Jetting Services in Cerritos & Long Beach | Prodigy"
        description="Call Prodigy to blast out those big pipe blockages. We're your #1 rated plumbing experts, and we specialize in hydro jetting services in Cerritos and Long Beach."
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
            Hydro Jetting Services In Cerritos & Long Beach
          </h1>
        </div>
      </Hero>

      <section className="pt-8 md:pt-28 mb-20 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-20 lg:gap-x-20">
            <div className="md:col-start-1 md:col-span-8">
              <div className="mb-14 md:mb-20">
                <h2>Blast Out The Blockage</h2>
                <p>
                  We can clear tough blockages and build-up from pipes with
                  hydro jetting. It’s a modern plumbing method that uses a
                  high-pressure stream of water to blast out the lines. Hydro
                  jetting can help restore pipes to like-new condition.
                </p>
              </div>

              <div className="mb-14 md:mb-20">
                <h3>Water Only. No Chemicals Needed.</h3>
                <p>
                  It’s highly effective and easy on the environment. Hydro
                  jetting uses water only, which is often reused.
                </p>
              </div>

              <h3>When A Good Hydro Jetting Is In Order</h3>
              <p>
                Hydro jetting is highly effective in clearing stubborn build-up
                or blockages in interior and exterior lines running through your
                residential home and property.
              </p>
              <p>
                It’s also great for commercial properties that typically have
                recurring build-ups, such as schools, food service, hospitality,
                and healthcare facilities.
              </p>
              <p>
                Serious build-up can lead to chronic flooding and property
                damage. Hydro jetting can clean the inside walls of a pipe or
                drain and flush the system of:
              </p>
              <ul className="list-arrows">
                <li>Grease</li>
                <li>Sludge</li>
                <li>Debris</li>
                <li>Roots</li>
                <li>Hardened Scale</li>
              </ul>
            </div>
            <div className="md:col-end-13 md:col-span-4">
              <div className="bg-gray-50 border-4 border-secondary-400 rounded-md p-10 mb-16">
                <h3 className="heading-four normal-case">
                  Call The Hydro Jet Experts
                </h3>
                <p>
                  At Prodigy, we specialize in hydro jetting using
                  state-of-the-art equipment. Call us today if you’re interested
                  in the service. We’ll evaluate your lines and let you know if
                  hydro jetting is a good option.
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

              <ServicesSideNav hiddenLink={1} />
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
      relativePath: { eq: "open-graph/facebook/Hydro-Jetting.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Hydro-Jetting.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(relativePath: { eq: "3.1 Hydro-Jetting/1.0Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
export default Page;
