import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ReputationBadges from "../components/Repeating/ReputationBadges";
import Testimonials from "../components/Repeating/Testimonials";
import EmployeeStories from "../components/Repeating/EmployeeStories";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonWithIcon from "../components/Button/ButtonWithIcon";

const Page = ({ data }) => {
  return (
    <Layout
      ctaHeading="We Welcome New Customers"
      ctaText="New to Prodigy? Our team would love to meet you and help you with your plumbing and HVAC needs. Give us a call today."
    >
      <SearchEngineOptimization
        title="About Prodigy Plumbing | Long Beach & LA County"
        description="At Prodigy, we love what we do, and we believe in it. It’s not just plumbing to us—it’s honest, hard work that services our Long Beach & LA County communities."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="mb-20 md:mb-24 pt-8 md:pt-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-12 md:gap-x-16 lg:gap-x-32 items-center">
            <div className="order-2 md:order-1">
              <h1>Meet The Prodigy Crew</h1>
              <p>
                We love what we do, and we believe in it. It’s not just plumbing
                to us—it’s honest, hard work that services our Long Beach and
                Los Angeles County communities.
              </p>
              <ButtonSolid modal="modal-contact" text="Schedule Service" />
            </div>
            <div className="order-1 md:order-2 md:text-right">
              <GatsbyImage
                image={data.hero.childImageSharp.gatsbyImageData}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 md:mb-24">
        <div className="container">
          <div className="text-center max-w-[950px] mx-auto">
            <h2 className="text-secondary-400">What We Believe In</h2>
            <div className="bg-secondary-400 w-32 h-0.5 mt-1 mx-auto mb-5"></div>
            <p className="block text-secondary-400 text-xl md:text-3xl mb-0">
              “Service before profit” is our motto. At Prodigy, we pride
              ourselves on being the gold standard. You get superior plumbing
              and HVAC services, unparalleled customer service, and competitive
              prices.
            </p>
          </div>
        </div>
      </section>

      <ReputationBadges className="mb-10" />
      <EmployeeStories />

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 items-center">
            <div className="order-2 md:order-1 md:pr-10 lg:pr-20">
              <h2>The Value We Bring</h2>
              <p>
                You can trust us to bring our “A-game” to the job. Our
                technicians arrive with a smile and are ready to provide you
                with exceptional service. It’s what our founder, Mark Ellefson,
                dreamed of when he first opened Prodigy for business in 2010—a
                high level of commitment to customers and a dedication to honest
                work.
              </p>
              <ul className="list-arrows mt-0">
                <li>1,500+ 5-Star Ratings</li>
                <li>Highly Trained, Licensed, And Experienced</li>
                <li>Courteous, Efficient, And Professional</li>
                <li>Outstanding Service</li>
                <li>Cost-Effective Solutions</li>
                <li>Fully Equipped Vehicle Fleet</li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage image={data.intro.childImageSharp.gatsbyImageData} />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-12 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <GatsbyImage image={data.logo.childImageSharp.gatsbyImageData} />
            </div>
            <div>
              <h2>A Great Place To Work</h2>
              <p>
                At Prodigy, we believe in the power of positive thinking, the
                importance of personal development, and our core principle of
                honesty. If you’re a plumbing/HVAC specialist in Long Beach or
                Los Angeles County and would love to join our team, let us know!
              </p>
              <ButtonWithIcon href="/careers/" text="Learn More" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

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
    hero: file(relativePath: { eq: "5.0 About/1.0Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 494)
      }
    }
    intro: file(relativePath: { eq: "5.0 About/2.0 Truck.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 598)
      }
    }
    logo: file(relativePath: { eq: "5.1 Careers/1.0 Hero.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 578)
      }
    }
  }
`;
export default Page;
