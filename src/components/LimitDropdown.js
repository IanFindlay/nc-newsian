import { useSearchParams } from "react-router-dom";

export default function LimitDropdown() {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    sort_by: sortBy,
    order,
    limit,
  } = Object.fromEntries([...searchParams]);

  return (
    <div className="LimitDropdown">
      <label htmlFor="limit" className="limit-label">
        Articles per page
      </label>
      <select
        className="limit-select"
        defaultValue={limit || 10}
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
