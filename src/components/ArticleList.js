import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const { topic } = useParams();

  const incrementPage = (amount) => {
    setPageNumber((currentPage) => currentPage + amount);
  };

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticles(pageNumber, topic)
      .then(({ articles, total_count: totalCount }) => {
        setArticles(articles);
        setIsLoading(false);
        setMaxPage(Math.floor(totalCount / 10) + 1);
        setError(null);
      })
      .catch(() => {
        setError("Unable to retrieve articles, please try again later");
        setIsLoading(false);
      });
  }, [pageNumber, topic]);

  useEffect(() => {
    setPageNumber(1);
  }, [topic]);

  const topicTitle = topic
    ? `${topic[0].toUpperCase() + topic.slice(1)} Articles`
    : "All Articles";

  if (error) return <h3 className="error-message">{error}</h3>;
  if (isLoading) return <h3>Retrieving articles...</h3>;

  return (
    <div>
      <h2>{topicTitle}</h2>
      <ul className="ArticleList">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </ul>
      <div className="article-list-pagination">
        <button onClick={() => incrementPage(-1)} disabled={pageNumber === 1}>
          Prev
        </button>
        <p>Page: {pageNumber}</p>
        <button
          onClick={() => incrementPage(1)}
          disabled={pageNumber === maxPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}
