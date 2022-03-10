import { useContext, useState } from "react";

import * as api from "../utils/api";
import UserContext from "../contexts/UserContext";

export default function CommentCard({ comment, setUserCommentCount }) {
  const { loggedInUser } = useContext(UserContext);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteComment = () => {
    setIsDeleting(true);
    api
      .deleteComment(comment.comment_id)
      .then(() => {
        setIsDeleting(false);
        setIsDeleted(true);
        setUserCommentCount((current) => current - 1);
      })
      .catch(() => {
        setIsDeleting(false);
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
    return (
      <h3 className="CommentCard-delete-success">
        Comment successfully deleted
      </h3>
    );

  return (
    <li className="CommentCard">
      <p className="CommentCard-author">{comment.author}</p>
      <p className="CommentCard-date">{comment.created_at.slice(0, 10)}</p>
      <p className="CommentCard-body">{comment.body}</p>
      {loggedInUser === comment.author && deleteButton}
    </li>
  );
}
