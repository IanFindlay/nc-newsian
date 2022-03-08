import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as api from "../utils/api";

export default function Article() {
  const { articleId } = useParams();
  const [content, setContent] = useState({});

  useEffect(() => {
    api.getArticleById(articleId).then((article) => setContent(article));
  }, []);

  return <></>;
}
