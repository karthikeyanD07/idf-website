import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';
// import logo from '../public/logoblack.png';

export default function Header({ setBlurred }) {
  const [showProducts, setShowProducts] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const handleEnter = (setter) => {
    setter(true);
    setBlurred?.(true); // optional chaining to avoid crash if not passed
  };

  const handleLeave = (setter) => {
    setter(false);
    setBlurred?.(false);
  };

  return (
    <header className="header">
      <div className="top">

        <div className='top-center'>
          <img src="https://cdn-icons-png.flaticon.com/128/484/484167.png" alt="location-icon" />
          <h1>Santhi Nagar, Perungudi, Chennai - 600 096.</h1>
        </div>

        <div className='timing'>
          <img src="https://cdn-icons-png.flaticon.com/128/3240/3240587.png" alt="timing-icon" />
          <h1>9.00am to 6.30pm - Monday to Saturday</h1>
        </div>

        <div className='top-center'>
          <img src="https://cdn-icons-png.flaticon.com/128/483/483947.png" alt="phone-icon" />
          <h1>+91 9272020458</h1>
        </div>

      </div>
      <div className="header-container">
        <div className="logo-only">
          <Link to="/">
            <img src="/logob.png" alt="Indesfarm Logo" className="logo-big" />
          </Link>
        </div>

        <nav className="nav-links">
          <Link to="/about" onClick={() => setBlurred(false)}>About Us</Link>


          <div
            className="nav-item"
            onMouseEnter={() => handleEnter(setShowProducts)}
            onMouseLeave={() => handleLeave(setShowProducts)}
          >
            <button className="nav-button">
              Products <ChevronDown size={16} />
            </button>
            <div className={`dropdown-menu ${showProducts ? 'show' : ''}`}>
              <a href="#product1">3-Phase BLDC-Driver</a>
              <a href="#product2">Feedback Board with IoT</a>
              <a href="#product3">Gateway Board</a>
              <a href="#product4">Single Phase BLDC Driver</a>
              <a href="#product5">Temperature and Monitor Control Board</a>
              <a href="#product6">BLE 5.0 Master Board</a>
              <a href="#product7">BLE 5.0 Slave Board</a>
            </div>
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => handleEnter(setShowServices)}
            onMouseLeave={() => handleLeave(setShowServices)}
          >
            <button className="nav-button">
              Capabilities <ChevronDown size={16} />
            </button>
            <div className={`dropdown-menu ${showServices ? 'show' : ''}`}>
              <a href="#service1">EMS Service</a>
              <a href="#service2">Component Procurement</a>
              <a href="#service3">Assembly</a>
              <a href="#service4">Wire Harness</a>
              <a href="#service5">Mechanical Design</a>
            </div>
          </div>

          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
