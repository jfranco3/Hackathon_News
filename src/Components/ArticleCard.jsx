import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function ArticleCard(props) {
  const {
    stories,
    setStories,
    title,
    author,
    url,
    createdAt,
    numComments,
    objectId,
    points,
  } = props;
  // console.log("PROPS", props.stories);

  const handleClick = () => {
    window.open(url);
  };

  return (
    <Paper elevation={3}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent style={{ backgroundColor: "mintcream" }}>
          <Typography
            variant="h5"
            component="div"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
            sx={{ fontFamily: "tahoma" }}
          >
            {title}
          </Typography>
          <Typography sx={{ mb: 0.5 }} color="dimgray">
            {createdAt}
          </Typography>
          <Typography variant="body2">Author: {author}</Typography>
          <Typography
            sx={{ textDecoration: "underline" }}
            variant="body3"
            color="blue"
          >
            URL: {url}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}
