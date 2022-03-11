import { useEffect, useState, useRef } from "react";

import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";

export default function Comments({ articleId, setUserCommentCount }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const commentRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    api
      .getArticleComments(articleId)
      .then((fetchedComments) => {
        setComments(fetchedComments);
        setIsLoading(false);
        commentRef.current.scrollIntoView({
          behaviour: "smooth",
        });
      })
      .catch(() => {
        setError("Failed to retrieve comments");
        setIsLoading(false);
      });
  }, [articleId]);

  if (isLoading) return <h3>Retrieving comments...</h3>;
  if (error) return <h3 className="error-message">{error}</h3>;

  return (
    <section className="Comments">
      <h3 ref={commentRef}>Comments:</h3>
      <PostComment
        articleId={articleId}
        setComments={setComments}
        setUserCommentCount={setUserCommentCount}
      />
      <ul>
        {comments.map((comment) => (
          <CommentCard
            key={comment.created_at}
            comment={comment}
            setUserCommentCount={setUserCommentCount}
          />
        ))}
      </ul>
    </section>
  );
}
