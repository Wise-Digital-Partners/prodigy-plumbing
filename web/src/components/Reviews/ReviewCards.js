import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { mapEdgesToNodes } from "../../lib/helpers";

const ReviewCards = () => {
  const data = useStaticQuery(graphql`
    {

      google: file(relativePath: { eq: "reviews/google.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 85)
        }
      }
      facebook: file(relativePath: { eq: "reviews/facebook.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 104)
        }
      }
      defaultProfilePicture: file(
        relativePath: { eq: "reviews/user.svg" }
      ) {
        publicURL
      }
            yelp: file(relativePath: { eq: "reviews/yelp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 104)
        }
      }
      fivestars: file(relativePath: { eq: "reviews/five-stars.svg" }) {
        publicURL
      }
      reviews: allGoogleSheet1Sheet(sort: { fields: date, order: DESC }) {
        edges {
          node {
            date
            profilePicture
            firstName
            lastName
            review
            platform
          }
        }
      }
    }
  `);

  const reviewNodes = (data || {}).reviews ? mapEdgesToNodes(data.reviews) : [];

  return (
    <div className="grid grid-cols-1   md:grid-cols-2 gap-x-10 justify-items-between">
      {reviewNodes.map((review, i) => {
        return (

            <div className="">
              <div
                className="mb-6 w-full break-inside-avoid rounded-lg bg-white py-8 px-6 shadow-4xl md:mb-10 md:p-8"
                key={i}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {review.profilePicture && review.profilePicture.asset ? (
                      <div className="mb-2 inline-flex justify-center rounded-full border border-white">
                        <GatsbyImage
                          image={review.profilePicture.asset.gatsbyImageData}
                          alt={`${review.firstName} profile headshot`}
                          loading="lazy"
                          width={40}
                          height={40}
                          className="z-0 rounded-full"
                        />
                      </div>
                    ) : (
                      <img
                        src={data.defaultProfilePicture.publicURL}
                        width="40"
                        alt="Default profile headshot"
                      />
                    )}

                    <div>
                      <span className="pl-2 font-bold text-typography-heading">
                        {`${review.firstName} ${review.lastName}`}
                      </span>
                    </div>
                  </div>
                </div>
                <blockquote>
                  <q className="mb-6 block font-normal before:hidden">
                    {review.review}
                  </q>
                </blockquote>

                {review.platform === "Google" && (
                  <GatsbyImage
                    image={data.google.childImageSharp.gatsbyImageData}
                    loading="lazy"
                  />
                )}

                {review.platform === "Yelp" && (
                  <GatsbyImage
                    image={data.yelp.childImageSharp.gatsbyImageData}
                    loading="lazy"
                  />
                )}

                {review.platform === "Facebook" && (
                  <GatsbyImage
                    image={data.facebook.childImageSharp.gatsbyImageData}
                    loading="lazy"
                  />
                )}
              </div>
            </div>
        );
      })}
    </div>
  );
};

export default ReviewCards;
