import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="Navigation">
      <Link to="/">Home</Link>
      <Link to="/articles">All Articles</Link>
    </nav>
  );
}
