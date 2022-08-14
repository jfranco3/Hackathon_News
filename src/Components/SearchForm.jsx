import React from "react";

export default function SearchForm(props) {
  const { stories, setStories, sort, setSort } = props;

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value=""></option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
}
