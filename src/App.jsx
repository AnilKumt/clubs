import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Events from "./components/Events.jsx";
import Navbar from "./components/Navbar";
import GDG from "./components/Gdg";
import Dataworks from "./components/Dataworks";
import Bitsquad from "./components/Bitsquad";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-28 lg:pt-20">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/events" element={<Events />} />
          <Route path="/club/gdg" element={<GDG />} />
          <Route path="/club/datawork" element={<Datawork />} />
          <Route path="/club/bitsquard" element={<Bitsquad />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
