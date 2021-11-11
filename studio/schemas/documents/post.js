import { format } from "date-fns";

export default {
  name: "post",
  type: "document",
  title: "Blog Post",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "seoTitle",
      type: "string",
      title: "SEO Title",
    },
    {
      name: "metaDescription",
      type: "string",
      title: "Meta Description",
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main image",
    },
    {
      name: "authors",
      title: "Authors",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "author",
          },
        },
      ],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "category",
          },
        },
      ],
    },
    {
      name: "body",
      type: "bodyPortableText",
      title: "Body",
    },
  ],
  orderings: [
    {
      name: "publishingDateAsc",
      title: "Publishing date new–>old",
      by: [
        {
          field: "publishedAt",
          direction: "asc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "publishingDateDesc",
      title: "Publishing date old->new",
      by: [
        {
          field: "publishedAt",
          direction: "desc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "mainImage",
    },
    prepare({ title = "No title", publishedAt, slug = {}, media }) {
      const dateSegment = format(new Date(publishedAt), "yyyy/MM");
      const path = `/${dateSegment}/${slug.current}/`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : "Missing publishing date",
      };
    },
  },
};
