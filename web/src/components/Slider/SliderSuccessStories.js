import React, { useRef, useEffect } from "react";
// import { useStaticQuery, graphql } from "gatsby";
import Slick from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = ({ slideIndex, children }) => {
  const slider = useRef();

  useEffect(() => {
    slider.current.slickGoTo(slideIndex);
  }, [slideIndex]);

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="group !flex items-center justify-center slick-prev"
        aria-label="Previous Slide"
      >
        <i className="far fa-arrow-left"></i>
      </button>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="group !flex items-center justify-center slick-next"
        aria-label="Next Slide"
      >
        <i className="far fa-arrow-right"></i>
      </button>
    );
  }

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 750,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "350px",
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 1023,
        settings: {
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <Slick {...sliderSettings} ref={slider}>
      {children}
    </Slick>
  );
};

export default Slider;
