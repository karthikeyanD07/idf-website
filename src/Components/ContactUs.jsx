import React from 'react';
import './ContactUs.css';

export default function ContactUs() {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Details */}
        <div className="contact-info">
          <h2>Reach Us</h2>
          <p><strong>Address:</strong><br />
            15, 2nd Floor, Santhi Nagar,<br />
            Kandhanchavadi, Perungudi,<br />
            Tamil Nadu 600096
          </p>
          <p><strong>Phone:</strong><br />
            <a href="tel:9272020458">9272020458</a>
          </p>
          <p><strong>Working Hours:</strong><br />
            Monday to Saturday: 9:00 AM - 6:30 PM<br />
            (Closed on Sundays)
          </p>
          <p><strong>Email:</strong><br />
            <a href="mailto:info@indesfarm.com">info@indesfarm.com</a>
          </p>
          <p><strong>Follow us:</strong><br />
            <a href="https://www.linkedin.com/company/indesfarm-technologies/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="map-container">
        <iframe
          title="Indesfarm Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.0378083485352!2d80.24647267365098!3d12.963509815058512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525db4e0021207%3A0xc5c27674fcf518c7!2sINDESFARM%20TECHNOLOGIES%20LLP!5e1!3m2!1sen!2sin!4v1749057772429!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
