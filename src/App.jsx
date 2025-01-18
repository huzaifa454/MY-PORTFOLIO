import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/componenets/NavBar";
import "./App.css";
import bgImage from '../src/assets/image.png'; 
import Hero from "../src/componenets/Hero";
import Footer from "../src/componenets/Footer";

function App() {
  return (
    <div
      className="bg-black"
      style={{
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: 'cover',  
        backgroundPosition: 'center',  
        backgroundRepeat: 'no-repeat'  
      }}
    >
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
