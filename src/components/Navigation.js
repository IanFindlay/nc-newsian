import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as api from "../utils/api";
import TopicDropdown from "./TopicDropdown";

export default function Navigation() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [inlineError, setInlineError] = useState(null);

  const openRandom = () => {
    setIsLoading(true);
    setInlineError(null);
    api
      .getRandomArticleId()
      .then((articleId) => {
        navigate(`/articles/${articleId}`);
      })
      .catch(() => {
        setInlineError("Failed to load random article");
        setIsLoading(false);
      });
  };
  return (
    <nav className="Navigation">
      <TopicDropdown />
      <button className="Navigation-button-random" onClick={openRandom}>
        {isLoading ? "Loading..." : "Random Article"}
      </button>
      {inlineError && inlineError}
    </nav>
  );
}
