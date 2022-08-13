import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

export default function ArticleCard(props) {
  const { stories, setStories } = props;
  console.log("PROPS", props.stories);

  const handleClick = () => {
    window.open(props.url);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
          onClick={handleClick}
        ></Typography>
        <Typography variant="h5" component="div">
          Title: {props.stories.titles}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Date: {props.stories.created_at}
        </Typography>
        <Typography variant="body2">Author: {props.stories.author}</Typography>
        <Typography variant="body2">URL: {props.stories.url}</Typography>
      </CardContent>

      {/* <ArticleCard /> */}
    </Card>
  );
}
