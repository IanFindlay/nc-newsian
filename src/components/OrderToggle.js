import { useSearchParams } from "react-router-dom";

export default function OrderToggle() {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    sort_by: sortBy,
    order,
    limit,
  } = Object.fromEntries([...searchParams]);

  return (
    <form
      className="OrderToggle"
      onChange={(e) => {
        setSearchParams({
          sort_by: sortBy,
          order: e.target.value,
          limit,
          p: 1,
        });
      }}
    >
      <label htmlFor="order-asc" className="OrderToggle-label-asc">
        asc
      </label>
      <input
        id="order-asc"
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
        id="order-desc"
        className="OrderToggle-radio-desc"
        type="radio"
        value="desc"
        checked={order === "desc"}
        readOnly
      />
    </form>
  );
}
