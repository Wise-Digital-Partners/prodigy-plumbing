import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Button = ({
  className,
  href,
  outboundLink,
  onClick,
  type,
  altStyle,
  text,
}) => {
  const Tag = href.includes("#") ? AnchorLink : href ? AniLink : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";
  let link = true;

  href &&
    (link =
      !href.includes("tel:") &&
      !href.includes("mailto:") &&
      !href.includes("#"));

  return (
    <Tag
      className={`group font-body font-black inline-flex items-center justify-center space-x-2.5 ${
        altStyle
          ? `text-white`
          : `text-primary-500 hover:text-primary-500 group-hover:text-primary-500`
      } ${className}`}
      {...(link ? { fade: "true", to: href } : { href: href })}
      offset="100"
      target={target}
      rel={rel}
      onClick={onClick}
      type={type}
      alt-style={altStyle}
    >
      <i className="far fa-arrow-right text-xl relative left-0 group-hover:left-1 transition-all duration-300 ease-linear"></i>

      <div>{text}</div>
    </Tag>
  );
};

export default Button;
