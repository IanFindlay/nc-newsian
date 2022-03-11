export default function SortByDropdown({ searchParams, setSearchParams }) {
  const sortBy = searchParams.get("sort_by");
  const order = searchParams.get("order");
  const limit = searchParams.get("limit");

  return (
    <div className="SortByDropdown">
      <label htmlFor="sortBy" className="sort-label">
        Sort By
      </label>
      <select
        className="sort-select"
        defaultValue={sortBy}
        name="sortBy"
        onChange={(e) => {
          setSearchParams({
            order,
            sort_by: e.target.value,
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
