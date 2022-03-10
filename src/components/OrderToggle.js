export default function OrderToggle({ order, setOrder }) {
  return (
    <form className="orderToggle" onChange={(e) => setOrder(e.target.value)}>
      <label htmlFor="order-asc">asc</label>
      <input
        name="order"
        className="OrderToggle-radio"
        type="radio"
        value="asc"
        checked={order === "asc"}
        readOnly
      />
      <label htmlFor="order-desc">desc</label>
      <input
        name="order"
        className="OrderToggle-radio"
        type="radio"
        value="desc"
        checked={order === "desc"}
        readOnly
      />
    </form>
  );
}
