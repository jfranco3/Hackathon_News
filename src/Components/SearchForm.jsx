import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
//A) search by tag, date, author and title (see API documentation)
//B) Uses method passed as props to store filtered data in API

export default function SearchForm(props) {
  const [input, setInput] = useState("");
  const { stories, setStories } = props;
  // console.log("stories", stories);

  const handleChange = (event) => {
    setInput(event.target.value)
  };
  
  console.log("input", input);
  return (
    <div>
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <form>
        <label>
          <input
            placeholder="Search..."
            type="text"
            onChange={handleChange}
            value={input}
          
          />
        </label>
      </form>
    </div>
  );
}
