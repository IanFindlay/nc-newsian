import { useSearchParams } from "react-router-dom";

export default function SortByDropdown() {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    sort_by: sortBy,
    order,
    limit,
  } = Object.fromEntries([...searchParams]);

  return (
    <div className="SortByDropdown">
      <label htmlFor="sortBy" className="sort-label">
        Sort By
      </label>
      <select
        className="sort-select"
        defaultValue={sortBy || "date"}
        name="sortBy"
        onChange={(e) => {
          setSearchParams({
            sort_by: e.target.value,
            order,
            limit,
            p: 1,
          });
        }}
      >
        <option key="author" value="author">
          author
        </option>
        <option key="comments" value="comments">
          comments
        </option>
        <option key="date" value="date">
          date
        </option>
        <option key="title" value="title">
          title
        </option>
        <option key="votes" value="votes">
          votes
        </option>
      </select>
    </div>
  );
}
