import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Button = ({
  className,
  href,
  outboundLink,
  modal,
  onClick,
  type,
  altStyle,
  icon,
  text,
}) => {
  const Tag = href ? AniLink : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";
  let link = true;

  href && (link = !href.includes("tel:") && !href.includes("mailto:"));

  return (
    <Tag
      className={`group relative overflow-hidden min-w-[160px] h-[47px] px-4 rounded-xl inline-flex items-center justify-center text-center font-body font-black no-underline whitespace-nowrap ${
        altStyle
          ? "bg-secondary-800 hover:bg-primary-300 text-white hover:text-gray-900"
          : "bg-primary-500 hover:bg-primary-500/70 text-white hover:text-white"
      } ${className || ""}`}
      {...(link ? { fade: "true", to: href } : { href: href })}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
      alt-style={altStyle}
    >
      {icon && (
        <i
          className={`mr-2 relative left-0 group-hover:left-2 transition-all duration-300 ease-linear z-10 ${
            altStyle ? "text-white" : "text-white"
          } ${icon}`}
        ></i>
      )}
      {text}
    </Tag>
  );
};

export default Button;
