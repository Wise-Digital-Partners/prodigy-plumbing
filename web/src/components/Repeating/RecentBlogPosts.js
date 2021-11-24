import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BlogPostPreview from "../Blog/BlogPostPreview";
import GraphQLErrorList from "../Blog/graphql-error-list";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../../lib/helpers";

const RecentBlogPosts = ({ props, heading, className }) => {
  const data = useStaticQuery(graphql`
    {
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
  `);

  const errors = props;

  if (errors) {
    return <GraphQLErrorList errors={errors} />;
  }

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <section className={` ${className || "mb-16 md:mb-20"}`}>
      <div className="container">
        {heading === false ? null : (
          <header className="mb-10 md:mb-12 text-center">
            <h2>Expert Advice For Homeowners Like You</h2>
          </header>
        )}
        {postNodes && postNodes.length > 0 && (
          <div className="grid md:grid-cols-3 md:gap-x-6 gap-y-8">
            {postNodes &&
              postNodes.slice(0, 3).map((node) => (
                <div key={node.id}>
                  <BlogPostPreview {...node} />
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentBlogPosts;
