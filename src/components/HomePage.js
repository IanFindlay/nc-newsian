import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import * as api from "../utils/api";
import ErrorPage from "./ErrorPage";

export default function Article() {
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    api
      .getRandomArticle()
      .then((article) => {
        setContent(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h3>Retrieving article...</h3>;
  if (error) return <ErrorPage status={error.status} msg={error.data.msg} />;

  return (
    <>
      <h2 className="HomePage-subtitle">
        A random article from the archives - click 'view' to go to the article's
        page or 'new' to show another one
      </h2>
      <div className="HomePage-buttons">
        <button
          onClick={() => {
            navigate(0);
          }}
        >
          New
        </button>
        <button
          onClick={() => {
            navigate("/articles");
          }}
        >
          View
        </button>
      </div>

      <article className="Article">
        <button
          className="Article-button Article-button-top"
          onClick={() => {
            navigate(0);
          }}
        >
          new
        </button>
        <Link to={`/topics/${content.topic}`} className="Article-topic">
          {content.topic.toUpperCase()}
        </Link>
        <p className="Article-date">{content.created_at.slice(0, 10)}</p>
        <h2 className="Article-title">{content.title}</h2>
        <p className="Article-author">by {content.author}</p>
        <p className="Article-body">{content.body}</p>
        <button
          className="Article-button Article-button-bottom"
          onClick={() => {
            navigate(`/articles/${content.article_id}`);
          }}
        >
          view
        </button>
      </article>
    </>
  );
}
