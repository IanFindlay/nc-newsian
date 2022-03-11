import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as api from "../utils/api";

export default function TopicDropdown({ searchParams }) {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  const navigate = useNavigate();
  const sortBy = searchParams.get("sort_by");
  const order = searchParams.get("order");

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
          navigate(e.target.value + `?sort_by=${sortBy}&order=${order}&p=1`);
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
