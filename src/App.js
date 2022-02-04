import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Character from "./components/Character/Character";
import Video from "./components/Video/Video";
import Nav from "./components/Nav";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character" element={<Character />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
