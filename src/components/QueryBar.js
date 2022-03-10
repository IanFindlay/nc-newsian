import SortByDropdown from "./SortByDropdown";
import OrderToggle from "./OrderToggle";

export default function QueryBar({ sortBy, setSortBy, order, setOrder }) {
  return (
    <section className="QueryBar">
      <SortByDropdown sortBy={sortBy} setSortBy={setSortBy} />
      <OrderToggle order={order} setOrder={setOrder} />
    </section>
  );
}
