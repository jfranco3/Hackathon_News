import React, { useState } from "react";
import axios from "axios";
// import TextField from "@mui/material/TextField";
//A) search by tag, date, author and title (see API documentation)
//B) Uses method passed as props to store filtered data in API

export default function SearchForm(props) {
  const { stories, setStories } = props;
  const [input, setInput] = useState("");
  const [selector, setSelector] = useState("title");
  // console.log("stories", stories);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSelect = (event) => {
    setSelector(event.target.value);
  };

  const searchByTitle = () => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${input}`)
      .then((response) => {
        setStories(response.data.hits);
      });
  };

  const searchByAuthor = () => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?tags=author_${input}`)
      .then((response) => {
        setStories(response.data.hits);
      });
  };

  const searchByDate = () => {
    axios
      .get(`http://hn.algolia.com/api/v1/search_by_date?query=${input}`)
      .then((response) => {
        setStories(response.data.hits);
      });
  };

  const searchByTag = () => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?tags=${input}`)
      .then((response) => {
        setStories(response.data.hits);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selector === "title") {
      searchByTitle();
    }
    if (selector === "author") {
      searchByAuthor();
    }
    if (selector === "date") {
      searchByDate();
    }
    if (selector === "tag") {
      searchByTag();
    }
  };

  console.log("stories", stories);
  return (
    <div>
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <form onSubmit={handleSubmit}>
        <label for="hnSearch">Hacker News Search: </label>

        <input
          id="hnSearch"
          placeholder="Search..."
          type="text"
          onChange={handleChange}
          value={input}
        />
        <input type="submit" value="Submit"></input>
        <label for="search-by">Search By: </label>
        <select onChange={handleSelect} name="search-by" id="search-by">
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="tag">Tag</option>
          <option value="date">Date</option>
        </select>
      </form>
    </div>
  );
}
