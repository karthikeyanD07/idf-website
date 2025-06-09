import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";    // ← one import only
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  const [isBlurred, setIsBlurred] = useState(false);

  return (
    <Router>
      <Header setBlurred={setIsBlurred} />

      <div className={`main-content ${isBlurred ? "blurred" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
