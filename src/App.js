import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
