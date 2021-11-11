import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ReputationBadges from "../components/Repeating/ReputationBadges";
import Services from "../components/Repeating/Services";

const Page = ({ data }) => {
  const content = [
    {
      image: data.emergency.childImageSharp.gatsbyImageData,
      heading: "When It’s An Emergency",
      text: "Need a plumber in a pinch? Make Prodigy your first call in an emergency. We have a service fleet of fully equipped vehicles standing by.",
      link: "/emergency-plumbing/",
    },
    {
      image: data.galvanized.childImageSharp.gatsbyImageData,
      heading: "Water Heater Installs, Service & Repairs",
      text: "Tankless? No problem. Standard? We got this. Call Prodigy for quick repairs, service, and installation.",
      link: "/galvanized-pipe-replacement/",
    },
    {
      image: data.waterHeater.childImageSharp.gatsbyImageData,
      heading: "Galvanized Pipe Replacement",
      text: "Is it time to replace your old galvanized steel piping? If your house was built before the 1980s, it probably is.",
      link: "/water-heater-repair-installation/",
    },
    {
      image: data.commercial.childImageSharp.gatsbyImageData,
      heading: "Full-Service Commercial Plumbing",
      text: "Need a fast response from skilled and professional commercial plumbers? Prodigy has your back.",
      link: "/commercial-plumbing/",
    },
  ];

  return (
    <Layout
      ctaHeading="We’re Here For You In An Emergency"
      ctaText="Call the Prodigy pros when you need emergency plumbing service in Cerritos or Long Beach."
    >
      <SearchEngineOptimization
        title="Plumbing Services in Long Beach & Cerritos | Prodigy"
        description="Free estimates. Flat-rate pricing. 5-star service. Call Prodigy today for exceptional residential and commercial plumbing services in Cerritos and Long Beach."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-12 md:pt-16 mb-20 md:mb-24">
        <div className="container">
          <header className="max-w-3xl mb-12 md:mb-14">
            <h1>Plumbing Services</h1>
            <p className="text-secondary-400 md:text-xl">
              Free estimates. Flat-rate pricing. 5-star service. Choose Prodigy
              for exceptional residential and commercial plumbing services in
              Cerritos and Long Beach.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-y-8 md:gap-y-10 md:gap-x-5 lg:gap-x-10">
            {content.map((content, i) => {
              return (
                <AniLink
                  fade
                  to={content.link}
                  className="group grid md:grid-cols-12 rounded-xl bg-secondary-50 overflow-hidden"
                  key={i}
                >
                  <div className="md:col-start-1 md:col-span-4">
                    <GatsbyImage
                      image={content.image}
                      alt={content.heading}
                      width="200"
                      className="w-full h-full rounded-xl"
                    />
                  </div>
                  <div className="md:col-end-13 md:col-span-8 relative">
                    <div className="px-4 md:px-5 lg:px-8 pt-6 md:pt-7 pb-7 md:pb-8">
                      <h2 className="text-lg font-bold normal-case transition-colors duration-300 ease-linear mb-4">
                        {content.heading}
                      </h2>
                      <p className="mb-0 text-gray-600 font-normal">
                        {content.text}
                      </p>
                    </div>
                  </div>
                </AniLink>
              );
            })}
          </div>
        </div>
      </section>

      <ReputationBadges />
      <Services hideIndex={2} />
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
    emergency: file(
      relativePath: { eq: "2.0 Plumbing (hub)/1.0-Emergency-Plumbing.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    galvanized: file(
      relativePath: {
        eq: "2.0 Plumbing (hub)/2.0-Galvanized-Pipe-Replacement.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    waterHeater: file(
      relativePath: { eq: "2.0 Plumbing (hub)/3.0-Water-Heater.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    commercial: file(
      relativePath: { eq: "2.0 Plumbing (hub)/4.0-Commercial.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
  }
`;
export default Page;
