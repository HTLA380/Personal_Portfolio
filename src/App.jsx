import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProjectPage from "./Pages/ProjectPage";
import "./css/util.css";
import Navbar from "./scenes/Navbar";

function App() {
  return (
    <div className="app relative">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" id="project-page" element={<ProjectPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
