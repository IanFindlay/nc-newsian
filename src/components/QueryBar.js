import LimitDropdown from "./LimitDropdown";
import OrderToggle from "./OrderToggle";
import SortByDropdown from "./SortByDropdown";

export default function QueryBar() {
  return (
    <section className="QueryBar">
      <SortByDropdown />
      <OrderToggle />
      <LimitDropdown />
    </section>
  );
}
