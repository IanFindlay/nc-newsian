import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import * as api from "../utils/api";
import CollapseWrapper from "./CollapseWrapper";
import Comments from "./Comments";
import ErrorPage from "./ErrorPage";

export default function Article() {
  const { articleId } = useParams();
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [voteCount, setVoteCount] = useState(0);
  const [userCommentCount, setUserCommentCount] = useState(0);
  const [error, setError] = useState(null);
  const [inlineError, setInlineError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    api
      .getArticleById(articleId)
      .then((article) => {
        setContent(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response);
        setIsLoading(false);
      });
  }, [articleId]);

  const voteOnArticle = (amount) => {
    setVoteCount((current) => {
      return current + amount;
    });
    setInlineError(null);
    api.patchArticleVotes(articleId, amount).catch(() => {
      setVoteCount((current) => current - amount);
      setInlineError("Vote failed");
    });
  };

  if (isLoading) return <h3>Retrieving article...</h3>;
  if (error) return <ErrorPage status={error.status} msg={error.data.msg} />;

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
      <Link to={`/topics/${content.topic}`} className="Article-topic">
        {content.topic.toUpperCase()}
      </Link>
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
          userCommentCount={userCommentCount}
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
        {inlineError && <p className="error-message">{inlineError}</p>}
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
