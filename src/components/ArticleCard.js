export default function ArticleCard({
  title,
  author,
  votes,
  created_at: date,
  topic,
  comment_count: comments,
}) {
  return (
    <article className="ArticleCard">
      <p>{date}</p>
      <h2>{title}</h2>
      <div className="article-card-author-topic">
        <h3>{author}</h3>
        <p>{topic}</p>
      </div>
      <div className="article-card-votes-comments">
        <p>{votes}</p>
        <p>{comments}</p>
      </div>
    </article>
  );
}
