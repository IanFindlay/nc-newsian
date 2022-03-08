import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import ArticleList from "./components/ArticleList";
import Navigation from "./components/Navigation";
import Title from "./components/Title";

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <header>
          <Title />
          <Navigation />
        </header>
        <Routes>
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/topics/:topic" element={<ArticleList />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
