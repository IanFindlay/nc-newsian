import { useEffect, useState } from "react";

import * as api from "../utils/api";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticles()
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch(() =>
        setError("Unable to retrieve articles, please try again later")
      );
  }, []);

  if (error) return <h3>{error}</h3>;
  if (isLoading) return <h3>Retrieving articles...</h3>;

  return (
    <ul>
      {articles.map((article) => {
        <ArticleCard key={article.article_id} {...article} />;
      })}
    </ul>
  );
}
