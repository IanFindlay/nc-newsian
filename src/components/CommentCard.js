import { useContext, useState } from "react";

import * as api from "../utils/api";
import UserContext from "../contexts/UserContext";

export default function CommentCard({ comment, setUserCommentCount }) {
  const { loggedInUser } = useContext(UserContext);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [voteCount, setVoteCount] = useState(0);
  const [error, setError] = useState(null);
  const [inlineError, setInlineError] = useState(null);

  const voteOnComment = (amount) => {
    setVoteCount((current) => {
      return current + amount;
    });
    setInlineError(null);
    api.patchCommentVotes(comment.comment_id, amount).catch(() => {
      setVoteCount((current) => current - amount);
      setInlineError("Vote failed");
    });
  };

  const deleteComment = () => {
    setIsDeleting(true);
    setError(null);
    api
      .deleteComment(comment.comment_id)
      .then(() => {
        setIsDeleting(false);
        setIsDeleted(true);
        setUserCommentCount((current) => current - 1);
      })
      .catch(() => {
        setIsDeleting(false);
        setError("Failed to delete comment");
      });
  };

  const deleteButton = (
    <button
      disabled={isDeleting}
      className="CommentCard-button CommentCard-button-delete"
      onClick={deleteComment}
    >
      🗑
    </button>
  );

  if (isDeleted)
    return <h3 className="success-message">Comment successfully deleted</h3>;

  return (
    <>
      <li className="CommentCard">
        <p className="CommentCard-author">{comment.author}</p>
        {loggedInUser === comment.author && deleteButton}
        <p className="CommentCard-date">{comment.created_at.slice(0, 10)}</p>
        <p className="CommentCard-body">{comment.body}</p>
        <section className="CommentCard-voting">
          <button
            className="CommentCard-button CommentCard-minus"
            onClick={() => {
              voteOnComment(-1);
            }}
            disabled={voteCount === -1 || comment.author === loggedInUser}
          >
            -
          </button>
          <p>{comment.votes + voteCount}</p>
          <button
            className="CommentCard-button CommentCard-plus"
            onClick={() => {
              voteOnComment(1);
            }}
            disabled={voteCount === 1 || comment.author === loggedInUser}
          >
            +
          </button>
          {inlineError && <p className="error-message">{inlineError}</p>}
        </section>
      </li>
      {isDeleting && <h3 className="info-message">Deleting message</h3>}
      {error && <h3 className="error-message">{error}</h3>}
    </>
  );
}
