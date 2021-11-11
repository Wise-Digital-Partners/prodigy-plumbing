import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ButtonSolid from "../components/Button/ButtonSolid";
import Hero from "../components/Hero/HeroFullWidth";
import ReviewsGrid from "../components/Reviews/ReviewsGrid";

const Page = ({ data }) => {
  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Prodigy Plumbing Reviews | Cerritos & Long Beach"
        description="With 1,500+ reviews from happy customers, Prodigy is the smart choice for a plumber and HVAC specialist in Cerritos and Long Beach. Get a free estimate today."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <Hero
        backgroundImages={data.heroDesktop.childImageSharp.gatsbyImageData}
        backgroundPosition="0 50%"
        textMaxWidth="md:max-w-[720px]"
        // textAlignment=""
        padding="py-16 md:py-32"
      >
        <h1>Backed By Our Customers</h1>
        <p className="text-lg md:text-xl text-gray-700">
          This is why we do what we do—over 1,500 reviews from happy customers
          throughout Cerritos and Long Beach and beyond.
        </p>

        <ButtonSolid href="/review-us/" text="Review Us" />
      </Hero>

      <section className="pt-16 md:pt-24 pb-22 md:pb-16">
        <div className="container">
          <ReviewsGrid gridLayout="masonry" />
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Reviews.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Reviews.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(relativePath: { eq: "5.2 Review/1.0Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
  }
`;

export default Page;
