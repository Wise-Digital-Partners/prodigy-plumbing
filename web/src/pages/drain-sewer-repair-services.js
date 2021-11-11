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
      image: data.hydroJetting.childImageSharp.gatsbyImageData,
      heading: "High-Pressure Hydro Jetting",
      text: "Got a serious blockage? Prodigy’s technicians can deploy high-pressure water jets to blast out debris.",
      link: "/hydro-jetting-services/",
    },
    {
      image: data.sewerCamera.childImageSharp.gatsbyImageData,
      heading: "No Dig Trenchless Pipe Repair",
      text: "No digging. No destruction. Save time, money, and stress with Prodigy’s trenchless sewer repair and replacement.",
      link: "/trenchless-sewer-repair-replacement/",
    },
    {
      image: data.trenchless.childImageSharp.gatsbyImageData,
      heading: "Clog-Free Drains & Leak Repairs",
      text: "We'll clean out the pipes and repair the leaks to make sure your drains are working properly.",
      link: "/drain-cleaning-repair-services/",
    },
    {
      image: data.treeRemoval.childImageSharp.gatsbyImageData,
      heading: "Sewer Line Camera Inspection",
      text: "We can get a direct view of what’s happening inside your sewer lines without digging.",
      link: "/sewer-camera-inspection-services/",
    },
    {
      image: data.repairs.childImageSharp.gatsbyImageData,
      heading: "Tree Root Removal & Repair",
      text: "Tree root intrusion can cause a lot of damage to sewer lines. Our specialists can help.",
      link: "/tree-root-intrusion/",
    },
  ];

  return (
    <Layout
      ctaHeading="Call The Drain & Sewer Experts"
      ctaText="Prodigy is here for you when you have a clogged drain or sewer line or have questions about preventative maintenance. Get a free estimate today for drain and sewer services."
    >
      <SearchEngineOptimization
        title="Drain & Sewer Repair Services in Cerritos & Long Beach"
        description="When you want the pros, call the drain and sewer service experts at Prodigy. Our team will keep your lines in working order. Serving Cerritos and Long Beach."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-12 md:pt-16 mb-20 md:mb-24">
        <div className="container">
          <header className="max-w-3xl mb-12 md:mb-14">
            <h1>Drain & Sewer Services</h1>
            <p className="text-secondary-400 md:text-xl">
              Prodigy Plumbing is the #1 choice in Cerritos and Long Beach to
              clear out clogs, perform repairs, and help keep your drains and
              sewer lines in working order.
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
      <Services hideIndex={0} />
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
    hydroJetting: file(
      relativePath: { eq: "3.0 Sewer_Drain-(hub)/1.0-Hydro-Jetting.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    sewerCamera: file(
      relativePath: { eq: "3.0 Sewer_Drain-(hub)/2.0-Sewer-Camera.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    trenchless: file(
      relativePath: {
        eq: "3.0 Sewer_Drain-(hub)/3.0-No-Dig-Trenchless-Sewer.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    treeRemoval: file(
      relativePath: { eq: "3.0 Sewer_Drain-(hub)/4.0-Tree-Root-Removal.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    repairs: file(
      relativePath: {
        eq: "3.0 Sewer_Drain-(hub)/5.0-Drains _ Leak Repairs.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
  }
`;
export default Page;
