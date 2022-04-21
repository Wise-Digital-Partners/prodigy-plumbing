import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const PlumbingSideNav = ({ hiddenLink }) => {
  const plumbing = [
    {
      name: "Residential & Commercial Plumbing",
      link: "/commercial-plumbing/",
    },
    {
      name: "Hydro Jetting",
      link: "/hydro-jetting-services/",
    },
    {
      name: "Sewer Camera Inspection",
      link: "/sewer-camera-inspection-services/",
    },
    {
      name: "Galvanized Pipe Replacement",
      link: "/galvanized-pipe-replacement/",
    },
    {
      name: "Trenchless Sewer Repair & Replacement",
      link: "/trenchless-sewer-repair-replacement/",
    },
    {
      name: "Tree Root Intrusion",
      link: "/tree-root-intrusion/",
    },
    {
      name: "Water Heater Repair & Installation",
      link: "/water-heater-repair-installation/",
    },
    {
      name: "Drain Cleaning & Repairs",
      link: "/drain-cleaning-repair-services/",
    },
    {
      name: "HVAC Repair & Installation",
      link: "/hvac-long-beach-la/",
    },
  ];

  return (
    <>
      <h3 className="heading-four normal-case">Here's What Else We Do</h3>
      <ul className="flex flex-col space-y-4 border-t border-gray-200 pt-3.5 mt-8">
        {plumbing.map(
          (item, i) =>
            i !== hiddenLink && (
              <li key={i} className="border-b border-gray-200 pb-3.5">
                <AniLink
                  fade
                  to={item.link}
                  className="font-heading font-bold text-primary-500 hover:text-secondary-800"
                >
                  {item.name}
                </AniLink>
              </li>
            )
        )}
      </ul>
    </>
  );
};

export default PlumbingSideNav;
