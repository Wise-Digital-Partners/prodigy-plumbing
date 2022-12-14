export default {
  title: "Accordion",
  name: "accordion",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Text",
      name: "text",
      type: "bodyPortableText",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Link",
      description:
        "Should be a relative path with leading and trailing backlashes - /parent-page/child-page/",
      name: "link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
          allowRelative: true,
        }),
    },
  ],
};
