import { useState } from "react";

export default function CollapseWrapper({ commentCount, children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsed = () => setIsCollapsed(!isCollapsed);

  return (
    <section className={"Article-comments"}>
      <button onClick={toggleCollapsed}>
        {isCollapsed ? `Show Comments (${commentCount})` : "Hide Comments"}
      </button>
      {!isCollapsed && children}
    </section>
  );
}
