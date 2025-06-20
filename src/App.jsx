import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./Components/Blog/Pages/AdminPage";
import PublicPage from "./Components/Blog/Pages/PublicPage";

import Header from "./Components/Header";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";    // ← one import only
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Products from "./Components/Products";
import Services from "./Components/Services";
import Blog from "./Components/BlogList"
import BlogDetail from "./Components/BlogDetail";

function App() {
  const [isBlurred, setIsBlurred] = useState(false);

  return (
    <Router>
      <Header setBlurred={setIsBlurred} />

      <div className={`main-content `}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/admin/blogs" element={<AdminPage />} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/services" element={<Services/>}/>

        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
