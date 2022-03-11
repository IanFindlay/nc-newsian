import { useState } from "react";

import ArticleList from "./ArticleList";
import Navigation from "./Navigation";
import OrderToggle from "./OrderToggle";
import SortByDropdown from "./SortByDropdown";

export default function QueryBar() {
  const [sortBy, setSortBy] = useState("date");
  const [order, setOrder] = useState("desc");
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <>
      <Navigation setPageNumber={setPageNumber} />
      <section className="QueryBar">
        <SortByDropdown
          sortBy={sortBy}
          setSortBy={setSortBy}
          setPageNumber={setPageNumber}
        />
        <OrderToggle
          order={order}
          setOrder={setOrder}
          setPageNumber={setPageNumber}
        />
      </section>
      <ArticleList
        sortBy={sortBy}
        order={order}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
}
