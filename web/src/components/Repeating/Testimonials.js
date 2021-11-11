import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Slider from "../Slider/SliderTestimonials";

const Testimonial = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      google: file(
        relativePath: { eq: "repeating/Reputation Badges/Google.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 84)
        }
      }
      yelp: file(relativePath: { eq: "repeating/Reputation Badges/Yelp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 65)
        }
      }
      facebook: file(
        relativePath: { eq: "repeating/Reputation Badges/Facebook.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 100)
        }
      }
      angiesList: file(
        relativePath: { eq: "repeating/Reputation Badges/Angies List.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 115)
        }
      }
      headshot: file(
        relativePath: { eq: "repeating/testimonials/headshot.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 60)
        }
      }
    }
  `);
  const testimonials = [
    {
      id: 1,
      quote:
        "Prodigy is our go-to when we have a plumbing problem as I feel the plumbers they send are always honest about repairs that do and do not need to be made. Jerry was so helpful in replacing our garbage disposal and went above and beyond to fix previous less than stellar work that was done under our kitchen sink. Thanks Jerry! Prodigy will always be our first call.",
      name: "Kristen T.",
      headshot: data.headshot.childImageSharp.gatsbyImageData,
      platform: data.google.childImageSharp.gatsbyImageData,
      category: "Quality Service",
    },
    {
      id: 2,
      quote:
        "Phil was incredible. I loved how efficient he was, fixed my issue without having to escalate it further. Documented everything, in and out real quick. Very clean and would definitely recommend him if you need a plumber.  Phil, I'm calling you up next time I need any plumbing fixes!!!",
      name: "Candy D. / Lakewood, CA",
      headshot: data.headshot.childImageSharp.gatsbyImageData,
      platform: data.yelp.childImageSharp.gatsbyImageData,
      category: "Quality Service",
    },
    {
      id: 3,
      quote:
        "Steven came out to fix clogged shower and bathtub. Got here on time and did an excellent job. Neat and efficient. Will be calling him back for future work. Very reasonable priced. Highly recommended.",
      name: "Deborah",
      headshot: data.headshot.childImageSharp.gatsbyImageData,
      platform: data.facebook.childImageSharp.gatsbyImageData,
      category: "Quality Service",
    },
    {
      id: 1,
      quote:
        "Prodigy is our go-to when we have a plumbing problem as I feel the plumbers they send are always honest about repairs that do and do not need to be made. Jerry was so helpful in replacing our garbage disposal and went above and beyond to fix previous less than stellar work that was done under our kitchen sink. Thanks Jerry! Prodigy will always be our first call.",
      name: "Kristen T.",
      headshot: data.headshot.childImageSharp.gatsbyImageData,
      platform: data.angiesList.childImageSharp.gatsbyImageData,
      category: "Timeliness",
    },
    {
      id: 2,
      quote:
        "Phil was incredible. I loved how efficient he was, fixed my issue without having to escalate it further. Documented everything, in and out real quick. Very clean and would definitely recommend him if you need a plumber.  Phil, I'm calling you up next time I need any plumbing fixes!!!",
      name: "Candy D. / Lakewood, CA",
      headshot: data.headshot.childImageSharp.gatsbyImageData,
      platform: data.google.childImageSharp.gatsbyImageData,
      category: "Timeliness",
    },
    {
      id: 3,
      quote:
        "Steven came out to fix clogged shower and bathtub. Got here on time and did an excellent job. Neat and efficient. Will be calling him back for future work. Very reasonable priced. Highly recommended.",
      name: "Deborah",
      headshot: data.headshot.childImageSharp.gatsbyImageData,
      platform: data.yelp.childImageSharp.gatsbyImageData,
      category: "Timeliness",
    },

    {
      id: 1,
      quote:
        "Prodigy is our go-to when we have a plumbing problem as I feel the plumbers they send are always honest about repairs that do and do not need to be made. Jerry was so helpful in replacing our garbage disposal and went above and beyond to fix previous less than stellar work that was done under our kitchen sink. Thanks Jerry! Prodigy will always be our first call.",
      name: "Kristen T.",
      headshot: data.headshot.childImageSharp.gatsbyImageData,
      platform: data.yelp.childImageSharp.gatsbyImageData,
      category: "Professionalism",
    },
    {
      id: 2,
      quote:
        "Phil was incredible. I loved how efficient he was, fixed my issue without having to escalate it further. Documented everything, in and out real quick. Very clean and would definitely recommend him if you need a plumber.  Phil, I'm calling you up next time I need any plumbing fixes!!!",
      name: "Candy D. / Lakewood, CA",
      headshot: data.headshot.childImageSharp.gatsbyImageData,
      platform: data.yelp.childImageSharp.gatsbyImageData,
      category: "Professionalism",
    },
    {
      id: 3,
      quote:
        "Steven came out to fix clogged shower and bathtub. Got here on time and did an excellent job. Neat and efficient. Will be calling him back for future work. Very reasonable priced. Highly recommended.",
      name: "Deborah",
      headshot: data.headshot.childImageSharp.gatsbyImageData,
      platform: data.google.childImageSharp.gatsbyImageData,
      category: "Professionalism",
    },

    {
      id: 1,
      quote:
        "Prodigy is our go-to when we have a plumbing problem as I feel the plumbers they send are always honest about repairs that do and do not need to be made. Jerry was so helpful in replacing our garbage disposal and went above and beyond to fix previous less than stellar work that was done under our kitchen sink. Thanks Jerry! Prodigy will always be our first call.",
      name: "Kristen T.",
      headshot: data.headshot.childImageSharp.gatsbyImageData,
      platform: data.facebook.childImageSharp.gatsbyImageData,
      category: "Value",
    },
    {
      id: 2,
      quote:
        "Phil was incredible. I loved how efficient he was, fixed my issue without having to escalate it further. Documented everything, in and out real quick. Very clean and would definitely recommend him if you need a plumber.  Phil, I'm calling you up next time I need any plumbing fixes!!!",
      name: "Candy D. / Lakewood, CA",
      headshot: data.headshot.childImageSharp.gatsbyImageData,
      platform: data.angiesList.childImageSharp.gatsbyImageData,
      category: "Value",
    },
    {
      id: 3,
      quote:
        "Steven came out to fix clogged shower and bathtub. Got here on time and did an excellent job. Neat and efficient. Will be calling him back for future work. Very reasonable priced. Highly recommended.",
      name: "Deborah",
      headshot: data.headshot.childImageSharp.gatsbyImageData,
      platform: data.angiesList.childImageSharp.gatsbyImageData,
      category: "Value",
    },

    {
      id: 1,
      quote:
        "Prodigy is our go-to when we have a plumbing problem as I feel the plumbers they send are always honest about repairs that do and do not need to be made. Jerry was so helpful in replacing our garbage disposal and went above and beyond to fix previous less than stellar work that was done under our kitchen sink. Thanks Jerry! Prodigy will always be our first call.",
      name: "Kristen T.",
      headshot: data.headshot.childImageSharp.gatsbyImageData,
      platform: data.google.childImageSharp.gatsbyImageData,
      category: "Knowledgable",
    },
    {
      id: 2,
      quote:
        "Phil was incredible. I loved how efficient he was, fixed my issue without having to escalate it further. Documented everything, in and out real quick. Very clean and would definitely recommend him if you need a plumber.  Phil, I'm calling you up next time I need any plumbing fixes!!!",
      name: "Candy D. / Lakewood, CA",
      headshot: data.headshot.childImageSharp.gatsbyImageData,
      platform: data.google.childImageSharp.gatsbyImageData,
      category: "Knowledgable",
    },
    {
      id: 3,
      quote:
        "Steven came out to fix clogged shower and bathtub. Got here on time and did an excellent job. Neat and efficient. Will be calling him back for future work. Very reasonable priced. Highly recommended.",
      name: "Deborah",
      headshot: data.headshot.childImageSharp.gatsbyImageData,
      platform: data.yelp.childImageSharp.gatsbyImageData,
      category: "Knowledgable",
    },
  ];

  // const HeadingTag = headingLevel || "h2";

  return (
    <section
      className={`relative overflow-x-hidden bg-secondary-400/20 ${
        className || "mb-20 md:mb-32"
      }`}
    >
      <div className="container">
        <Slider slides={testimonials}></Slider>
      </div>
    </section>
  );
};

export default Testimonial;
