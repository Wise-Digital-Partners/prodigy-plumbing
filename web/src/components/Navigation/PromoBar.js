import React from "react";
import { graphql } from "gatsby";


export const query = graphql`
  query BlogPostQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        asset {
          gatsbyImageData
          url
        }
      }
      title
      slug {
        current
      }
      seoTitle
      metaDescription
      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        name
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
const PromoBar1 = ({ headerStyle }) => {
  return (
    <div
      id="promo-bar"
      className={`relative transition-all hover:cursor-pointer  bg-[#276A7A]/90  hover:backdrop-brightness-30 bg-blend-color	
text-center ${
        headerStyle == "overlap" ? "" : "text-white"
      }`}
    >
      <a href="/prodigy-plumbing-expands-to-orange-county/" className="w-full h-full group group-hover:text-primary-500 transition-all  text-white z-[15]">
      <div className="absolute w-full mix-blend-multiply h-full  "></div>
        <div className="container  ">
          <div className="py-5">
            <p className="  m-0 p-0 text-[20px]  leading-[100%] font-extrabold text-body font-heading">
              Prodigy Plumbing is now serving Orange County! Learn more <span className="group-hover:left-3 group-hover:text-primary-500 relative transition-all ease duration-300 left-0 ">→</span>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};
export default PromoBar1;
