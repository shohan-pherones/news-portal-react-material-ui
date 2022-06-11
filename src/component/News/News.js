import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import "./News.css";

const News = (props) => {
  const { title, urlToImage, description, url } = props.article;
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={urlToImage}
          alt={title}
        />
        <CardContent sx={{ height: 300 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          style={{ color: "white" }}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          variant="info"
        >
          See Full News
        </Button>
      </CardActions>
    </Card>
  );
};

export default News;
