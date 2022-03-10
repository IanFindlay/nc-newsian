export default function OrderToggle({ order, setOrder }) {
  return (
    <form className="OrderToggle" onChange={(e) => setOrder(e.target.value)}>
      <label htmlFor="order-asc" className="OrderToggle-label-asc">
        asc
      </label>
      <input
        name="order"
        className="OrderToggle-radio-asc"
        type="radio"
        value="asc"
        checked={order === "asc"}
        readOnly
      />
      <label htmlFor="order-desc" className="OrderToggle-label-desc">
        desc
      </label>
      <input
        name="order"
        className="OrderToggle-radio-desc"
        type="radio"
        value="desc"
        checked={order === "desc"}
        readOnly
      />
    </form>
  );
}
