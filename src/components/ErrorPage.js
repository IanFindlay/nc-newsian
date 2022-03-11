import { useNavigate } from "react-router-dom";

export default function ErrorPage({ status, msg }) {
  const navigate = useNavigate();

  return (
    <section className="ErrorPage">
      <h3>{status}</h3>
      <p>{msg}</p>
      <button className="ErrorPage-back" onClick={() => navigate(-1)}>
        Back to safety
      </button>
    </section>
  );
}
