import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Speakers from "./pages/Speakers";
import Schedule from "./pages/Schedule";
import CodeOfConduct from "./pages/CodeOfConduct";
import Tickets from "./pages/Tickets";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="speakers" element={<Speakers />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="code-of-conduct" element={<CodeOfConduct />} />
            <Route path="tickets" element={<Tickets />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
