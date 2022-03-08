import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as api from "../utils/api";

export default function Article() {
  const { articleId } = useParams();
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    api.getArticleById(articleId).then((article) => {
      setContent(article);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <h3>Retrieving article...</h3>;

  return (
    <article className="Article">
      <section className="article-button-topic">
        <p className="article-topic">{content.topic.toUpperCase()} |</p>
        <button
          className="article-button-close"
          onClick={() => {
            navigate(-1);
          }}
        >
          X
        </button>
      </section>
      <h2>{content.title}</h2>
      <section className="article-author-date">
        <p>{content.author}</p>
        <p>{content.created_at.slice(0, 10)}</p>
      </section>
      <p>{content.body}</p>
    </article>
  );
}
