import React from "react";

const Preview = ({ value }) => {
  const { url, height } = value;
  return <iframe src={url} width="100%" height={`${height}px`} />;
};

export default {
  name: "iframe",
  type: "object",
  title: "Iframe",
  fields: [
    {
      name: "url",
      type: "url",
      title: "Source URL",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
          allowRelative: true,
        }).required(),
    },
    {
      name: "height",
      description: "px will be appended",
      type: "number",
      title: "Height",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      url: "url",
      height: "height",
    },
    component: Preview,
  },
};
