import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./AuthorList";
import PortableText from "./portableText";
import styled from "@emotion/styled";
import tw from "twin.macro";

import RecentBlogPosts from "../Repeating/RecentBlogPosts";
import Newsletter from "../Form/Newsletter";

const StyledContent = styled.div`
  /* p,
  span,
  li {
    ${tw``}
  } */
  ul {
    ${tw`list-disc pl-7 mb-6 flex flex-col space-y-0.5`}
  }
`;

function BlogPost(props) {
  const {
    _rawBody,
    authors,
    // categories,
    title,
    mainImage,
    publishedAt,
  } = props;
  return (
    <article className="pt-12 md:pt-16">
      <div className="container">
        <div className="max-w-[800px] mx-auto mb-10">
          <header>
            <h1>{title}</h1>
          </header>

          <div className="text-secondary-800 font-heading font-semibold flex items-center space-x-1">
            <span>By</span> {authors && <AuthorList items={authors} />}
          </div>

          {publishedAt && (
            <div>
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? formatDistance(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), "MMMM Mo, yyyy")}
            </div>
          )}

          {/* {categories && (
            <div className="mb-8">
              <ul>
                {categories.slice(0, 1).map((category) => (
                  <li
                    className="text-primary-500 font-bold tracking-widest uppercase"
                    key={category._id}
                  >
                    {category.title}
                  </li>
                ))}
              </ul>
            </div>
          )} */}
        </div>

        {mainImage && mainImage.asset && (
          <div className="mb-16 md:mb-20">
            <GatsbyImage
              image={props.mainImage.asset.gatsbyImageData}
              alt={props.mainImage.alt}
            />
          </div>
        )}

        <StyledContent className="max-w-[800px] mx-auto mb-16 md:mb-20">
          {_rawBody && <PortableText blocks={_rawBody} />}
        </StyledContent>

        <div className="max-w-[800px] mx-auto mb-20 md:mb-28 border border-gray-200 px-6 py-10 md:p-10 lg:p-20 text-center">
          <div className="max-w-[480px] mx-auto">
            <p className="heading-four">Subscribe Heading</p>
            <p>
              15-20 words lorem ipsum dolor sit amet, consectetur adipiscing
              elit ut aliquam, purus sit amet luctus venenatis
            </p>
            <Newsletter />
          </div>
        </div>
      </div>

      <RecentBlogPosts heading={false} className="mb-16 md:mb-32" />
    </article>
  );
}

export default BlogPost;