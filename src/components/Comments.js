import { useEffect, useState, useRef, useContext } from "react";

import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import UserContext from "../contexts/UserContext";

export default function Comments({
  articleId,
  commentCount: initialCommentCount,
}) {
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState(initialCommentCount);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newCommentError, setNewCommentError] = useState(null);
  const [postingComment, setPostingComment] = useState(false);
  const commentRef = useRef(null);
  const { loggedInUser } = useContext(UserContext);

  const postComment = (e) => {
    setPostingComment(true);
    setNewCommentError(null);
    e.preventDefault();
    const body = e.target.body.value;
    api
      .postComment(articleId, loggedInUser, body)
      .then(() => {
        setPostingComment(false);
        setCommentCount((current) => current + 1);
      })
      .catch(() => {
        setPostingComment(false);
        setNewCommentError("Comment failed to post try submitting it again");
      });
  };

  useEffect(() => {
    const scrollToComments = () => {
      commentRef.current.scrollIntoView({
        behaviour: "smooth",
      });
    };
    setIsLoading(true);
    setError(null);
    api
      .getArticleComments(articleId, commentCount)
      .then((fetchedComments) => {
        setComments(fetchedComments);
        setIsLoading(false);
        scrollToComments();
      })
      .catch(() => {
        setError("Failed to retrieve comments");
        setIsLoading(false);
      });
  }, [articleId, commentCount]);

  if (isLoading) return <h3>Retrieving comments...</h3>;
  if (error) return <h3 className="error-message">{error}</h3>;

  return (
    <section className="Comments">
      <h3 ref={commentRef}>Comments:</h3>
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
      <p className="error-message">{newCommentError}</p>
      <ul>
        {comments.map((comment) => (
          <CommentCard key={comment.created_at} comment={comment} />
        ))}
      </ul>
    </section>
  );
}
