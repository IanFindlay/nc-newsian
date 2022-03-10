import SortByDropdown from "./SortByDropdown";

export default function QueryBar({ sortBy, setSortBy }) {
  return (
    <section className="QueryBar">
      <SortByDropdown sortBy={sortBy} setSortBy={setSortBy} />
    </section>
  );
}
