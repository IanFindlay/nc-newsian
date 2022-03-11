import { useState } from "react";

import OrderToggle from "./OrderToggle";
import SortByDropdown from "./SortByDropdown";

export default function QueryBar({ searchParams, setSearchParams }) {
  return (
    <>
      <section className="QueryBar">
        <SortByDropdown
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <OrderToggle
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </section>
    </>
  );
}
