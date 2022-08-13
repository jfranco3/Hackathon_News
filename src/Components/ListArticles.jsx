import React from "react";
import ArticleCard from "./ArticleCard";

export default function ListArticles(props) {
  const { stories, setStories } = props;
  console.log("stories", stories);
  return (
    <div>
      {stories.map((story) => (
        <ArticleCard
          title={story.title}
          author={story.author}
          url={story.url}
          createdAt={story.created_at}
          numComments={story.num_comments}
          objectId={story.objectID}
          points={story.points}
        />
      ))}
    </div>
  );
}
