export default function LimitDropdown({ searchParams, setSearchParams }) {
  const sortBy = searchParams.get("sort_by");
  const order = searchParams.get("order");
  const limit = searchParams.get("limit");

  return (
    <div className="LimitDropdown">
      <label htmlFor="limit" className="limit-label">
        Articles per page
      </label>
      <select
        className="limit-select"
        defaultValue={limit}
        name="limit"
        onChange={(e) => {
          setSearchParams({
            sort_by: sortBy,
            order,
            limit: e.target.value,
            p: 1,
          });
        }}
      >
        <option key="all" value="0">
          all
        </option>
        <option key="5" value="5">
          5
        </option>
        <option key="10" value="10">
          10
        </option>
        <option key="25" value="25">
          25
        </option>
        <option key="50" value="50">
          50
        </option>
      </select>
    </div>
  );
}
