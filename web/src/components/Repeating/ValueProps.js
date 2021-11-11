import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";

const ValueProps = ({ className, headingLevel, heading }) => {
  const data = useStaticQuery(graphql`
    {
      icon1: file(
        relativePath: { eq: "repeating/value-props/1.0-Rating.svg" }
      ) {
        publicURL
      }
      icon2: file(relativePath: { eq: "repeating/value-props/Icon2.svg" }) {
        publicURL
      }
      icon3: file(relativePath: { eq: "repeating/value-props/Icon3.svg" }) {
        publicURL
      }
    }
  `);

  const content = [
    {
      icon: data.icon1.publicURL,
      heading: "Highly Rated",
      text: "Prodigy is a #1 rated plumber on Yelp, and we consistently earn 5-star ratings across all review sites.",
    },
    {
      icon: data.icon2.publicURL,
      heading: "Exceed Expectations",
      text: "At Prodigy, we go above and beyond. Our dedicated team is committed to providing you with superior service.",
    },
    {
      icon: data.icon3.publicURL,
      heading: "Competitive Pricing",
      text: "Most of our services are flat-rate. We also offer free on-site estimates, so there are no surprises.",
    },
  ];

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-20 md:mb-32"}`}>
      <div className="container">
        <header className="text-center mb-14 md:mb-10">
          <HeadingTag>{heading || "Why Prodigy Is #1"}</HeadingTag>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 md:gap-x-10 text-center">
          {content.map((content, i) => {
            return (
              <div key={i}>
                <img
                  src={content.icon}
                  alt={content.heading}
                  className="mx-auto mb-2.5"
                />
                <div>
                  <h3 className="heading-five mb-5">{content.heading}</h3>
                  <p className="mb-0">{content.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
