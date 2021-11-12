import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Slider from "../Slider/SliderSuccessStories";

const StyledSlider = styled.div`
  .slick-prev,
  .slick-next {
    ${tw`text-primary-500 text-xl h-12 w-12 bg-white bg-opacity-30 border border-solid border-primary-500 rounded-3xl transform-none top-auto -bottom-5`}
    &:hover {
      ${tw`bg-primary-500 text-white`}
    }
  }
  .slick-prev {
    ${tw`right-[17.5rem] md:right-[18.5rem] !left-0 m-auto`}
  }
  .slick-next {
    ${tw`left-[18.5rem] md:left-[19.5rem] !right-0 m-auto`}
  }
  .slick-list {
    ${tw`-mx-2 md:-mx-3.5 lg:-mx-7`}
  }
  .slick-slide {
    div {
      ${tw`mx-2 md:mx-3.5 lg:mx-7`}
    }
  }
  .slick-dots {
    ${tw`relative mt-10 md:mt-14 flex! justify-center items-center space-x-3`}
    li {
      ${tw`h-2 w-14 bg-gray-200 mr-0 transition-colors duration-300 ease-linear`}
      &.slick-active {
        ${tw`bg-primary-500`}
      }
    }
  }
`;

const EmployeeServices = ({ className, headingLevel }) => {
  const successStories = [
    {
      video:
        "https://player.vimeo.com/external/644482634.hd.mp4?s=8b0870eebcb84bc15c0fde15b6e2575a75f6fe14&profile_id=175",
    },
    {
      video:
        "https://player.vimeo.com/external/644482828.hd.mp4?s=066159922905afe60cc1670ab1e681f2d72721d1&profile_id=175",
    },
    {
      video:
        "https://player.vimeo.com/external/644483025.hd.mp4?s=dad6552e9c8292e5acf66104db59aa2184566057&profile_id=175",
    },
  ];

  const HeadingTag = headingLevel || "h3";

  return (
    <section className={`${className || "mb-20 md:mb-32"}`}>
      <StyledSlider className="relative">
        <header className="md:absolute md:top-8 lg:top-10 xl:top-14 inset-x-0 text-center z-10">
          <HeadingTag className="md:text-white">Employee Stories</HeadingTag>
        </header>
        <Slider>
          {successStories.map((successStory, i) => {
            return (
              <div key={i}>
                <video src={successStory.video} controls />
              </div>
            );
          })}
        </Slider>
      </StyledSlider>
    </section>
  );
};

export default EmployeeServices;
