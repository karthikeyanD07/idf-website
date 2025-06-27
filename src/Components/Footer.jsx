import React from "react";
import "./Footer.css";
import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-col">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="footer-logo"
          />
          <p className="footer-about">
            End-to-end embedded & manufacturing services for industrial, agricultural,<br/>
            automotive and consumer markets.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/#industries">Industries</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            15, 2nd Floor, Santhi Nagar,<br/>
            Kandhanchavadi, Perungudi,<br/>
            Tamil Nadu 600096
          </p>
          <p>+91 92720 20458</p>
          <p>info@indesfarm.com</p>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/indesfarm-technologies/?originalSubdomain=in" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="/admin/blogs" aria-label="Admin Panel"><RiAdminFill /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Indesfarm. All rights reserved.
      </div>
    </footer>
  );
}
