import { useState } from "react";

export default function CollapseWrapper({ commentCount, children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <section className={"Article-comments"}>
      <button
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
      >
        {isCollapsed ? `Show Comments (${commentCount})` : "Hide Comments"}
      </button>
      {!isCollapsed && children}
    </section>
  );
}
