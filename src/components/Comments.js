import { useEffect, useState } from "react";

import * as api from "../utils/api";

export default function ({ articleId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticleComments(articleId)
      .then((fetchedComments) => {
        setComments(fetchedComments);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [articleId]);

  if (isLoading) return <h3>Retrieving comments...</h3>;

  return (
    <section className={"Comments"}>
      <h3>Comments:</h3>
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
