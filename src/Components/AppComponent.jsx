import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import ListArticles from "./ListArticles";
import SearchForm from "./SearchForm";

// a. Fetches data and holds it in state
// b. Then passes as props to LIST ARTICLES
// c. Passes methods as props to SEARCH FORM

export default function AppComponent() {
  const [stories, setStories] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchstories = () => {
      fetch("http://hn.algolia.com/api/v1/search?tags=story&hitsPerPage=100")
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          setStories(response.hits);
        });
    };

    fetchstories();
  }, [sort]);

  return (
    <div>
      <SearchForm
        stories={stories}
        setStories={setStories}
        sort={sort}
        setSort={setSort}
      />
      <ListArticles stories={stories} setStories={setStories} sort={sort} />
    </div>
  );
}
