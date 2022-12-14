export default {
  title: "Heading & Text",
  name: "headingText",
  type: "object",
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Text",
      name: "text",
      type: "bodyPortableText",
      validation: (Rule) => Rule.required(),
    },
  ],
};
