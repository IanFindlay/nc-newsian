import { Link } from "react-router-dom";

import TopicDropdown from "./TopicDropdown";

export default function Navigation() {
  return (
    <nav className="Navigation">
      <Link to="/">Home</Link>
      <TopicDropdown />
      <Link to="/articles">All Articles</Link>
    </nav>
  );
}
