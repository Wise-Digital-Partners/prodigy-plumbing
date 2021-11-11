import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const InstagramFeed = ({ className, headingLevel }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     instagram: allInstaNode(
  //       sort: { fields: timestamp, order: DESC }
  //       limit: 4
  //     ) {
  //       edges {
  //         node {
  //           id
  //           likes
  //           comments
  //           mediaType
  //           localFile {
  //             childImageSharp {
  //               gatsbyImageData(layout: CONSTRAINED, width: 360)
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  const HeadingTag = headingLevel || "h3";

  return (
    <section className={`${className || "mb-16 md:mb-20"}`}>
      <div className="container">
        <header className="mb-10 md:mb-12 text-center">
          <HeadingTag>Follow Us On Instagram</HeadingTag>
        </header>

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {data.instagram.edges.map(({ node }) => {
            const { id, likes, mediaType, comments, localFile } = node;
            return (
              <a
                className="group relative overflow-hidden cursor-pointer"
                href={`https://www.instagram.com/p/${id}/`}
                target="_blank"
                rel="noopener noreferrer"
                key={id}
              >
                <div className="bg-black/70 absolute left-0 top-0 right-0 bottom-0 opacity-0 group-hover:opacity-90 z-10 transition-all duration-300 ease-linear"></div>
                {mediaType === "CAROUSEL_ALBUM" && (
                  <div className="absolute m-auto inset-0 flex justify-center items-center z-20">
                    <i className="fas fa-play text-6xl text-white"></i>
                  </div>
                )}
                <GatsbyImage
                  className="h-full"
                  image={localFile.childImageSharp.gatsbyImageData}
                  alt={`Avalon Laser Instagram post ${id}`}
                />
                <div className="absolute flex items-center justify-center z-20 left-0 top-0 right-0 bottom-0 text-white opacity-0 group-hover:opacity-100 transform translate-y-12 group-hover:translate-y-0 transition-all duration-300 ease-linear">
                  <span className="text-xl mx-4">
                    <i className="fas fa-heart"></i> {likes == null ? 0 : likes}
                  </span>
                  <span className="text-xl mx-4">
                    <i className="fas fa-comment"></i>{" "}
                    {comments == null ? 0 : comments}
                  </span>
                </div>
              </a>
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default InstagramFeed;
