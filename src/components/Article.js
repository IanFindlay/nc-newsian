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
  }, [articleId]);

  if (isLoading) return <h3>Retrieving article...</h3>;

  return (
    <article className="Article">
      <button
        className="Article-button Article-button-top"
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </button>
      <p className="Article-topic">{content.topic.toUpperCase()}</p>
      <p className="Article-date">{content.created_at.slice(0, 10)}</p>
      <h2 className="Article-title">{content.title}</h2>
      <p className="Article-author">by {content.author}</p>
      <p className="Article-body">{content.body}</p>
      <button
        className="Article-button-bottom Article-button"
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </button>
      <section className="Article-voting">
        <button className="Article-button Article-arrow">&#9650;</button>
        <p>{content.votes}</p>
        <button className="Article-button Article-arrow">&#9660;</button>
      </section>
    </article>
  );
}
