export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "618d528195e03a279bfd675a",
                  title: "Sanity Studio",
                  name: "prodigy-plumbing-studio",
                  apiId: "7176ca1d-948b-44a8-b8fc-db1e255a5591",
                },
                {
                  buildHookId: "618d528195e03a2addfd67ed",
                  title: "Blog Website",
                  name: "prodigy-plumbing",
                  apiId: "f80dfe47-f548-4f8f-b093-78fe2de118cb",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/hamletavetisian/prodigy-plumbing",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://prodigy-plumbing.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
