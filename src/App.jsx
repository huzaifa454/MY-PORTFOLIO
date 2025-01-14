import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componenets/NavBar";
import "./App.css";
import Hero from "./componenets/Hero";
import Footer from "./componenets/Footer";
function App() {
  return (
    <div className="bg-black">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
