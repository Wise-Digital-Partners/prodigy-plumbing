// import unitedStates from "../objects/unitedStates";

export default {
   title: "Cities",
   name: "cities",
   type: "document",
   fields: [
      {
         title: "Title",
         name: "title",
         type: "string",
         validation: (Rule) => Rule.required(),
      },
      {
         title: "Slug",
         description: "Exclude leading and trailing backslashes",
         name: "slug",
         type: "slug",
         options: {
            source: "title",
         },
         validation: (Rule) => Rule.required(),
      },
      {
         title: "SEO Title",
         name: "seoTitle",
         type: "string",
      },
      {
         title: "Meta Description",
         name: "metaDescription",
         type: "text",
      },
      {
         name: "heroTitle",
         type: "string",
         title: "Hero Title",
      },      
      {
         name: "footerText",
         type: "string",
         title: "Footer Navigation Text",
      },     
      {
         name: "heroText",
         type: "string",
         title: "Hero Text",
      },
      // {
      //    title: "State",
      //    name: "state",
      //    type: "string",
      //    options: {
      //       list: [...unitedStates],
      //    },
      //    validation: (Rule) => Rule.required(),
      // },
      // {
      //    title: "Hero Desktop",
      //    name: "heroDesktop",
      //    type: "image",
      //    validation: (Rule) => Rule.required(),
      // },
      // {
      //    title: "Hero Mobile",
      //    name: "heroMobile",
      //    type: "image",
      //    validation: (Rule) => Rule.required(),
      // },
      {
         title: "Why We Love Image",
         name: "whyWeLoveImage",
         type: "image",
      },
      {
         title: "Why We Love Title",
         name: "whyWeLoveTitle",
         type: "string",
      },
      {
         title: "Why We Love Text",
         name: "whyWeLoveText",
         type: "bodyPortableText",
      },      
      {
         title: "Footer CTA Text",
         name: "footerCTAText",
         type: "string",
      },
      {
         title: "Order",
         name: "order",
         type: "number",
         hidden: true,
      },
   ],
   orderings: [
      {
         title: "Manual order",
         name: "manualOrder",
         by: [{ field: "order", direction: "asc" }],
      },
      {
         title: "A>Z",
         name: "alphabeticalAsc",
         by: [
            {
               field: "title",
               direction: "asc",
            },
         ],
      },
      {
         title: "Z->A",
         name: "alphabeticalDesc",
         by: [
            {
               field: "title",
               direction: "desc",
            },
         ],
      },
   ],
   preview: {
      select: {
         title: "title",
         slug: "slug",
         media: "cityImage",
      },
      prepare({ title = "No title", slug = {}, media }) {
         return {
            title,
            subtitle: `/${slug.current}/`,
            media,
         };
      },
   },
};
