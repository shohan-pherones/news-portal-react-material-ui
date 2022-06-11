import React, { useEffect, useState } from "react";
import { CardGroup, Spinner } from "react-bootstrap";
import News from "../News/News";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Newspaper.css";

const Newspaper = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=8b38dc5dc8b1444b8652b344ddb53020"
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <CardGroup className="cards">
      {articles.length === 0 ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        articles.map((article) => (
          <News article={article} key={article.title}></News>
        ))
      )}
    </CardGroup>
  );
};

export default Newspaper;
