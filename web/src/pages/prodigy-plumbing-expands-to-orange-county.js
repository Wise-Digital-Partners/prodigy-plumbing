import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
// import BlogPostPreview from "../components/Blog/BlogPostGrid";
import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";

import GraphQLErrorList from "../components/Blog/graphql-error-list";
// import {
//   filterOutDocsPublishedInTheFuture,
//   filterOutDocsWithoutSlugs,
//   mapEdgesToNodes,
// } from "../lib/helpers";
const StyledContent = styled.ul`
  iframe {
    ${tw`w-full h-full min-h-[350px] xl:min-h-[550px]`}
  }
  .wrapper {
    ${tw`w-full h-full flex`}

  }
`;
export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage-Reviews.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage-Reviews.jpg" }
    ) {
      publicURL
    }
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              gatsbyImageData
            }
            alt
          }
          categories {
            _id
            title
          }
          title
          slug {
            current
          }
        }
      }
    }
  }
`;

const ArchivePage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }



  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Blog | Prodigy Plumbing | Long Beach & LA County Plumber"
        description="Prodigy Plumbing is excited to announce our expansion into Orange County. Watch our announcement here!"
      // openGraphImage={data.openGraphImage.publicURL}
      // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-12 md:pt-16 mb-20 md:mb-32">
        <div className="container">
          <StyledContent className="text-center">
          <h1>We’ve Expanded Our Services to Orange County!</h1>
            <p>Watch the announcement from Prodigy’s President and Founder, Mark Ellefson.
</p>
            <div className="wrapper">
              <iframe src="https://player.vimeo.com/video/783962706?h=e1e1f2c1ef&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Merge Announcement">
              </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
</StyledContent>
          </div>
      </section>
      <RecentBlogPosts />

    </Layout>
  );
};

export default ArchivePage;
