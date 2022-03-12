import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import ErrorPage from "./ErrorPage";
import Navigation from "./Navigation";
import QueryBar from "./QueryBar";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [maxPage, setMaxPage] = useState(1);
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort_by") || "date";
  const order = searchParams.get("order") || "asc";
  const limit = searchParams.get("limit")
    ? Number(searchParams.get("limit"))
    : 10;
  const pageNumber = Number(searchParams.get("p")) || 1;

  const incrementPage = (amount) => {
    setSearchParams({ sort_by: sortBy, order, limit, p: pageNumber + amount });
  };

  useEffect(() => {
    setIsLoading(true);
    setSearchParams({ sort_by: sortBy, order, limit, p: pageNumber });
    const apiSort = sortBy === "comments" ? "comment_count" : sortBy;
    api
      .getArticles(pageNumber, topic, apiSort, order, limit)
      .then(({ articles, total_count: totalCount }) => {
        setArticles(articles);
        setIsLoading(false);
        setMaxPage(Math.floor(totalCount / limit) + 1);
        setError(null);
      })
      .catch((err) => {
        setError(err.response);
        setIsLoading(false);
      });
  }, [pageNumber, topic, sortBy, order, limit, setSearchParams]);

  const topicTitle = topic
    ? `${topic[0].toUpperCase() + topic.slice(1)} Articles`
    : "All Articles";

  if (error) return <ErrorPage status={error.status} msg={error.data.msg} />;

  return (
    <>
      <Navigation searchParams={searchParams} />
      <QueryBar searchParams={searchParams} setSearchParams={setSearchParams} />
      {isLoading && <h3>Retrieving articles...</h3>}
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
          disabled={pageNumber === maxPage || limit === 0}
        >
          Next
        </button>
      </div>
    </>
  );
}
