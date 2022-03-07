import { useEffect, useState } from "react";

import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  const incrementPage = (amount) => {
    setPageNumber((currentPage) => currentPage + amount);
  };

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticles(pageNumber)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setError("No more articles to display returned to previous page");
          incrementPage(-1);
        } else setError("Unable to retrieve articles, please try again later");
      });
  }, [pageNumber]);

  if (isLoading) return <h3>Retrieving articles...</h3>;

  return (
    <div>
      <h3 className="error-message">{error}</h3>
      <ul className="ArticleList">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <ArticleCard {...article} />
            </li>
          );
        })}
      </ul>
      <div className="article-list-pagination">
        <button onClick={() => incrementPage(-1)} disabled={pageNumber === 1}>
          Prev
        </button>
        <p>Page: {pageNumber}</p>
        <button onClick={() => incrementPage(1)}>Next</button>
      </div>
    </div>
  );
}
