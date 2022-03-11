export default function OrderToggle({ searchParams, setSearchParams }) {
  const sortBy = searchParams.get("sort_by");
  const order = searchParams.get("order");

  return (
    <form
      className="OrderToggle"
      onChange={(e) => {
        setSearchParams({ sort_by: sortBy, order: e.target.value, p: 1 });
      }}
    >
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
