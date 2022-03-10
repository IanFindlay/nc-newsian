import { useState, useContext } from "react";

import * as api from "../utils/api";
import UserContext from "../contexts/UserContext";

export default function PostComment({
  articleId,
  setComments,
  setUserCommentCount,
}) {
  const { loggedInUser } = useContext(UserContext);
  const [success, setSuccess] = useState(null);
  const [newCommentError, setNewCommentError] = useState(null);
  const [postingComment, setPostingComment] = useState(false);

  const postComment = (e) => {
    e.preventDefault();
    setPostingComment(true);
    setSuccess(null);
    setNewCommentError(null);
    const body = e.target.body.value;
    api
      .postComment(articleId, loggedInUser, body)
      .then((comment) => {
        setPostingComment(false);
        setUserCommentCount((current) => current + 1);
        setComments((current) => {
          const newComments = [...current];
          newComments.push(comment);
          return newComments;
        });
        setSuccess("Comment successfully posted");
      })
      .catch(() => {
        setPostingComment(false);
        setNewCommentError("Comment failed to post try submitting it again");
        setSuccess(null);
      });
  };

  return (
    <>
      <form onSubmit={postComment}>
        <label htmlFor="commentInput">Add to the conversation</label>
        <textarea
          className="Comments-new-input"
          type="TextArea"
          name="body"
          id="commentInput"
          required
        />
        <button className="Comments-new-button" disabled={postingComment}>
          Post Comment
        </button>
      </form>
      {success && <p className="success-message">{success}</p>}
      {newCommentError && <p className="error-message">{newCommentError}</p>}
    </>
  );
}
