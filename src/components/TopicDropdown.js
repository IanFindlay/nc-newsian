import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../utils/api";

export default function TopicDropdown() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    api
      .getTopics()
      .then((topicList) => {
        setTopics(topicList);
        setIsLoading(false);
      })
      .catch(console.log);
  }, []);

  return (
    <section>
      <label htmlFor="topic">Topic:</label>

      <select
        disabled={isLoading}
        onChange={(e) => {
          navigate(e.target.value);
        }}
      >
        <option value={"/articles"}>All</option>
        {topics.map((topic) => {
          return (
            <option key={topic.slug} value={`/articles/${topic.slug}`}>
              {topic.slug}
            </option>
          );
        })}
      </select>
    </section>
  );
}
