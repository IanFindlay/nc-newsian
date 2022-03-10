import { useState } from "react";

export default function CollapseWrapper({
  commentCount,
  userCommentCount,
  children,
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <section className="Article-comments">
      <button
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
      >
        {isCollapsed
          ? `Show Comments (${commentCount + userCommentCount})`
          : "Hide Comments"}
      </button>
      {!isCollapsed && children}
    </section>
  );
}
