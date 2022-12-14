import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import PortableText from "../components/Blog/portableText";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Hero from "../components/Hero/HeroFullWidth";
import AniLink from "gatsby-plugin-transition-link/AniLink";

// import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonWithIcon from "../components/Button/ButtonWithIcon";
import ButtonGhost from "../components/Button/ButtonGhost";
import ReputationBadges from "../components/Repeating/ReputationBadges";
import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import Testimonials from "../components/Repeating/Testimonials";
import About from "../components/Repeating/About";
import ValueProps from "../components/Repeating/ValueProps";



export const query = graphql`
 

  query CityTemplateQuery($id: String!) {
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
    heroDesktop: file(relativePath: { eq: "home/hero-desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    heroMobile: file(relativePath: { eq: "home/hero-mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    intro: file(relativePath: { eq: "home/2.0-Intro.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    stars: file(relativePath: { eq: "home/stars.svg" }) {
      publicURL
    }
plumbing: file(relativePath: { eq: "home/plumbing.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 748)
      }
    }
    sewerDrain: file(relativePath: { eq: "home/sewer-drain.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 748)
      }
    }
    hvac: file(relativePath: { eq: "home/hvac.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 748)
      }
    }
    city: sanityCities(id: { eq: $id }) {
      id
      title
      seoTitle
      heroText
      heroTitle
      metaDescription
      whyWeLoveImage {
        asset {
          gatsbyImageData(layout: CONSTRAINED, width: 1200)
        }
      }
      _rawWhyWeLoveText
      footerCTAText
      footerText
    }
  }
`;

const Template = ({ data }) => {
  const heroImages = [
    getImage(data.heroDesktop.childImageSharp.gatsbyImageData),
    {
      ...getImage(data.heroMobile.childImageSharp.gatsbyImageData),
      media: `(max-width: 767px)`,
    },
  ];
  const [modalTabIndex, setModalTabIndex] = useState(0);
  const services = [
    {
      image: data.plumbing.childImageSharp.gatsbyImageData,
      heading: "Plumbing",
      text: "If you need it, Prodigy can do it. We provide full-service plumbing repair and preventative maintenance.",
      link: "/plumbing-services/",
    },
    {
      image: data.sewerDrain.childImageSharp.gatsbyImageData,
      heading: "Sewer & Drain",
      text: "At Prodigy, we’ll clear the clogs, fix the leaks, and repair the damage. Plus, we’ll help you avoid future issues.",
      link: "/drain-sewer-repair-services/",
    },
    {
      image: data.hvac.childImageSharp.gatsbyImageData,
      heading: "Heating & Air Conditioning",
      text: "Enjoy year-round comfort from your HVAC systems. Get quality installation, skilled maintenance, and reliable repairs.",
      link: "/hvac-long-beach-la/",
    },
  ];
  return (
    <Layout ctaText={data.city.footerCTAText}>
        <SearchEngineOptimization
        title={data.city.seoTitle}
        description={data.city.metaDescription}
        openGraphImage={
          data.city.openGraphImage && data.city.openGraphImage.asset.url
        }
        twitterOpenGraphImage={
          data.city.twitterCardImage && data.city.twitterCardImage.asset.url
        }
        />
      <Hero
        backgroundImages={heroImages}
        backgroundPosition="50% 50%"
        textMaxWidth="max-w-[720px]"
        textAlignment="text-center mx-auto"
        padding="pt-24 md:pt-40 pb-36 md:pb-28"
      >
        <img
          src={data.stars.publicURL}
          alt="5 stars"
          className="mx-auto mb-3 md:mb-6 max-w-[208px] md:max-w-[336px]"
        />
        <p className="font-heading text-mobile-7xl md:text-7xl font-black text-secondary-800 uppercase mb-2">
          5-star service.
          <br /> Flat rate pricing.
        </p>
        <p className="font-display text-2xl md:text-4xl text-secondary-400 mb-8">
          Over 1,500 glowing reviews and counting.
        </p>
        <div className="flex justify-center space-x-5">
          <ButtonSolid
            modal="modal-contact"
            text="Schedule Service"
            onClick={() => setModalTabIndex(1)}
          />
          <ButtonGhost
            href="tel:562-413-1928"
            text={[
              <i className="fas fa-phone text-primary-500 group-hover:text-white mr-2.5 transition-colors duration-300 ease-linear"></i>,
              "562-413-1928",
            ]}
          />
        </div>
      </Hero>
      <ReputationBadges />


      <section className="mb-20 md:mb-24 pt-8 md:pt-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-12 md:gap-x-16 lg:gap-x-32 items-center">
            <div className="md:order-2 order-1">
              <h1>                {data.city.heroTitle}</h1>
              <p>
                {data.city.heroText}
              </p>
              <ButtonSolid modal="modal-contact" text="Schedule Service" />
            </div>
            <div className="order-1 md:text-right">
              <StaticImage
                src="../images/repeating/city/2.0-Intro.png"
                loading="lazy"
                width={560}
              />
            </div>
          </div>
        </div>
      </section>
      {/* section break */}
      <section className="mb-20 md:mb-32">
        <div className="container">
          <header className="text-center mb-10 md:mb-12 max-w-md mx-auto">
            <h2>Full-Service Maintenance & Repair</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-10">
            {services.map((services, i) => {
              return (
                <div>
                  <AniLink fade to={services.link} className="group" key={i}>
                    <div className="relative overflow-hidden md:rounded-3xl mb-4">
                      <GatsbyImage image={services.image} className="w-full" />
                      <div className="bg-secondary-800/40 absolute bottom-0 left-0 w-full py-3 px-8">
                        <div className="bg-secondary-800 w-6 group-hover:w-full h-full absolute top-0 left-0 transition-all duration-700 ease-in-out"></div>
                        <span className="relative font-heading font-black text-white text-xl">
                          {services.heading}
                        </span>
                      </div>
                    </div>
                    <p className="mb-5 text-gray-600 font-normal">
                      {services.text}
                    </p>

                    <ButtonWithIcon href={services.link} text="Learn More" />
                  </AniLink>
                </div>
              );
            })}
          </div>
        </div>
      </section>  
      <Testimonials />
      <ValueProps />
      <About />
      <RecentBlogPosts />
      {data.city._rawWhyWeLoveText && data.city.whyWeLoveImage && (
        <section className="mb-20 md:mb-32">
          <div className="container">
            <div className="grid lg:grid-cols-12 md:gap-x-7 xl:gap-x-20">
              <div className="col-span-auto lg:col-span-5 flex flex-col justify-items-center place-content-center">
                <h2>Why We Love {data.city.title}</h2>
                <PortableText blocks={data.city._rawWhyWeLoveText} />
              </div>
              <div className="col-span-auto lg:col-span-7">
                <GatsbyImage image={data.city.whyWeLoveImage.asset.gatsbyImageData} className="z-0 mb-10 rounded-3xl" />
              </div>

            </div>
          </div>
        </section>
      )}


    </Layout>
  );
};

export default Template;
