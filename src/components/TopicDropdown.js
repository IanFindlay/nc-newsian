import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../utils/api";

export default function TopicDropdown() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDefaultDisabled, setIsDefaultDisabled] = useState(false);
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
      <select
        disabled={isLoading}
        onChange={(e) => {
          navigate(e.target.value);
          setIsDefaultDisabled(true);
        }}
      >
        <option value="" disabled={isDefaultDisabled}>
          select topic
        </option>
        <option value={"/articles"}>all</option>
        {topics.map((topic) => {
          return (
            <option key={topic.slug} value={`/topics/${topic.slug}`}>
              {topic.slug}
            </option>
          );
        })}
      </select>
    </section>
  );
}
