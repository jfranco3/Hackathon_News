import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

// a. Fetches data and holds it in state
// b. Then passes as props to LIST ARTICLES
// c. Passes methods as props to SEARCH FORM

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
      <ArticleCard stories={stories} />
    </div>
  );
}

//
