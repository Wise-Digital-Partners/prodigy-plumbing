import React, { useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Header from "./Navigation/Header";
import Footer from "./Footer/Footer";

import ModalContact from "./Modal/ModalContact";

const Layout = ({
  children,
  headerStyle,
  headerLinkColor,
  headerHasBorder,
  headerDarkMode,
  hideHeader,
  hideFooter,
  ctaHeading,
  ctaText,
  hideSubtext,
  modalTabIndex,
}) => {
  return (
    <div>
      <Helmet></Helmet>
      <Header
        headerStyle={headerStyle}
        headerLinkColor={headerLinkColor}
        headerHasBorder={headerHasBorder}
        headerDarkMode={headerDarkMode}
        hideHeader={hideHeader}
        modalTabIndex={modalTabIndex}
      />
      <main id="body-content" className="bg-white">
        {children}
      </main>
      <Footer
        hideFooter={hideFooter}
        ctaHeading={ctaHeading}
        ctaText={ctaText}
        hideSubtext={hideSubtext}
      />
      <ModalContact modalTabIndex={modalTabIndex} />
    </div>
  );
};

Layout.propTypes = {
  headerStyle: PropTypes.string,
  headerLinkColor: PropTypes.string,
  headerHasBorder: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
