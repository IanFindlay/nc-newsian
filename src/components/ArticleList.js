import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import Navigation from "./Navigation";
import QueryBar from "./QueryBar";

export default function ArticleList({ setPageNumber }) {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [maxPage, setMaxPage] = useState(0);
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort_by");
  const order = searchParams.get("order");
  const pageNumber = Number(searchParams.get("p"));

  const incrementPage = (amount) => {
    setSearchParams({ sort_by: sortBy, order, p: pageNumber + amount });
  };

  useEffect(() => {
    setIsLoading(true);
    const apiSort = sortBy === "comments" ? "comment_count" : sortBy;
    api
      .getArticles(pageNumber, topic, apiSort, order)
      .then(({ articles, total_count: totalCount }) => {
        setArticles(articles);
        setIsLoading(false);
        setMaxPage(Math.floor(totalCount / 10) + 1);
        setError(null);
      })
      .catch((err) => {
        if (err.response.status !== 404) {
          setError("Unable to retrieve articles, please try again later");
        }
        setIsLoading(false);
      });
  }, [searchParams, topic]);

  const topicTitle = topic
    ? `${topic[0].toUpperCase() + topic.slice(1)} Articles`
    : "All Articles";

  if (error) return <h3 className="error-message">{error}</h3>;
  if (isLoading) return <h3>Retrieving articles...</h3>;

  return (
    <>
      <Navigation searchParams={searchParams} />
      <QueryBar searchParams={searchParams} setSearchParams={setSearchParams} />
      <h2>{topicTitle}</h2>
      <ul className="ArticleList">
        {articles.map((article) => {
          return (
            <ArticleCard
              key={article.article_id}
              article={article}
              topic={topic}
            />
          );
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
    </>
  );
}
