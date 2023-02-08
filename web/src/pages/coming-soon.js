import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Hero from "../components/Hero/HeroFullWidth";
import logo from "../images/coming-soon/Logo.svg"
import badge from "../images/coming-soon/badge.svg"
import ButtonGhost from "../components/Button/ButtonGhost";



const Page = ({ data }) => {
    return (
        <Hero
            textAlignment="text-center"
            textMaxWidth="w-full"
            backgroundImages={data.heroDesktop.childImageSharp.gatsbyImageData}
            backgroundSize="cover"
            className="h-screen min-h-full overflow-x-hidden backdrop-blur-sm"
            padding="md:py-20 py-140"
        >
            <section className="pt-[6.5rem] px-5 md:px-14 md:pt-16  md:pb-32 relative">

                <div className="bg-secondary-800 rounded-3xl max-w-[960px] mx-auto  py-18 ">
                    {/* logo */}
                    <div className="relative w-full flex justify-center">
                        <div className="absolute -top-[150px]">
                            <img className="w-[calc(38% + 12rem)] mx-auto" src={logo} />
                        </div>
                    </div>
                    {/* end of logo */}
                    <div className="text-center h-full  md:py-10 px-4   ">
                        {/* h1 and p */}
                        <div className="h-full  flex flex-col justify-center gap-y-5">
                            <h1 className="text-white mb-0 md:text-[38px] md:leading-[52px] font-black ">
                                <span className="text-[#A8DCDF] block md:inline">New Name.</span> Same Great Service.
                            </h1>
                          
                            <div className="block"> 
                                <p className="md:max-w-[550px] md:mx-auto  text-white mb-2">
                                    We're thrilled to team up with the industry professionals at <a className="relative overflow-hidden hover:text-white transition-all ease duration-300" href="/">Prodigy</a>, a leading Los Angeles County plumbing and HVAC company that consistently earns 5-star ratings from its customers.
                                </p>
                                <p className="md:max-w-[550px] md:mx-auto  text-white mb-4.5">
                                    If you're one of our valued customers, rest assured you'll get the same outstanding service you always have. Call us today to make an appointment.</p>
                                    </div>
                            <ButtonGhost
                                className="md:max-w-[160px] mx-auto "
                            altStyle={1}
                            customClass
                                href="tel:562-413-1928"
                                text={[
                                    <i className="fas fa-phone text-primary-500 group-hover:text-white mr-2.5 transition-colors duration-300 ease-linear"></i>,
                                    "562-413-1928",
                                ]}
                            />
                        </div>
                        {/* end of h1 and p */}
                    </div>
                    {/* badge */}
                    <div className="relative w-full flex justify-center">
                        <div className="absolute top-0 right-[calc(0%-2rem)] lg:right-[calc(0%-5rem)]">
                            <img className="w-[120px] mx-auto" src={badge} />
                        </div>
                    </div>
                    {/* end of badge */}
                </div>
            </section>

        </Hero>


    );
};
export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Sewer-Camera.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Sewer-Camera.jpg" }
    ) {
      publicURL
    }
    badge: file(relativePath: { eq: "coming-soon/badge.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 234)
      }
    }     
    logo: file(relativePath: { eq: "coming-soon/Logo.png" }) {
      childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, width: 223)
      }
    }    
    heroDesktop: file(relativePath: { eq: "coming-soon/Desktop background.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }    
    heroMobile: file(relativePath: { eq: "coming-soon/Mobile background.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
export default Page;
