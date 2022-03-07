import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import ArticleList from "./components/ArticleList";
import Navigation from "./components/Navigation";
import Title from "./components/Title";

function App() {
  return (
    <BrowserRouter>
      <header className="App">
        <Title />
        <Navigation />
      </header>
      <Routes>
        <Route path="/articles" element={<ArticleList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
