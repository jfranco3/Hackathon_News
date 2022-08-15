import React from "react";
import ArticleCard from "./ArticleCard";

export default function ListArticles(props) {
  const { stories, setStories, sort } = props;
  console.log("stories", stories);
  if (sort === "popularity") {
    return stories
      .sort((a, b) => {
        console.log(a.points, "and", b.points);
        return a.points - b.points;
      })
      .map((story) => (
        <ArticleCard
          title={story.title}
          author={story.author}
          url={story.url}
          createdAt={story.created_at}
          numComments={story.num_comments}
          objectId={story.objectID}
          points={story.points}
        />
      ));
  }

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
