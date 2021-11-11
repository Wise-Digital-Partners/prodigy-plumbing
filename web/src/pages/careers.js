import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import About from "../components/Repeating/About";
import EmployeeStories from "../components/Repeating/EmployeeStories";
import ModalJobDescription from "../components/Modal/ModalJobDescription";
import ModalApply from "../components/Modal/ModalApply";
import ButtonWithIcon from "../components/Button/ButtonWithIcon";

const Page = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const content = {
    jobs: [
      {
        position: "Certified Plumber",
        description: (
          <>
            <div className="mb-5">
              <div className="font-bold">Location:</div>
              <p className="mb-0">Cerritos, CA</p>
            </div>

            <div className="mb-5">
              <div className="font-bold">Salary:</div>
              <p className="mb-0">Negotiable</p>
            </div>

            <div className="mb-5">
              <div className="font-bold">Job Type:</div>
              <p className="mb-0">Full-time</p>
            </div>

            <div className="mb-5">
              <div className="font-bold mb-4">Benefits:</div>
              <ul className="list-disc pl-5 mb-6">
                <li>Medical</li>
                <li>6 Paid Holidays</li>
                <li>3 Paid Annual Sick Days</li>
                <li>1 Week Vacation after an annual year of employment</li>
                <li>
                  Fully Stocked Truck – Gas Card and Company Credit Card for
                  Supplies
                </li>
                <li>Company Phone</li>
                <li>Company Apple iPad Tablet</li>
                <li>Uniforms that are laundered weekly</li>
                <li>Professionals Sales Training</li>
                <li>Sales Incentives</li>
                <li>Latest Technology is Dispatch Systems</li>
              </ul>
              <p>
                We are searching for a propelled individual to join our bustling
                plumbing service company. Join one of the fastest-growing
                plumbing companies where we care about your success! At Prodigy
                Plumbing, we promote inner personal growth and a healthy
                balanced work environment. We work together in getting the job
                done! GUNG HO!
              </p>
              <p className="mb-0">
                We need lead plumbers with top technical skills at a plumbing
                professional level related to replacement, installation,
                assembly, and servicing of plumbing and drainage systems in both
                residential and commercial environments. Knowledge of industry
                standards and local, state, and federal plumbing codes to all
                work performed. Maintain good customer relationships at all
                times.
              </p>
            </div>

            <div className="mb-5">
              <div className="font-bold mb-4">
                Essential Duties and Job Responsibilities:
              </div>
              <ul className="list-disc pl-5">
                <li>
                  Submit a detailed description of the solution by properly
                  diagnosing the customer issue and educating the customer on
                  their options. Secures proper signatures and contract
                  information before proceeding with any work.
                </li>
                <li>
                  Repair, maintain, install, replace, service, and inspect all
                  water, sewer, gas, and plumbing systems as applicable.
                </li>
                <li>
                  Clean drains in residential and commercial buildings by using
                  equipment provided but not limited to sewer and drain cleaning
                  machines using cables or rods.
                </li>
                <li>
                  Responds to service calls and troubleshoot plumbing problems
                  for solutions.
                </li>
                <li>
                  Maintain a clean, safe, and organized working environment
                  including job site, work vehicle, and shop.
                </li>
                <li>
                  Comply with all company policies and regulations and safety in
                  the performance of work-related duties.
                </li>
                <li>Performs other duties as required or assigned.</li>
              </ul>
            </div>

            <div className="mb-5">
              <div className="font-bold mb-4">Requirements:</div>
              <ul className="list-disc pl-5">
                <li>Valid Driver’s License</li>
                <li>Pass Drug Screening and Back Ground Check</li>
                <li>High School Diploma or Equivalent</li>
                <li>
                  Physical and Manual Dexterity – this position requires the
                  ability to use and manipulate tools of the trade. This may
                  include but is not limited to drain cleaning equipment,
                  jetters, drills, saws, various hand tools, torch, pipe
                  cutters, wrenches, etc. Must have the ability to work
                  skillfully with hands and have an average level of
                  eye/hand/foot coordination. Must be physically able to
                  actively work.
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <div className="font-bold">Experience:</div>
              <p className="mb-0">
                Plumbing Service and Repair: 3 years (Preferred)
              </p>
            </div>
          </>
        ),
      },
    ],
  };
  return (
    <Layout
      ctaHeading="Interested? Take The First Step"
      ctaText="If joining the Prodigy team sounds like a great move for you, let’s begin!"
      hideSubtext={true}
    >
      <SearchEngineOptimization
        title="Plumbing Careers in Cerritos & Long Beach | Prodigy"
        description="Want to work for the #1 rated plumber in Cerritos and Long Beach? If you’re a positive, dedicated team player, Prodigy Plumbers wants to hear from you."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="mb-20 md:mb-32 pt-12 md:pt-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-12 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Join The Prodigy Crew</h1>
              <p>
                Want to work for the #1 rated plumber in Cerritos and Long
                Beach? If you’re a positive, dedicated team player, we want to
                hear from you.
              </p>
              <ButtonWithIcon
                href="#open-positions"
                text="View Open Positions"
              />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage image={data.intro.childImageSharp.gatsbyImageData} />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-12 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <GatsbyImage
                image={data.important.childImageSharp.gatsbyImageData}
              />
            </div>
            <div>
              <h2>What’s Important To Us</h2>
              <p>
                We take pride in being the “best of the best” in the industry
                and recognize that our biggest strength is our team of dedicated
                employees. Our values are built on these pillars:
              </p>
              <ul className="list-arrows mt-0">
                <li>Our employees are not only a team; they’re family</li>
                <li>Personal development and growth is valuable</li>
                <li>A positive attitude and spirit makes all the difference</li>
                <li>
                  Building strong relationships with customers is key to our
                  success
                </li>
                <li>
                  Honesty and integrity are our two most important principles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-18 mb-20 md:mb-32">
        <div className="container">
          <blockquote className="text-center max-w-[856px] mx-auto">
            <q className="block text-secondary-400 text-xl md:text-3xl mb-5">
              I get up every day and come to work at Prodigy because it brings
              something out in me that I didn't even know was there. I get to
              team build. I get to see growth. At Prodigy, we don't just work on
              our trade. We work on ourselves.
            </q>
            <cite className="not-italic uppercase text-sm font-heading text-secondary-800">
              <span className="font-black">Matt Down</span>, General Manager
            </cite>
          </blockquote>
        </div>
      </section>

      <EmployeeStories />

      <section className="bg-gray-50 py-10 mb-20 md:mb-32" id="open-positions">
        <div className="container">
          <header className="mb-10">
            <h2>Open Positions</h2>
          </header>

          <div className="border-t border-gray-200 mb-12">
            {content.jobs.map((content, i) => {
              return (
                <button
                  aria-label="Modal trigger"
                  data-modal-open="modal-job-description"
                  onClick={() => setSlideIndex(i)}
                  className="group border-b border-gray-200 w-full py-6 text-gray-700 flex items-center justify-between space-x-4 text-center"
                  key={i}
                >
                  <span className="font-heading text-xl md:text-3xl font-semibold">
                    {content.position}
                  </span>
                  <div className="w-12 h-12 rounded-full flex justify-center items-center border border-primary-500 text-primary-500 group-hover:text-white group-hover:bg-primary-500 transition-colors duration-300 ease-in-out">
                    <i className="far fa-arrow-right"></i>
                  </div>
                </button>
              );
            })}
          </div>

          <p>
            Don't see a match? We'd still love to hear from you and encourage
            you to{" "}
            <button data-modal-open="modal-apply">send us your resume</button>.
          </p>
        </div>
      </section>

      <About />
      <ModalJobDescription slideIndex={slideIndex} slides={content.jobs} />
      <ModalApply />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
    ) {
      publicURL
    }
    intro: file(relativePath: { eq: "5.1 Careers/1.0 Hero.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 578)
      }
    }
    important: file(relativePath: { eq: "5.1 Careers/whats-important.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
