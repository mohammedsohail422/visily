import "./App.css";
import Home from "./Pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resources from "./Pages/Resources";
import Company from "./Pages/Company";
import Whyvisily from "./Pages/Whyvisily";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/company" element={<Company />} />
          <Route path="/whyvisily" element={<Whyvisily />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
