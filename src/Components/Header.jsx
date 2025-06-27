import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({ setBlurred }) {
  const [showServices, setShowServices] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleEnter = () => {
    setShowServices(true);
    setBlurred?.(true);
  };

  const handleLeave = () => {
    setShowServices(false);
    setBlurred?.(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="top">
        <div className="top-center">
          <img src="https://cdn-icons-png.flaticon.com/128/484/484167.png" alt="location" />
          <h1>Santhi Nagar, Perungudi, Chennai - 600 096.</h1>
        </div>
        <div className="timing">
          <img src="https://cdn-icons-png.flaticon.com/128/3240/3240587.png" alt="time" />
          <h1>9.00am to 6.30pm - Monday to Saturday</h1>
        </div>
        <div className="top-center">
          <img src="https://cdn-icons-png.flaticon.com/128/483/483947.png" alt="phone" />
          <h1>+91 9272020458</h1>
        </div>
      </div>

      <div className="header-container">
        <div className="logo-only">
          <Link to="/">
            <img src="/logob.png" alt="Indesfarm Logo" className="logo-big" />
          </Link>
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/about" onClick={() => setBlurred(false)}>About Us</Link>
          <Link to="/blogs" onClick={() => setBlurred(false)}>Blogs</Link>

          <div
            className="nav-item"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <button className="nav-button">
              Capabilities <ChevronDown size={16} />
            </button>
            <div className={`dropdown-menu ${showServices ? 'show' : ''}`}>
              <Link to="/services/#service1">EMS Service</Link>
              <Link to="/services/#service2">Component Procurement</Link>
              <Link to="/services/#service3">Assembly</Link>
              <Link to="/services/#service4">Wire Harness</Link>
              <Link to="/services/#service5">Mechanical Design</Link>
            </div>
          </div>

          <Link to="/products">Products</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </header>
  );
}
