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
    }
  `);
  const testimonials = [
    {
      id: 1,
      quote:
        "Prodigy is our go-to when we have a plumbing problem as I feel the plumbers they send are always honest about repairs that do and do not need to be made. Jerry was so helpful in replacing our garbage disposal and went above and beyond to fix previous less than stellar work that was done under our kitchen sink. Thanks Jerry! Prodigy will always be our first call.",
      name: "Kristen T.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      category: "Quality Service",
    },
    {
      id: 2,
      quote:
        "Phil was incredible. I loved how efficient he was, fixed my issue without having to escalate it further. Documented everything, in and out real quick. Very clean and would definitely recommend him if you need a plumber.  Phil, I'm calling you up next time I need any plumbing fixes!!!",
      name: "Toby I.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      category: "Quality Service",
    },
    {
      id: 3,
      quote:
        "Steven came out to fix clogged shower and bathtub. Got here on time and did an excellent job. Neat and efficient. Will be calling him back for future work. Very reasonable priced. Highly recommended.",
      name: "Deborah",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      category: "Quality Service",
    },
    {
      id: 1,
      quote:
        "Called on Wednesday and the next day Luis showed up early and got right to fixing the leak in our copper pipe in the overhead in our kitchen.  90 minutes later he was done and we had no leak.   Excellent work.  Thanks Luis!",
      name: "Allen Austin",
      platform: data.google.childImageSharp.gatsbyImageData,
      category: "Timeliness",
    },
    {
      id: 2,
      quote:
        "Luis did an awesome job fixing our kitchen sink leak. Was very knowledgeable, fast and precise with his work. Would definitely use and recommend Prodigy Plumbing!",
      name: "Kristine Encinas LeonGuerrero",
      platform: data.google.childImageSharp.gatsbyImageData,
      category: "Timeliness",
    },
    {
      id: 3,
      quote:
        "From start to finish, working with Prodigy was fantastic. It was easy to book an appointment and the plumber arrived in the window he said he would. I even got a call in the morning prior to arrival letting me know when I could expect him to arrive. Jerry was the technician I had and he was friendly and reliable. I highly recommend Prodigy and will use them again when I have a plumbing need.",
      name: "Jennifer M.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      category: "Timeliness",
    },

    {
      id: 1,
      quote:
        "Steven came out to install a reverse osmosis for me. Explained the process and even made a suggestion based things I mentioned I had on a wish list of updates for my home. He was very attentive, thank you Steven.",
      name: "Eileen F.",
      platform: data.google.childImageSharp.gatsbyImageData,
      category: "Professionalism",
    },
    {
      id: 2,
      quote:
        "Osie was personable, professional and patient with consultation. He was informative, as to the process of disconnection and needed parts for re-install. While I have never taken Plumbing 101, I feel comfortable in my knowledge and at ease with moving forward to obtain future service from Prodigy Plumbing.",
      name: "M. Kae",
      platform: data.google.childImageSharp.gatsbyImageData,
      category: "Professionalism",
    },
    {
      id: 3,
      quote:
        "I had leaking problems and I found Prodigy Plumbing on Google.  They were experts at their job and they were great! Jerry and Steven, the plumbing technicians were very kind and professional.  Also, the A/C experts, Dino was a really great person to work with.  The customer service was excellent too!  They removed the problems and also my stress!  Thank you!",
      name: "Hyunah K.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      category: "Professionalism",
    },

    {
      id: 1,
      quote:
        "What I like about this company is that they seem honest and do quality work. I’ve had them work in my family’s house and their quotes are always detailed and much more reasonable that other quotes that I’ve received from other businesses who appear to have quoted me solutions that were not necessary and more expensive. Obviously, Prodigy Plumbing is looking for repeat customers, and I think they achieve that goal.",
      name: "Derrick Lee",
      platform: data.google.childImageSharp.gatsbyImageData,
      category: "Value",
    },
    {
      id: 2,
      quote:
        "Jerry and Enrique were very professional, considerate and punctual. I had a faulty sewer line and a possible gas leak under the house. Prodigy Plumbing was actually the second company I called out to assess and quote the necessary repairs. Prodigy produced a competitive quote and did the work on the same day. Highly recommend!",
      name: "A. J. T.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      category: "Value",
    },
    {
      id: 3,
      quote:
        "Alexis arrived on time for both of our appointments and solved our problem quickly.  It was helpful to receive an accurate quote on all work before the work was performed - no surprises and the quote was accurate down to the cent.  We had a great experience with Prodigy and Alexis was great to work with.",
      name: "Jonathan C.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      category: "Value",
    },

    {
      id: 1,
      quote:
        "Jerry from Prodigy Plumbing is our favorite technician ever - hands down! He went above and beyond to explain to us our plumbing issues. You feel safe with Jerry - he's got your back.",
      name: "Sylvia Aguiñaga",
      platform: data.google.childImageSharp.gatsbyImageData,
      category: "Knowledgeable",
    },
    {
      id: 2,
      quote:
        "Quick easy and effective! Steven did a more than thorough job not only taking care of our clogged pipes, but also gathering info and videos of all the blockages and problems in the pipes. He got her very quickly after my call and helped even set up the appointment for the cleaners to come and take care of the inside of my home after as well. Excellent service and excellent technician. Thank you guys! Will refer!",
      name: "Gary O.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      category: "Knowledgeable",
    },
    {
      id: 3,
      quote:
        "Our kitchen sink has been a problem for a few months. Steven from Prodigy Plumbing arrived on time and cleaned out the large amount of sludge causing the back up and replaced an old rusty pipe. He also let us know what to avoid putting down the drain to help avoid the problem in the future. I would definitely use this company again!",
      name: "Ashley O.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      category: "Knowledgeable",
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
