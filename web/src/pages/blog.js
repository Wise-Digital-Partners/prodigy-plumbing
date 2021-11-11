import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import BlogPostPreview from "../components/Blog/BlogPostGrid";
import GraphQLErrorList from "../components/Blog/graphql-error-list";
import { mapEdgesToNodes } from "../lib/helpers";

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
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

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts);

  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Blog | Prodigy Plumbing | Cerritos & Long Beach Plumber"
        description="Read our blog for top plumbing and HVAC tips from the Prodigy Plumbing pros. Subscribe, so you never miss a post!"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-12 md:pt-16 mb-20 md:mb-32">
        <div className="container">
          <header className="mb-10 md:mb-12">
            <h1>From Our Master Plumbers</h1>
          </header>
          {postNodes && postNodes.length > 0 && (
            <BlogPostPreview nodes={postNodes} />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ArchivePage;
