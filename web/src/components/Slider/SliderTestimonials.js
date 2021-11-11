import React, { Component } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slider-nav {
    ${tw`inset-0 text-left flex! flex-col relative before:hidden md:before:block before:bg-gray-100 before:w-px before:h-full before:absolute before:left-12`}
    .slick-active > div > div > div {
      ${tw`text-white bg-transparent border-gray-300`}
    }
    .slick-list {
      ${tw`overflow-visible -mx-1 md:mx-0`}
    }
    .slick-track {
      ${tw`md:flex md:flex-col md:!transform-none`}
    }
    .slick-slide {
      div {
        ${tw`mx-1 md:mx-0`}
      }
    }
    .slick-dots {
      ${tw`relative mt-5 flex! justify-center items-center space-x-2.5`}
      li {
        ${tw`h-2 w-2 bg-gray-50/40 rounded-full mr-0 transition-colors duration-300 ease-linear`}
        &.slick-active {
          ${tw`bg-primary-500`}
        }
      }
    }
  }
`;
export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      currentSlide: 0,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  nextSlide = () => {
    this.state.nav2.slickNext();
  };
  prevSlide = () => {
    this.state.nav2.slickPrev();
  };

  handleAfterChange = (index) => {
    this.setState({
      currentSlide: index,
    });
  };

  render() {
    const sliderSettings = {
      dots: false,
      arrows: false,
      speed: 750,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      fade: true,
      asNavFor: this.state.nav1,
      ref: (slider) => (this.slider2 = slider),
    };
    const sliderNavSettings = {
      arrows: false,
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true,
      afterChange: this.handleAfterChange,
      asNavFor: this.state.nav2,
      ref: (slider) => (this.slider1 = slider),
      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: true,
            swipeToSlide: true,
            centerMode: true,
            centerPadding: "150px",
          },
        },
      ],
    };

    return (
      <StyledSlider>
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-start-1 md:col-span-4 relative pt-12 pb-6 md:pr-20 lg:pr-20 before:absolute before:right-0 before:top-0 before:w-screen before:h-full before:bg-secondary-800 md:before:shadow-4xl md:before:rounded-r-3xl before:z-10 before:-mx-4 md:before:mx-0">
            <div className="relative z-10">
              <h2 className="heading-three text-white text-center md:text-left">
                See why customers Rave About us
              </h2>
              <p className="hidden md:block text-secondary-200 font-heading font-bold">
                Sort by review type
              </p>

              <div className="relative">
                <div
                  className={`hidden md:block absolute left-5 w-2 h-2 bg-primary-500 rounded-full transition-all duration-500 ease-in-out ${
                    this.state.currentSlide === 0 && "top-5"
                  } ${this.state.currentSlide === 1 && "top-18"} ${
                    this.state.currentSlide === 2 && "top-[7.75rem]"
                  } ${this.state.currentSlide === 3 && "top-[10.85rem]"} ${
                    this.state.currentSlide === 4 && "top-[14.25rem]"
                  }`}
                ></div>

                <Slick className="slider-nav" {...sliderNavSettings}>
                  <div>
                    <div className="text-center md:text-left font-heading font-black text-sm text-secondary-800 md:text-white/50 uppercase block w-full bg-gray-50/40 md:bg-transparent border md:border-t-0 md:border-l-0 md:border-r-0 md:border-b border-transparent md:border-gray-100 md:pt-4 md:pl-14 py-2 md:pb-4 md:mb-3 rounded md:rounded-none transition-all duration-300 ease-linear cursor-pointer">
                      Quality Service
                    </div>
                  </div>
                  <div>
                    <div className="text-center md:text-left font-heading font-black text-sm text-secondary-800 md:text-white/50 uppercase block w-full bg-gray-50/40 md:bg-transparent border md:border-t-0 md:border-l-0 md:border-r-0 md:border-b border-transparent md:border-gray-100 md:pl-14 py-2 md:pt-0 md:pb-4 md:mb-3 rounded md:rounded-none transition-all duration-300 ease-linear cursor-pointer">
                      Timeliness
                    </div>
                  </div>
                  <div>
                    <div className="text-center md:text-left font-heading font-black text-sm text-secondary-800 md:text-white/50 uppercase block w-full bg-gray-50/40 md:bg-transparent border md:border-t-0 md:border-l-0 md:border-r-0 md:border-b border-transparent md:border-gray-100 md:pl-14 py-2 md:pt-0 md:pb-4 md:mb-3 rounded md:rounded-none transition-all duration-300 ease-linear cursor-pointer">
                      Professionalism
                    </div>
                  </div>
                  <div>
                    <div className="text-center md:text-left font-heading font-black text-sm text-secondary-800 md:text-white/50 uppercase block w-full bg-gray-50/40 md:bg-transparent border md:border-t-0 md:border-l-0 md:border-r-0 md:border-b border-transparent md:border-gray-100 md:pl-14 py-2 md:pt-0 md:pb-4 md:mb-3 rounded md:rounded-none transition-all duration-300 ease-linear cursor-pointer">
                      Value
                    </div>
                  </div>
                  <div>
                    <div className="text-center md:text-left font-heading font-black text-sm text-secondary-800 md:text-white/50 uppercase block w-full bg-gray-50/40 md:bg-transparent border md:border-none border-gray-100 md:pl-14 py-2 md:pb-4 transition-border-transparent md:all duration-300 ease-linear cursor-pointer">
                      Knowledgable
                    </div>
                  </div>
                </Slick>
              </div>

              <div className="hidden md:flex items-center justify-between mt-10 max-w-[210px]">
                <button
                  onClick={this.prevSlide}
                  className="focus:outline-none h-12 w-12 bg-transparent hover:bg-primary-500 border-2 border-solid border-primary-500 hover:text-white rounded-full"
                >
                  <i className="far fa-arrow-left focus:no-underline"></i>
                </button>

                <button
                  onClick={this.nextSlide}
                  className="focus:outline-none h-12 w-12 bg-transparent hover:bg-primary-500 border-2 border-solid border-primary-500 hover:text-white rounded-full"
                >
                  <i className="far fa-arrow-right focus:no-underline"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-end-13 md:col-span-8 pt-7 md:pt-12 pb-2 md:pl-20 lg:pl-20 px-8 md:px-0 text-center md:text-left">
            <Slick {...sliderSettings}>
              <div>
                {this.props.slides.map((testimonial, i) => {
                  return (
                    testimonial.category === "Quality Service" && (
                      <div key={i}>
                        <blockquote
                          className={`pb-6 ${
                            testimonial.id !== 1 &&
                            "hidden md:block border-t border-secondary-400 pt-8"
                          }`}
                        >
                          <q>{testimonial.quote}</q>
                          <footer className="mt-8 md:mt-6">
                            <cite className="not-italic flex flex-col md:flex-row md:items-center justify-center md:justify-between">
                              <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-6 mb-1.5">
                                <GatsbyImage
                                  image={testimonial.headshot}
                                  className="mx-auto md:mx-0"
                                />
                                <div className="text-secondary-800 font-heading font-semibold text-sm">
                                  {testimonial.name}
                                </div>
                              </div>
                              <GatsbyImage
                                image={testimonial.platform}
                                className="mx-auto md:mx-0"
                              />
                            </cite>
                          </footer>
                        </blockquote>
                      </div>
                    )
                  );
                })}
              </div>

              <div>
                {this.props.slides.map((testimonial, i) => {
                  return (
                    testimonial.category === "Timeliness" && (
                      <div key={i}>
                        <blockquote
                          className={`pb-6 ${
                            testimonial.id !== 1 &&
                            "hidden md:block border-t border-secondary-400 pt-8"
                          }`}
                        >
                          <q>{testimonial.quote}</q>
                          <footer className="mt-8 md:mt-6">
                            <cite className="not-italic flex flex-col md:flex-row md:items-center justify-center md:justify-between">
                              <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-6 mb-1.5">
                                <GatsbyImage
                                  image={testimonial.headshot}
                                  className="mx-auto md:mx-0"
                                />
                                <div className="text-secondary-800 font-heading font-semibold text-sm">
                                  {testimonial.name}
                                </div>
                              </div>
                              <GatsbyImage
                                image={testimonial.platform}
                                className="mx-auto md:mx-0"
                              />
                            </cite>
                          </footer>
                        </blockquote>
                      </div>
                    )
                  );
                })}
              </div>

              <div>
                {this.props.slides.map((testimonial, i) => {
                  return (
                    testimonial.category === "Professionalism" && (
                      <div key={i}>
                        <blockquote
                          className={`pb-6 ${
                            testimonial.id !== 1 &&
                            "hidden md:block border-t border-secondary-400 pt-8"
                          }`}
                        >
                          <q>{testimonial.quote}</q>
                          <footer className="mt-8 md:mt-6">
                            <cite className="not-italic flex flex-col md:flex-row md:items-center justify-center md:justify-between">
                              <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-6 mb-1.5">
                                <GatsbyImage
                                  image={testimonial.headshot}
                                  className="mx-auto md:mx-0"
                                />
                                <div className="text-secondary-800 font-heading font-semibold text-sm">
                                  {testimonial.name}
                                </div>
                              </div>
                              <GatsbyImage
                                image={testimonial.platform}
                                className="mx-auto md:mx-0"
                              />
                            </cite>
                          </footer>
                        </blockquote>
                      </div>
                    )
                  );
                })}
              </div>

              <div>
                {this.props.slides.map((testimonial, i) => {
                  return (
                    testimonial.category === "Value" && (
                      <div key={i}>
                        <blockquote
                          className={`pb-6 ${
                            testimonial.id !== 1 &&
                            "hidden md:block border-t border-secondary-400 pt-8"
                          }`}
                        >
                          <q>{testimonial.quote}</q>
                          <footer className="mt-8 md:mt-6">
                            <cite className="not-italic flex flex-col md:flex-row md:items-center justify-center md:justify-between">
                              <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-6 mb-1.5">
                                <GatsbyImage
                                  image={testimonial.headshot}
                                  className="mx-auto md:mx-0"
                                />
                                <div className="text-secondary-800 font-heading font-semibold text-sm">
                                  {testimonial.name}
                                </div>
                              </div>
                              <GatsbyImage
                                image={testimonial.platform}
                                className="mx-auto md:mx-0"
                              />
                            </cite>
                          </footer>
                        </blockquote>
                      </div>
                    )
                  );
                })}
              </div>

              <div>
                {this.props.slides.map((testimonial, i) => {
                  return (
                    testimonial.category === "Knowledgable" && (
                      <div key={i}>
                        <blockquote
                          className={`pb-6 ${
                            testimonial.id !== 1 &&
                            "hidden md:block border-t border-secondary-400 pt-8"
                          }`}
                        >
                          <q>{testimonial.quote}</q>
                          <footer className="mt-8 md:mt-6">
                            <cite className="not-italic flex flex-col md:flex-row md:items-center justify-center md:justify-between">
                              <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-6 mb-1.5">
                                <GatsbyImage
                                  image={testimonial.headshot}
                                  className="mx-auto md:mx-0"
                                />
                                <div className="text-secondary-800 font-heading font-semibold text-sm">
                                  {testimonial.name}
                                </div>
                              </div>
                              <GatsbyImage
                                image={testimonial.platform}
                                className="mx-auto md:mx-0"
                              />
                            </cite>
                          </footer>
                        </blockquote>
                      </div>
                    )
                  );
                })}
              </div>
            </Slick>
          </div>
        </div>
      </StyledSlider>
    );
  }
}
