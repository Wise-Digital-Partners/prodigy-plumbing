import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { getBlogUrl } from "../../lib/helpers";
// import PortableText from "./portableText";
// import { format } from "date-fns";

function BlogPostPreview(props) {
  return (
    <AniLink
      fade
      to={getBlogUrl(props.publishedAt, props.slug.current)}
      className="no-underline"
    >
      <div className="group bg-secondary-50 rounded-xl pt-4 px-4 pb-12">
        <div className="overflow-hidden rounded-md mb-3.5">
          {props.mainImage && props.mainImage.asset && (
            <GatsbyImage
              image={props.mainImage.asset.gatsbyImageData}
              alt={props.mainImage.alt}
            />
          )}
        </div>
        <div>
          {props.categories && (
            <>
              {props.categories.slice(0, 1).map((category) => (
                <div
                  className="text-secondary-400 font-black text-sm uppercase mb-1"
                  key={category._id}
                >
                  {category.title}
                </div>
              ))}
            </>
          )}
          <p className="font-heading text-xl text-secondary-800 font-semibold mb-0">
            {props.title}
          </p>
          {/* {props._rawExcerpt && (
          <div>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )} */}
          {/* <div>{format(new Date(props.publishedAt), "MMMM Mo, yyyy")}</div> */}
        </div>
      </div>
    </AniLink>
  );
}

export default BlogPostPreview;
