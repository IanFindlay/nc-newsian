export default function SortByDropdown({ sortBy, setSortBy, setPageNumber }) {
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
          setSortBy(e.target.value);
          setPageNumber(1);
        }}
      >
        <option key="author" value="author">
          author
        </option>
        <option key="comments" value="comment_count">
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
