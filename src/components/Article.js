import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as api from "../utils/api";
import CollapseWrapper from "./CollapseWrapper";
import Comments from "./Comments";

export default function Article() {
  const { articleId } = useParams();
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [voteCount, setVoteCount] = useState(0);
  const [userCommentCount, setUserCommentCount] = useState(0);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    api.getArticleById(articleId).then((article) => {
      setContent(article);
      setIsLoading(false);
    });
  }, [articleId]);

  const voteOnArticle = (amount) => {
    setVoteCount((current) => {
      return current + amount;
    });
    setError(null);
    api.patchArticleVotes(articleId, amount).catch(() => {
      setVoteCount((current) => current - amount);
      setError("Vote failed");
    });
  };

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
      <CollapseWrapper
        commentCount={content.comment_count}
        userCommentCount={userCommentCount}
      >
        <Comments
          articleId={articleId}
          commentCount={content.comment_count}
          setUserCommentCount={setUserCommentCount}
        />
      </CollapseWrapper>
      <section className="Article-voting">
        <div>
          <button
            className="Article-button Article-arrow"
            onClick={() => {
              voteOnArticle(1);
            }}
            disabled={voteCount === 1}
          >
            &#9650;
          </button>
          <p>{content.votes + voteCount}</p>
          <button
            className="Article-button Article-arrow"
            onClick={() => {
              voteOnArticle(-1);
            }}
            disabled={voteCount === -1}
          >
            &#9660;
          </button>
        </div>
        <p className="Article-error">{error}</p>
      </section>
      <button
        className="Article-button Article-button-bottom"
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </button>
    </article>
  );
}
