import { Link } from "react-router-dom";

import TopicDropdown from "./TopicDropdown";

export default function Navigation({ searchParams }) {
  return (
    <nav className="Navigation">
      <Link to="/">Home</Link>
      <TopicDropdown searchParams={searchParams} />
    </nav>
  );
}
