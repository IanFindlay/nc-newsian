import { Link } from "react-router-dom";

export default function ArticleCard({ article, topic }) {
  return (
    <Link className="Link" to={`/articles/${article.article_id}`}>
      <li className="ArticleCard">
        <p className="article-card-date">{article.created_at.slice(0, 10)}</p>
        <h2 className="article-card-title">{article.title}</h2>
        <div className="article-card-author-topic">
          <p>Written by: {article.author}</p>
          {!topic && <p>Topic: {article.topic}</p>}
        </div>
        <div className="article-card-votes-comments">
          <p>Votes: {article.votes}</p>
          <p>Comments: {article.comment_count}</p>
        </div>
      </li>
    </Link>
  );
}
