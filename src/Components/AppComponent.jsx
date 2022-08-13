import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import ListArticles from "./ListArticles";
import SearchForm from "./SearchForm";

// a. Fetches data and holds it in state
// b. Then passes as props to LIST ARTICLES
// c. Passes methods as props to SEARCH FORM
// This is jenn and I trying to figure this out
// Zak is here now

export default function AppComponent() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchstories = () => {
      fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          setStories(response.hits);
        });
    };
    fetchstories();
  }, []);

  return (
    <div>
      <ArticleCard stories={stories} setStories={setStories} />
      <ListArticles stories={stories} setStories={setStories} />
      <SearchForm stories={stories} setStories={setStories} />
    </div>
  );
}
