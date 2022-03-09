import { useState } from "react";

export default function CollapseWrapper({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsed = () => setIsCollapsed(!isCollapsed);

  return (
    <section className={"Article-comments"}>
      <button onClick={toggleCollapsed}>
        {isCollapsed ? "Show" : "Hide"} Comments
      </button>
      {!isCollapsed && children}
    </section>
  );
}
