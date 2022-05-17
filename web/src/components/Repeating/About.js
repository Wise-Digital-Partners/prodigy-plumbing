import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import ButtonWithIcon from "../Button/ButtonWithIcon";

const About = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      team: file(relativePath: { eq: "repeating/about/team.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 1200)
        }
      }
    }
  `);

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-20 md:mb-32"}`}>
      <div className="container">
        <GatsbyImage
          image={data.team.childImageSharp.gatsbyImageData}
          className="w-full mb-8 md:mb-10 rounded-3xl"
        />
        <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20">
          <div>
            <HeadingTag>Founded On Trust, Service And Quality</HeadingTag>
          </div>
          <div>
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
