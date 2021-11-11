import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import ButtonWithIcon from "../Button/ButtonWithIcon";

const About = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      team: file(relativePath: { eq: "repeating/about/team.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 560)
        }
      }
    }
  `);

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-20 md:mb-32"}`}>
      <div className="container">
        <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-16 gap-y-12 md:gap-y-8 items-center">
          <AniLink
            fade
            to="/about-us/"
            className="overflow-hidden md:rounded-3xl relative group -mx-4 md:mx-0"
          >
            <GatsbyImage
              image={data.team.childImageSharp.gatsbyImageData}
              className="w-full"
            />
            <div className="bg-secondary-800/40 absolute bottom-0 left-0 w-full py-3 px-8">
              <div className="bg-secondary-800 w-6 group-hover:w-full h-full absolute top-0 left-0 transition-all duration-700 ease-in-out"></div>
              <span className="relative font-heading font-black text-white text-xl">
                Meet The Crew
              </span>
            </div>
          </AniLink>
          <div>
            <HeadingTag>Founded On Trust, Service And Quality</HeadingTag>
            <p>
              At Prodigy, we love what we do, and we believe in it. It’s not
              just plumbing to us, but a philosophy applied to every area of our
              lives. We value the quality of our work and the honest approach we
              take with every job.
            </p>
            <ButtonWithIcon href="/about-us/" text="Meet the Crew" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
