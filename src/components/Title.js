import { useContext } from "react";

import UserContext from "../contexts/UserContext";

export default function Title() {
  const { loggedInUser } = useContext(UserContext);

  return (
    <section className="Title">
      <h1>NC-Newsian</h1>
      <p className="logged-user">Logged in as: {loggedInUser}</p>
    </section>
  );
}
