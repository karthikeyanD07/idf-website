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
          <Link to="/blogs" onClick={()=> setBlurred(false)}>Blogs</Link>


          <div
            className="nav-item"
            onMouseEnter={() => handleEnter(setShowProducts)}
            onMouseLeave={() => handleLeave(setShowProducts)}
          >
            <button className="nav-button">
              Products <ChevronDown size={16} />
            </button>
            <div className={`dropdown-menu ${showProducts ? 'show' : ''}`}>
             <Link to="/products#product1">3-Phase BLDC-Driver</Link>
              <Link to="/products#product2">Feedback Board with IoT</Link>
              <Link to="/products#product3">Gateway Board</Link>
              <Link to="/products#product4">Single Phase BLDC Driver</Link>
              <Link to="/products#product5">Temperature and Monitor Control Board</Link>
              <Link to="/products#product6">BLE 5.0 Master Board</Link>
              <Link to="/products#product7">BLE 5.0 Slave Board</Link>
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
              <Link to="services/#service1">EMS Service</Link>
              <Link to="services/#service2">Component Procurement</Link>
              <Link to="services/#service3">Assembly</Link>
              <Link to="services/#service4">Wire Harness</Link>
              <Link to="services/#service5">Mechanical Design</Link>
            </div>
          </div>

          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
