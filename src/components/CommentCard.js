export default function CommentCard({ comment }) {
  return (
    <li className="CommentCard">
      <p className="CommentCard-author">{comment.author}</p>
      <p className="CommentCard-date">{comment.created_at.slice(0, 10)}</p>
      <p className="CommentCard-body">{comment.body}</p>
    </li>
  );
}
