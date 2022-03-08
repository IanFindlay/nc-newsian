export default function ArticleCard({
  title,
  author,
  votes,
  created_at: date,
  topic,
  comment_count: comments,
}) {
  return (
    <li className="ArticleCard">
      <p className="article-card-date">{date.slice(0, 10)}</p>
      <h2 className="article-card-title">{title}</h2>
      <div className="article-card-author-topic">
        <p>Written by: {author}</p>
        <p>Topic: {topic}</p>
      </div>
      <div className="article-card-votes-comments">
        <p>Votes: {votes}</p>
        <p>Comments: {comments}</p>
      </div>
    </li>
  );
}
