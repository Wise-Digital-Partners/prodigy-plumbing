
import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ButtonSolid from "../components/Button/ButtonSolid";
import Hero from "../components/Hero/HeroFullWidth";
import ReviewCards from "../components/Reviews/ReviewCards";

const Page = ({ data }) => {
    return (
      <Layout>
        <SearchEngineOptimization
          title="Reviews | Prodigy Plumbing"
          openGraphImage={data.openGraphImage.publicURL}
          twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
        />

        <section className="hidden md:block">
      <Hero
          backgroundImages={data.reviewsBack.childImageSharp.gatsbyImageData}
        backgroundPosition="0 50%"
        textMaxWidth="md:max-w-[720px]"
        padding="py-16 md:py-32"
      >
        <h1>Backed By Our Customers</h1>
        <p className="text-lg md:text-xl text-gray-700">
          This is why we do what we do—over 1,500 reviews from happy customers
          throughout Long Beach and Los Angeles County and beyond.
        </p>

        <ButtonSolid href="/review-us/" text="Review Us" />
      </Hero>
        </section>
        <section className="block md:hidden bg-secondary-400 px-4">
          <div className="flex justify-center items-center flex-col text-white pt-10 pb-14">
            <h1 className="mb-6 font-light text-white">Testimonials</h1>
            <p className="text-base text-center">
              Don’t just take our word for it—hear feedback directly from our
              clients.
            </p>

            <ButtonSolid href="/reviews-us/" text="Leave a Review" />
          </div>
        </section>

        <section className="pt-16 md:pt-20 pb-20 md:pb-32">
          <div className="container">
            <div >
              <ReviewCards className="grid masonary" />
            </div>
          </div>
        </section>


      </Layout>
    );
};

export const query = graphql`
  {

    reviewsBack: file(relativePath: { eq: "5.2 Review/1.0Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
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
    hero: file(relativePath: { eq: "5.2 Review/1.0Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default Page;
