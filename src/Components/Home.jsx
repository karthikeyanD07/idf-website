import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

export default function Home() {
  const GIF_URL =
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNThhcjI3Z2x6bXdjc3JsZ3QzcjhuMHh5MjVocWJ6cDhmMnpvc3d0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mFDWuDppjQJjite6FS/giphy.gif";

  const services = [
    {
      title: "Embedded Product Design",
      img: "https://cdn-icons-png.flaticon.com/128/12030/12030550.png",
      desc: "Custom embedded systems tailored for industrial and consumer applications.",
    },
    {
      title: "Electronic Component Sourcing",
      img: "https://cdn-icons-png.flaticon.com/128/10633/10633658.png",
      desc: "High-quality, globally sourced electronic components delivered on time.",
    },
    {
      title: "Special Fasteners",
      img: "https://cdn-icons-png.flaticon.com/128/11810/11810645.png",
      desc: "Precision fasteners suitable for electronics and mechanical assemblies.",
    },
    {
      title: "Soldering Consumables",
      img: "https://cdn-icons-png.flaticon.com/128/1566/1566210.png",
      desc: "Reliable soldering tools, wires, and fluxes for long-lasting PCB bonds.",
    },
    {
      title: "ESD Supplies",
      img: "https://cdn-icons-png.flaticon.com/128/14537/14537029.png",
      desc: "Protective equipment and tools designed for electrostatic discharge safety.",
    },
  ];

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="home-container">
      <div className="animated-background" />

      {/* Hero */}
      <section className="hero-carousel-section">
        <div className="hero-text" data-aos="fade-right" data-aos-duration="800">
          <h1>Discover Our Products</h1>
          <p>
            Explore cutting-edge embedded solutions and innovative manufacturing
            services tailored to your needs.
          </p>
          <a href="#services" className="cta-button">
            View Services
          </a>
        </div>
        <div className="carousel-wrapper" data-aos="fade-left" data-aos-duration="800">
          <img src={GIF_URL} alt="Demo GIF" className="hero-gif" />
        </div>
      </section>

      <div className="hero-carousel-spacer" />

      {/* Featured Products */}
      <section className="product-container" id="products">
        <h2 className="product-heading">Featured Products</h2>
        <div className="product-card-wrapper">
          {["PCB Assemblies", "Microcontroller Kits", "Wiring Harnesses"].map(
            (item, idx) => (
              <div className="product-card" key={idx}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1055/1055687.png"
                  alt={item}
                  className="product-icon"
                />
                <h3>{item}</h3>
                <p>
                  High-quality {item.toLowerCase()} for industrial-grade applications.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Services */}
      <section className="services-section" id="services">
        <h2 className="services-heading">Services We Provide</h2>
        {services.map((s, i) => (
          <div
            className="service-row"
            key={i}
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-duration="800"
          >
            <div className="service-img">
              <img src={s.img} alt={s.title} />
            </div>
            <div className="service-content">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Industries */}
      <section className="industries-section" id="industries" data-aos="fade-up">
        <h2 className="industries-heading">Industries We Work For</h2>
        <div className="industries-grid">
          <div className="industry-card">
            <h3>Industrial</h3>
            <p>Solutions for manufacturing &amp; automation.</p>
          </div>
          <div className="industry-card">
            <h3>Farming</h3>
            <ul className="farming-list">
              <li>Hydroponics</li>
              <li>Aquaponics</li>
              <li>Soil Moisture Control</li>
            </ul>
          </div>
          <div className="industry-card">
            <h3>Automotive</h3>
            <p>Embedded systems for next-gen vehicles.</p>
          </div>
          <div className="industry-card">
            <h3>Consumer Electronics</h3>
            <p>Smart devices that delight users.</p>
          </div>
        </div>
      </section>

      {/* Concept → Manufacturing Roadmap */}
      <section className="concept-roadmap-section">
        <h2 className="concept-roadmap-heading">From Concept to Manufacturing</h2>
        <div className="vertical-roadmap">
          {[
            { title: "Ideation", desc: "Turning ideas into actionable goals" },
            { title: "System Design", desc: "Architecting the overall system structure" },
            { title: "Board Layout", desc: "Designing circuit boards for production" },
            { title: "Software Development", desc: "Writing firmware and application code" },
            { title: "Product Form", desc: "Focusing on usability & aesthetics" },
            { title: "Prototype", desc: "Building first working model & testing" },
            { title: "Manufacturing", desc: "Scaling up for production & delivery" },
          ].map((step, idx) => (
            <div
              className="roadmap-step"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="roadmap-dot" />
              <div className="roadmap-card">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
