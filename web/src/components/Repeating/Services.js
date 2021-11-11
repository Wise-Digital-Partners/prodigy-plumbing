import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import ButtonWithIcon from "../Button/ButtonWithIcon";

const ValueProps = ({ className, headingLevel, heading, hideIndex }) => {
  const data = useStaticQuery(graphql`
    {
      plumbing: file(
        relativePath: { eq: "repeating/services/1.0-Plumbing.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 581)
        }
      }
      drainSewers: file(
        relativePath: { eq: "repeating/services/2.0-Sewer.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 581)
        }
      }
      hvac: file(relativePath: { eq: "repeating/services/3.0-HVAC.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 581)
        }
      }
    }
  `);

  const content = [
    {
      image: data.drainSewers.childImageSharp.gatsbyImageData,
      heading: "Your Drains & Sewer",
      text: "Got a backed-up drain or an overflowing sewer line? Need some routine maintenance? Prodigy can help.",
      link: "/drain-sewer-repair-services/",
    },
    {
      image: data.hvac.childImageSharp.gatsbyImageData,
      heading: "Your Cooling & Heating",
      text: "Are your heating or air conditioning units on the fritz? Do they need upkeep? We’re also experts in HVAC.",
      link: "/hvac-cerritos-long-beach/",
    },
    {
      image: data.plumbing.childImageSharp.gatsbyImageData,
      heading: "Your Plumbing",
      text: "Faucets, sinks, toilets—you name it, we can fix it. We also perform regular preventative maintenance.",
      link: "/plumbing-services/",
    },
  ];

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-20 md:mb-24"}`}>
      <div className="container">
        <header className="mb-10 md:mb-12">
          <HeadingTag>{heading || "We Can Also Help You With"}</HeadingTag>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-10">
          {content.map((content, i) => {
            return (
              i !== hideIndex && (
                <AniLink fade to={content.link} className="group" key={i}>
                  <div className="relative overflow-hidden md:rounded-3xl mb-3">
                    <GatsbyImage image={content.image} className="w-full" />
                    <div className="bg-secondary-800/40 absolute bottom-0 left-0 w-full py-3 px-8">
                      <div className="bg-secondary-800 w-6 group-hover:w-full h-full absolute top-0 left-0 transition-all duration-700 ease-in-out"></div>
                      <span className="relative font-heading font-black text-white text-xl">
                        {content.heading}
                      </span>
                    </div>
                  </div>
                  <p className="mb-5">{content.text}</p>

                  <ButtonWithIcon href={content.link} text="Learn More" />
                </AniLink>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
