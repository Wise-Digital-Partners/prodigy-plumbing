export default {
  name: "author",
  type: "document",
  title: "Blog Author",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "image",
      type: "mainImage",
      title: "Image",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
