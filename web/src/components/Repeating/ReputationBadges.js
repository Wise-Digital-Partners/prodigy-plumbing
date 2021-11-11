import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { BgImage } from "gbimage-bridge";

const ReputationBadges = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      backgroundPattern: file(
        relativePath: { eq: "global/Tile Background.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 122)
        }
      }
      google: file(
        relativePath: { eq: "repeating/Reputation Badges/Google.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 72)
        }
      }
      yelp: file(relativePath: { eq: "repeating/Reputation Badges/Yelp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 65)
        }
      }
      facebook: file(
        relativePath: { eq: "repeating/Reputation Badges/Facebook.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 116)
        }
      }
      angiesList: file(
        relativePath: { eq: "repeating/Reputation Badges/Angies List.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 135)
        }
      }
      stars: file(
        relativePath: { eq: "repeating/Reputation Badges/stars.svg" }
      ) {
        publicURL
      }
    }
  `);

  const content = [
    {
      logo: data.google.childImageSharp.gatsbyImageData,
      logoWidth: "max-w-[52px] md:max-w-[72px]",
      averageRating: "5.0",
      reviewCount: "500+",
    },
    {
      logo: data.yelp.childImageSharp.gatsbyImageData,
      logoWidth: "max-w-[45px] md:max-w-[65px]",
      averageRating: "5.0",
      reviewCount: "1,000+",
    },
    {
      logo: data.facebook.childImageSharp.gatsbyImageData,
      logoWidth: "max-w-[65px] md:max-w-[116px]",
      averageRating: "5.0",
      reviewCount: "50+",
    },
    {
      logo: data.angiesList.childImageSharp.gatsbyImageData,
      logoWidth: "max-w-[70px] md:max-w-[135px]",
      averageRating: "5.0",
      reviewCount: "9",
    },
  ];

  return (
    <BgImage
      image={data.backgroundPattern.childImageSharp.gatsbyImageData}
      backgroundSize="contain"
      style={{
        backgroundSize: "122px",
        backgroundRepeat: "repeat",
      }}
      className={`bg-secondary-400 py-8 md:py-12 ${
        className || "mb-20 md:mb-32"
      }`}
    >
      <div className="container">
        <div className="grid grid-cols-4 gap-x-2 lg:gap-x-6 xl:gap-x-12 lg:text-center bg-white lg:bg-transparent shadow-3xl lg:shadow-none rounded lg:rounded-none px-2 py-4 lg:p-0">
          {content.map((content, i) => {
            return (
              <div
                key={i}
                className="lg:bg-white lg:shadow-3xl lg:rounded lg:pt-5 lg:pb-6 lg:px-4 xl:p-6"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between items-center mb-1 lg:mb-2">
                  <div className="text-gray-900 text-3xl lg:text-6xl leading-none font-extrabold order-2 lg:order-1">
                    {content.averageRating}
                  </div>
                  <div className="order-1 lg:order-2">
                    <GatsbyImage
                      image={content.logo}
                      className={`${content.logoWidth}`}
                    />
                  </div>
                </div>

                <div className="text-center lg:text-right flex flex-col lg:flex-row lg:justify-between lg:items-center">
                  <img
                    src={data.stars.publicURL}
                    alt="5 stars"
                    className="w-14 md:w-auto mx-auto mb-1 lg:mb-0"
                  />

                  <div className="text-black text-2xs md:text-xs w-full">
                    {content.reviewCount} Reviews
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </BgImage>
  );
};

export default ReputationBadges;
