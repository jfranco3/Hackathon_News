import React from "react";

export default function ArticleCard(props) {
  const {
    stories,
    setStories,
    title,
    author,
    url,
    createdAt,
    numComments,
    objectId,
    points,
  } = props;
  console.log("PROPS", props.stories);
  return <div>{title}</div>;
}
