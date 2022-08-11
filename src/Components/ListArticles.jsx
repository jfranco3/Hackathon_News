import React from "react";
import ArticleCard from "./ArticleCard";

export default function ListArticles(props) {
  const { stories, setStories } = props;
  return (
    <div>
      <ArticleCard />
    </div>
  );
}
