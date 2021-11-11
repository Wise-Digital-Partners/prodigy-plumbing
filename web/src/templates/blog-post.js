import React from "react";
import { graphql } from "gatsby";
import BlogPost from "../components/Blog/BlogPost";
import GraphQLErrorList from "../components/Blog/graphql-error-list";
// import { toPlainText } from "../lib/helpers";
import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
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
        }
        alt
      }
      title
      slug {
        current
      }
      seoTitle
      metaDescription
      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        _id
        image {
          crop {
            _key
            _type
            top
            bottom
            left
            right
          }
          hotspot {
            _key
            _type
            x
            y
            height
            width
          }
          asset {
            _id
            gatsbyImageData
          }
        }
        name
      }
    }
  }
`;

const BlogPostTemplate = (props) => {
  const { data, errors } = props;
  const post = data && data.post;
  return (
    <Layout>
      {errors && <SearchEngineOptimization title="GraphQL Error" />}
      {post && (
        <SearchEngineOptimization
          title={post.seoTitle}
          description={post.metaDescription}
          openGraphImage={post.mainImage}
          twitterOpenGraphImage={post.mainImage}
        />
      )}

      {errors && (
        <div className="container">
          <GraphQLErrorList errors={errors} />
        </div>
      )}

      {post && <BlogPost {...post} />}
    </Layout>
  );
};

export default BlogPostTemplate;
