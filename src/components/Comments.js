import { useEffect, useState, useRef } from "react";

import * as api from "../utils/api";

export default function ({ articleId }) {
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
      {comments.map((comment) => {
        return (
          <section key={comment.created_at}>
            <p>{comment.created_at}</p>
            <p>{comment.author}</p>
            <p>{comment.body}</p>
          </section>
        );
      })}
    </section>
  );
}
