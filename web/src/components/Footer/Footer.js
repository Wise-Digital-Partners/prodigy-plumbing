import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Link from "gatsby-plugin-transition-link";

import { GatsbyImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import { mapEdgesToNodes } from "../../lib/helpers";
import CallToAction from "../Repeating/CTA";
import nestLogo from "../../images/global/Nest Logo.svg";

const Footer = ({ hideFooter, ctaHeading, ctaText, hideSubtext }) => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const industriesClickHandler = () => {
    setCityDropdownOpen(!cityDropdownOpen);
    setStatesDropdownOpen(false);
  };

  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "global/logo-full.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 234)
        }
      }
      backgroundPattern: file(
        relativePath: { eq: "global/Tile Background.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 122)
        }
      }
      cities: allSanityCities(sort: { fields: [footerText], order: ASC }) {
        edges {
          node {
            footerText
            footerCTAText            
            slug {
              current
            }
          }
        }
      }
    }
  `);
  const [statesDropdownOpen, setStatesDropdownOpen] = useState(false);

  const cityNodes = data && data.cities && mapEdgesToNodes(data.cities);

  const navigation = {
    company: [
      {
        name: "About",
        href: "/about-us/",
      },
      {
        name: "Reviews",
        href: "/reviews/",
      },
      // {
      //   name: "Specials",
      //   href: "/specials/",
      // },
      {
        name: "Careers",
        href: "/careers/",
      },
      {
        name: "Blog",
        href: "/blog/",
      },
    ],
    services: [
      {
        name: "Plumbing",
        href: "/plumbing-services/",
      },
      {
        name: "Drain & Sewer",
        href: "/drain-sewer-repair-services/",
      },
      {
        name: "HVAC",
        href: "/hvac-long-beach-la/",
      },
    ],
  };

  return (
    <BgImage
      className="bg-secondary-800 pt-10"
      image={data.backgroundPattern.childImageSharp.gatsbyImageData}
      style={{
        backgroundSize: "122px",
        backgroundRepeat: "repeat",
      }}
    >
      <CallToAction
        ctaHeading={ctaHeading}
        ctaText={ctaText}
        hideSubtext={hideSubtext}
      />
      <footer
        className={`pt-20 md:pt-28 pb-5 md:pb-6 text-center md:text-left ${
          hideFooter && "hidden"
        }`}
      >
        <div className="container">
          <div className="md:hidden">
            <div className="flex items-center justify-center space-x-6 mb-7">
              <a
                href="https://www.yelp.com/biz/prodigy-plumbing-cerritos-14"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-500"
              >
                <i className="fab fa-yelp text-2xl"></i>
              </a>
              <a
                href="https://www.facebook.com/prodigyplumbinglbc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-500"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com/prodigyplumbinginc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-500"
              >
                <i className="fab fa-instagram text-3xl"></i>
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-12 md:justify-between space-y-16 md:space-y-0 md:space-x-8 mb-20 md:mb-16">
            <div className="md:col-start-1 md:col-span-3">
              <AniLink fade to="/">
                <GatsbyImage
                  image={data.logo.childImageSharp.gatsbyImageData}
                  alt="Prodigy Plumbing Logo"
                  className="mb-8 mx-auto md:mx-0"
                />
              </AniLink>
              <div className="text-white font-heading font-bold mb-1">
                License #967690
              </div>
              <div className="text-white text-sm">Bonded & Insured</div>
            </div>

            <div className="md:col-end-13 md:col-span-9">
              <div className="grid md:flex md:justify-end gap-x-10 md:gap-x-16 lg:gap-x-24 gap-y-6 md:gap-y-0">
                <div>
                  <div className="font-heading text-primary-500 md:text-white font-bold mb-4">
                    Services
                  </div>

                  <ul className="flex flex-col space-y-1.5">
                    {navigation.services.map((item) => (
                      <li key={item.name} className="whitespace-nowrap">
                        <a
                          href={item.href}
                          className="text-sm text-white hover:text-primary-500 font-normal font-body"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="font-heading text-primary-500 md:text-white font-bold mb-4">
                    Company
                  </div>

                  <ul className="flex flex-col space-y-1.5">
                    {navigation.company.map((item) => (
                      <li key={item.name} className="whitespace-nowrap">
                        <AniLink
                          fade
                          to={item.href}
                          className="text-sm text-white hover:text-primary-500 font-normal font-body"
                        >
                          {item.name}
                        </AniLink>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="font-heading text-primary-500 md:text-white font-bold mb-4">
                    Contact
                  </div>

                  <ul className="flex flex-col space-y-4">
                    <li>
                      <a
                        href="tel:562-413-1928"
                        className="text-sm text-white hover:text-primary-500 font-normal font-body"
                      >
                        (562) 413-1928
                      </a>
                    </li>
                    <li className="text-sm text-white">
                      Open 7 Days / Week
                      <br /> 8:00am - 5:00pm
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-items-center md:justify-between md:items-center">
            <div className="md:flex md:items-center">
              <ul className="flex items-center flex-wrap space-x-3 lg:space-x-4 justify-center md:justify-start">
                <li className="text-xs text-gray-50">
                  © {getYear()} Prodigy Plumbing
                </li>

                <li className="text-xs">
                  <AniLink
                    fade
                    to="/privacy-policy/"
                    className="text-gray-50 hover:text-primary-500 font-body font-normal"
                  >
                    Privacy Policy
                  </AniLink>
                </li>

                {/* <li className="text-xs">
                  <AniLink
                    fade
                    to="#"
                    className="text-gray-50 hover:text-primary-500 font-body font-normal"
                  >
                    Accessibility Statement
                  </AniLink>
                </li> */}
                <li className="text-sm">
                  <button
                    className="relative font-normal text-typography-heading/70 no-underline hover:text-primary-500"
                    onClick={industriesClickHandler}
                  >
                    <span className="flex items-center justify-between">
                      Cities
                      <i
                        className={`far fa-chevron-down ml-1 transform text-sm transition-all duration-300 ease-linear ${cityDropdownOpen ? "rotate-180" : "rotate-0"
                          }`}
                      ></i>
                    </span>
                    <ul
                      className={`absolute bottom-0 left-0 flex max-h-28 transform flex-col space-y-1.5 overflow-y-scroll bg-white px-3 pt-4 pb-3 text-left transition-all duration-300 ease-linear md:px-4 md:pb-4 md:pt-5 ${cityDropdownOpen
                          ? "visible -translate-y-8 opacity-100"
                          : "invisible -translate-y-4 opacity-0"
                        }`}
                    >
                      {cityNodes.map((item, i) => (
                        <li
                          className="cursor-auto whitespace-nowrap pb-1.5 font-body text-xs text-gray-700"
                          key={i}
                        >
                          {item.slug ? (
                            <Link
                              to={`/${item.slug.current}/`}
                              className="font-normal text-gray-700 no-underline hover:text-primary-500"
                            >
                              {item.footerText}
                            </Link>
                          ) : (
                            item.footerText
                          )}
                        </li>
                      ))}
                    </ul>
                  </button>
                </li>
                <li className="text-xs w-full md:w-auto mt-6 md:mt-0">
                  <a
                    className="text-gray-50 hover:text-primary-500 font-body font-normal flex items-center justify-center md:justify-start space-x-1"
                    href="https://www.wisedigitalpartners.com/nest-by-wise/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Powered by</span>{" "}
                    <img src={nestLogo} alt="NEST logo" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-6">
                <a
                  href="https://www.yelp.com/biz/prodigy-plumbing-cerritos-14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-500"
                >
                  <i className="fab fa-yelp text-2xl"></i>
                </a>
                <a
                  href="https://www.facebook.com/prodigyplumbinglbc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-500"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/prodigyplumbinginc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-500"
                >
                  <i className="fab fa-instagram text-3xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </BgImage>
  );
};

export default Footer;
