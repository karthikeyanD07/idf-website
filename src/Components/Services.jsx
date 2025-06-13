import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const pageStyle = {
    padding: "2rem",
    backgroundColor: "#f4f4f4",
    maxWidth: "1000px",
    margin: "0 auto",
  };

  const sectionStyle = {
    marginBottom: "5rem",
    padding: "1.5rem",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const headingStyle = {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: "#2e7d32",
  };

  const paraStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#333",
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#1b1b1b" }}>
        Our Services
      </h1>

      <section id="service1" style={sectionStyle}>
        <h2 style={headingStyle}>EMS Service</h2>
        <p style={paraStyle}>
          We offer complete Electronic Manufacturing Services (EMS) that include PCB design, component sourcing, assembly, and testing. Whether for small or large volume production, we provide high-quality, scalable solutions tailored to your product needs.
        </p>
      </section>

      <section id="service2" style={sectionStyle}>
        <h2 style={headingStyle}>Component Procurement</h2>
        <p style={paraStyle}>
          Our procurement team sources quality electronic components from trusted global suppliers. We ensure cost-effective pricing, verified authenticity, and timely availability, reducing lead times and production risks.
        </p>
      </section>

      <section id="service3" style={sectionStyle}>
        <h2 style={headingStyle}>Assembly</h2>
        <p style={paraStyle}>
          We provide both SMT and through-hole PCB assembly services using advanced machinery and IPC-compliant processes. Our assembly lines handle prototypes to mass production runs with high accuracy and quality assurance.
        </p>
      </section>

      <section id="service4" style={sectionStyle}>
        <h2 style={headingStyle}>Wire Harness</h2>
        <p style={paraStyle}>
          Our custom wire harness solutions cater to automotive, industrial, and consumer electronics applications. We provide precise crimping, insulation, and routing for complex wiring needs, ensuring safety and reliability.
        </p>
      </section>

      <section id="service5" style={sectionStyle}>
        <h2 style={headingStyle}>Mechanical Design</h2>
        <p style={paraStyle}>
          Our mechanical engineering team offers enclosure design, thermal analysis, and 3D modeling to bring your electronic products to life. We deliver ready-to-manufacture CAD files that balance function, durability, and aesthetic appeal.
        </p>
      </section>
    </div>
  );
}
