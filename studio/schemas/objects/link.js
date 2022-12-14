export default {
  title: "Link",
  name: "link",
  type: "object",
  fields: [
    {
      title: "Text",
      name: "text",
      type: "string",
    },
    {
      title: "URL",
      name: "href",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
          allowRelative: true,
        }),
    },
    {
      title: "Open in new tab",
      name: "newTab",
      type: "boolean",
    },
  ],
};
