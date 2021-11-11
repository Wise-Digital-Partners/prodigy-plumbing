import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

function AuthorList({ items }) {
  return (
    <div>
      <ul>
        {items.map(({ author, _key }) => {
          const authorName = author && author.name;
          return (
            <li key={_key} className="flex items-center">
              <div>
                {author && author.image && author.image.asset && (
                  <GatsbyImage
                    image={author.image.asset.gatsbyImageData}
                    className="rounded-full w-11 h-11"
                  />
                )}
              </div>
              <div>{authorName || "Missing name"}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AuthorList;
