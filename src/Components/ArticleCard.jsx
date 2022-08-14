import React from "react";

export default function ArticleCard(props) {
  const { title, author, url, createdAt, numComments, objectId, points } =
    props;
    
  return (
    <div>
      {title} <p>{points}</p>
    </div>
  );
}
