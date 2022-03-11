export default function ErrorPage({ status, msg }) {
  return (
    <section className="ErrorPage">
      <h3>{status}</h3>
      <p>{msg}</p>
    </section>
  );
}
