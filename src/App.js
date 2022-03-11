import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Article from "./components/Article";
import Title from "./components/Title";
import UserContext from "./contexts/UserContext";
import QueryBar from "./components/QueryBar";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("jessjelly");
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <main className="App">
          <header>
            <Title />
          </header>
          <Routes>
            <Route path="/articles" element={<QueryBar />} />
            <Route path="/topics/:topic" element={<QueryBar />} />
            <Route path="/articles/:articleId" element={<Article />} />
          </Routes>
        </main>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
