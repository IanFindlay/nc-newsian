import { useEffect, useState, useRef } from "react";

import * as api from "../utils/api";
import CommentCard from "./CommentCard";

export default function Comments({ articleId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const commentRef = useRef(null);

  useEffect(() => {
    const scrollToComments = () => {
      commentRef.current.scrollIntoView({
        behaviour: "smooth",
      });
    };
    setIsLoading(true);
    api
      .getArticleComments(articleId)
      .then((fetchedComments) => {
        setComments(fetchedComments);
        setIsLoading(false);
        scrollToComments();
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [articleId]);

  if (isLoading) return <h3>Retrieving comments...</h3>;

  return (
    <section className="Comments">
      <h3 ref={commentRef}>Comments:</h3>
      <ul>
        {comments.map((comment) => (
          <CommentCard key={comment.created_at} comment={comment} />
        ))}
      </ul>
    </section>
  );
}
