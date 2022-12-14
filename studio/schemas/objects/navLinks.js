export default {
  title: "Navigation Links",
  name: "navLinks",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "link",
      description:
        "Should be a relative path with leading and trailing backlashes - /parent-page/child-page/",
      type: "url",
      title: "Link",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
          allowRelative: true,
        }),
    },
  ],
};
