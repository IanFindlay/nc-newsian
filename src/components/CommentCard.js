import { useContext, useState } from "react";

import * as api from "../utils/api";
import UserContext from "../contexts/UserContext";

export default function CommentCard({ comment, setUserCommentCount }) {
  const { loggedInUser } = useContext(UserContext);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

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
      className="CommentCard-button-delete"
      onClick={deleteComment}
    >
      delete
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
      </li>
      {isDeleting && <h3 className="info-message">Deleting message</h3>}
      {error && <h3 className="error-message">{error}</h3>}
    </>
  );
}
