import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";

import Burger from "./Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const MainNav = ({
  headerStyle,
  headerHasBorder,
  headerDarkMode,
  headerLinkColor,
  scrolled,
  setModalTabIndex,
}) => {
  // determine if offcanvas is open
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const [subMenuHovering1, setSubMenuHovering1] = useState(false);
  const isHoveringSubMenu1 = () => setSubMenuHovering1(true);
  const notHoveringSubMenu1 = () => setSubMenuHovering1(false);

  const [subMenuHovering2, setSubMenuHovering2] = useState(false);
  const isHoveringSubMenu2 = () => setSubMenuHovering2(true);
  const notHoveringSubMenu2 = () => setSubMenuHovering2(false);

  const [subMenuHovering3, setSubMenuHovering3] = useState(false);
  const isHoveringSubMenu3 = () => setSubMenuHovering3(true);
  const notHoveringSubMenu3 = () => setSubMenuHovering3(false);

  // handle click of navigation items
  const clickHandler = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  // close offcanvas onclick outside
  const node = useRef();
  useOnClickOutside(node, () => setOffcanvasOpen(false));

  const data = useStaticQuery(graphql`
    {
      darkLogo: file(relativePath: { eq: "global/logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 123, placeholder: NONE)
        }
      }
      lightLogo: file(relativePath: { eq: "global/logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 123, placeholder: NONE)
        }
      }
    }
  `);

  // Define logos based on header style
  let initialLogo = null,
    stickyLogo = null,
    className = null;

  if (headerStyle === "overlap" || headerStyle === "overlap-hero") {
    initialLogo = data.lightLogo.childImageSharp.gatsbyImageData;
    stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    className = "absolute";
  } else if (headerDarkMode) {
    initialLogo = data.lightLogo.childImageSharp.gatsbyImageData;
    stickyLogo = data.lightLogo.childImageSharp.gatsbyImageData;
  } else {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  if (offcanvasOpen) {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  const navigation = {
    plumbing: [
      {
        name: "Galvanized Pipe Replacement",
        href: "/galvanized-pipe-replacement/",
      },
      {
        name: "Water Heater Repair & Installation",
        href: "/water-heater-repair-installation/",
      },
      {
        name: "Commercial Plumbing",
        href: "/commercial-plumbing/",
      },
      {
        name: "Emergency Plumbing",
        href: "/emergency-plumbing/",
      },
    ],
    drainSewer: [
      {
        name: "Hydro Jetting",
        href: "/hydro-jetting-services/",
      },
      {
        name: "Sewer Camera Inspection",
        href: "/sewer-camera-inspection-services/",
      },
      {
        name: "Trenchless Sewer",
        href: "/trenchless-sewer-repair-replacement/",
      },
      {
        name: "Tree Root Intrusion",
        href: "/tree-root-intrusion/",
      },
      {
        name: "Drain Cleaning & Repairs",
        href: "/drain-cleaning-repair-services/",
      },
    ],
    about: [
      {
        name: "Our Company",
        href: "/about-us/",
      },
      {
        name: "Reviews",
        href: "/reviews/",
      },
      {
        name: "Careers",
        href: "/careers/",
      },
      {
        name: "Blog",
        href: "/blog/",
      },
    ],
  };
  return (
    <nav
      id="main-navigation"
      className={`py-2 bg-tertiary-50 shadow-3xl w-full transition duration-300 ease-linear ${
        headerStyle === "overlap" ? "lg:bg-transparent" : "lg:bg-tertiary-50"
      } ${headerHasBorder && ""} ${offcanvasOpen ? "" : ""} ${
        headerDarkMode && ""
      } ${
        scrolled &&
        "!fixed !bg-tertiary-50 top-0 left-0 w-full !shadow-3xl z-50"
      } ${className}`}
      role="navigation"
      aria-label="main-navigation"
      offcanvas-open={offcanvasOpen}
    >
      <div className="container flex justify-between items-center">
        <div className="flex flex-auto lg:hidden">
          <a href="tel:562-383-0098">
            <i className="fas fa-phone text-lg text-secondary-800"></i>
          </a>
        </div>

        <div className="flex flex-auto lg:flex-1 justify-center lg:justify-start">
          <AniLink fade to="/">
            <div className={`${scrolled && "hidden"}`}>
              <div>
                <GatsbyImage
                  image={initialLogo}
                  alt="Prodigy Plumbing Logo"
                  className="w-[88px] md:w-[123px]"
                />
              </div>
            </div>

            <div className={`hidden ${scrolled && "!block"}`}>
              <div>
                <GatsbyImage
                  image={stickyLogo}
                  alt="Prodigy Plumbing Logo"
                  className="w-[88px] md:w-[123px]"
                />
              </div>
            </div>
          </AniLink>
        </div>

        <div className="flex items-center justify-end md:justify-start flex-auto">
          <ul
            id="navigation-desktop"
            className="hidden lg:flex lg:flex-row lg:space-x-8 lg:items-center lg:justify-end lg:ml-10"
          >
            <li
              className="relative"
              role="presentation"
              onMouseEnter={isHoveringSubMenu1}
              onMouseLeave={notHoveringSubMenu1}
            >
              <AniLink
                fade
                to="/plumbing-services/"
                className={`font-heading relative text-sm font-black uppercase tracking-wide pb-8 ${
                  subMenuHovering1 && "text-primary-500"
                } ${scrolled && "text-secondary-800"} ${
                  headerLinkColor === "white"
                    ? "text-white"
                    : "text-secondary-800"
                } ${headerDarkMode && "lg:!text-white"}`}
              >
                Plumbing
              </AniLink>

              <ul
                className={`absolute top-0 bg-white shadow-3xl flex flex-col space-y-4 w-auto px-8 pt-10 pb-7 z-10 transition-all duration-300 ease-linear ${
                  subMenuHovering1
                    ? " visible translate-y-12 opacity-100"
                    : "invisible translate-y-20 opacity-0"
                }`}
              >
                {navigation.plumbing.map((item) => (
                  <li
                    key={item.name}
                    className="whitespace-nowrap border-b border-gray-200 pb-3.5"
                  >
                    <AniLink
                      fade
                      to={item.href}
                      className="relative block font-heading font-bold text-secondary-800 hover:text-primary-500"
                    >
                      {item.name}
                    </AniLink>
                  </li>
                ))}
              </ul>
            </li>

            <li
              className="relative"
              role="presentation"
              onMouseEnter={isHoveringSubMenu2}
              onMouseLeave={notHoveringSubMenu2}
            >
              <AniLink
                fade
                to="/drain-sewer-repair-services/"
                className={`font-heading relative text-sm font-black uppercase tracking-wide pb-8 ${
                  subMenuHovering2 && "text-primary-500"
                } ${scrolled && "text-secondary-800"} ${
                  headerLinkColor === "white"
                    ? "text-white"
                    : "text-secondary-800"
                } ${headerDarkMode && "lg:!text-white"}`}
              >
                Sewer & Drains
              </AniLink>
              <ul
                className={`absolute top-0 bg-white shadow-3xl flex flex-col space-y-4 w-auto px-8 pt-10 pb-7 z-10 transition-all duration-300 ease-linear ${
                  subMenuHovering2
                    ? " visible translate-y-12 opacity-100"
                    : "invisible translate-y-20 opacity-0"
                }`}
              >
                {navigation.drainSewer.map((item) => (
                  <li
                    key={item.name}
                    className="whitespace-nowrap border-b border-gray-200 pb-3.5"
                  >
                    <AniLink
                      fade
                      to={item.href}
                      className="relative block font-heading font-bold text-secondary-800 hover:text-primary-500"
                    >
                      {item.name}
                    </AniLink>
                  </li>
                ))}
              </ul>
            </li>

            <li className="group">
              <AniLink
                fade
                to="/hvac-cerritos-long-beach/"
                className={`font-heading relative text-sm font-black uppercase tracking-wide pb-8 hover:text-primary-500 ${
                  scrolled && "text-secondary-800"
                } ${
                  headerLinkColor === "white"
                    ? "text-white"
                    : "text-secondary-800"
                } ${headerDarkMode && "lg:!text-white"}`}
              >
                HVAC
              </AniLink>
            </li>

            <li
              className="relative"
              role="presentation"
              onMouseEnter={isHoveringSubMenu3}
              onMouseLeave={notHoveringSubMenu3}
            >
              <AniLink
                fade
                to="/about-us/"
                className={`font-heading relative text-sm font-black uppercase tracking-wide pb-8 ${
                  subMenuHovering3 && "text-primary-500"
                } ${scrolled && "text-secondary-800"} ${
                  headerLinkColor === "white"
                    ? "text-white"
                    : "text-secondary-800"
                } ${headerDarkMode && "lg:!text-white"}`}
              >
                About
              </AniLink>
              <ul
                className={`absolute top-0 bg-white shadow-3xl flex flex-col space-y-4 w-auto px-8 pt-10 pb-7 z-10 transition-all duration-300 ease-linear ${
                  subMenuHovering3
                    ? " visible translate-y-12 opacity-100"
                    : "invisible translate-y-20 opacity-0"
                }`}
              >
                {navigation.about.map((item) => (
                  <li
                    key={item.name}
                    className="whitespace-nowrap border-b border-gray-200 pb-3.5"
                  >
                    <AniLink
                      fade
                      to={item.href}
                      className="relative block font-heading font-bold text-secondary-800 hover:text-primary-500"
                    >
                      {item.name}
                    </AniLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <div className="lg:hidden" ref={node}>
            {/* Burger */}
            <Burger
              offcanvasOpen={offcanvasOpen}
              setOffcanvasOpen={setOffcanvasOpen}
              headerStyle={headerStyle}
              scrolled={scrolled}
              aria-controls="offcanvas-navigation"
            />

            {/* Mobile Nav */}
            <OffCanvas offcanvasOpen={offcanvasOpen} id="offcanvas-navigation">
              <div>
                <ul id="navigation-mobile" className="mb-10">
                  <Accordion
                    allowZeroExpanded={true}
                    className="flex flex-col space-y-7"
                  >
                    <li>
                      <AccordionItem uuid={1}>
                        <AccordionItemButton className="flex items-center focus:outline-none">
                          <p className="font-heading text-xl text-secondary-800 hover:text-primary-500 font-black mb-0 transition-colors duration-300 ease-linear">
                            Plumbing
                          </p>
                        </AccordionItemButton>

                        <AccordionItemPanel className="pt-6">
                          <ul className="flex flex-col space-y-3.5">
                            {navigation.plumbing.map((item) => (
                              <li
                                key={item.name}
                                className="whitespace-nowrap border-b border-gray-200 pb-3.5"
                              >
                                <AniLink
                                  fade
                                  to={item.href}
                                  className="relative block font-heading font-bold text-secondary-800 hover:text-primary-500"
                                >
                                  {item.name}
                                </AniLink>
                              </li>
                            ))}
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </li>

                    <li>
                      <AccordionItem uuid={2}>
                        <AccordionItemButton className="flex items-center focus:outline-none">
                          <p className="font-heading text-xl text-secondary-800 hover:text-primary-500 font-black mb-0 transition-colors duration-300 ease-linear">
                            Sewer & Drains
                          </p>
                        </AccordionItemButton>

                        <AccordionItemPanel className="pt-6">
                          <ul className="flex flex-col space-y-3.5">
                            {navigation.drainSewer.map((item) => (
                              <li
                                key={item.name}
                                className="whitespace-nowrap border-b border-gray-200 pb-3.5"
                              >
                                <AniLink
                                  fade
                                  to={item.href}
                                  className="relative block font-heading font-bold text-secondary-800 hover:text-primary-500"
                                >
                                  {item.name}
                                </AniLink>
                              </li>
                            ))}
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </li>

                    <li>
                      <AniLink
                        fade
                        to="/hvac-cerritos-long-beach/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                        className="font-heading text-xl text-secondary-800 hover:text-primary-500 font-black"
                      >
                        HVAC
                      </AniLink>
                    </li>

                    <li>
                      <AccordionItem uuid={3}>
                        <AccordionItemButton className="flex items-center focus:outline-none">
                          <p className="font-heading text-xl text-secondary-800 hover:text-primary-500 font-black mb-0 transition-colors duration-300 ease-linear">
                            About
                          </p>
                        </AccordionItemButton>

                        <AccordionItemPanel className="pt-6">
                          <ul className="flex flex-col space-y-3.5">
                            {navigation.about.map((item) => (
                              <li
                                key={item.name}
                                className="whitespace-nowrap border-b border-gray-200 pb-3.5"
                              >
                                <AniLink
                                  fade
                                  to={item.href}
                                  onKeyDown={clickHandler}
                                  onClick={clickHandler}
                                  className="relative block font-heading font-bold text-secondary-800 hover:text-primary-500"
                                >
                                  {item.name}
                                </AniLink>
                              </li>
                            ))}
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </li>

                    <li>
                      <AniLink
                        data-modal-open="modal-contact"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                        className="font-heading text-xl text-secondary-800 hover:text-primary-500 font-black cursor-pointer"
                      >
                        Contact
                      </AniLink>
                    </li>
                  </Accordion>
                </ul>

                <ButtonSolid
                  modal="modal-contact"
                  text="Book Service"
                  className="w-full"
                />
              </div>
            </OffCanvas>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <div className="hidden lg:inline-flex lg:items-center lg:space-x-6">
            <a
              href="tel:562-383-0098"
              className="font-heading font-black text-secondary-800 text-sm"
            >
              <i className="fas fa-phone text-primary-500 mr-1.5"></i>
              <span>562•383•0098</span>
            </a>
            <ButtonSolid
              modal="modal-contact"
              text="Schedule Service"
              // onClick={() => setModalTabIndex(1)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default MainNav;
