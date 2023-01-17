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
  customClass
}) => {
  const Tag = href ? AniLink : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";
  let link = true;

  href && (link = !href.includes("tel:") && !href.includes("mailto:"));

  return (
    <Tag
      className={`group relative overflow-hidden border border-solid min-w-[160px] h-[45px] px-4 rounded-xl inline-flex items-center justify-center text-center font-body font-black no-underline whitespace-nowrap ${
        altStyle
          ? "text-white hover:text-white bg-transparent hover:bg-primary-500 border-primary-500 hover:border-primary-500"
          : "text-secondary-800 hover:text-white bg-transparent hover:bg-primary-500 border-primary-500 hover:border-primary-500"
      } ${className || ""} ${customClass ? "border-white border-solid border-1" : "" } `}
      {...(link ? { fade: "true", to: href } : { href: href })}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
      alt-style={altStyle}
    >
      {text}
      {icon && (
        <i
          className={`ml-2 text-lg relative left-0 group-hover:left-2 transition-all duration-300 ease-linear ${
            altStyle ? "text-white" : "text-gray-900"
          } ${icon}`}
        ></i>
      )}
    </Tag>
  );
};

export default Button;
