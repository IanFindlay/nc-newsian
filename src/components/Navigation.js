import { Link } from "react-router-dom";

import TopicDropdown from "./TopicDropdown";

export default function Navigation({ setPageNumber }) {
  return (
    <nav className="Navigation">
      <Link to="/">Home</Link>
      <TopicDropdown setPageNumber={setPageNumber} />
    </nav>
  );
}
