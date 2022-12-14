export default {
   title: "Coordinates",
   name: "coordinates",
   description: "https://www.latlong.net/",
   type: "object",
   fields: [
      {
         title: "Latitude",
         name: "latitude",
         type: "string",
         validation: (Rule) => Rule.required(),
      },
      {
         title: "Longitude",
         name: "longitude",
         type: "string",
         validation: (Rule) => Rule.required(),
      },
   ],
};
