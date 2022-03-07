import "./App.css";
import Title from "./components/Title";
import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header className="App">
        <Title />
        <Navigation />
      </header>
    </BrowserRouter>
  );
}

export default App;
