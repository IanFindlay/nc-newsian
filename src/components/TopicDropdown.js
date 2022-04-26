import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import * as api from "../utils/api";

export default function TopicDropdown() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const {
    sort_by: sortBy,
    order,
    limit,
  } = Object.fromEntries([...searchParams]);

  useEffect(() => {
    setIsLoading(true);
    api.getTopics().then((topicList) => {
      setTopics(topicList);
      setIsLoading(false);
    });
  }, []);

  return (
    <section>
      <select
        value={`/topics/${topic}`}
        disabled={isLoading}
        onChange={(e) => {
          navigate(
            e.target.value +
              `?sort_by=${sortBy}&order=${order}&limit=${limit}&p=1`
          );
        }}
      >
        <option value={"/articles"}>all</option>
        {topics.map(({ slug }) => {
          return (
            <option key={slug} value={`/topics/${slug}`}>
              {slug}
            </option>
          );
        })}
      </select>
    </section>
  );
}
