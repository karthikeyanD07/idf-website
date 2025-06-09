import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutUs.css";
import { MdAgriculture } from "react-icons/md";
import { MdDirectionsCar, MdFlight } from "react-icons/md";
import { GiSpanner } from "react-icons/gi";
import { FcAutomotive } from "react-icons/fc";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="about-container">
      {/* Hero Banner */}
  <section className="about-hero" data-aos="fade-down" style={{ position: 'relative', overflow: 'hidden' }}>
  {/* Background Icons container */}
  <div className="hero-icon-background">
    <MdAgriculture size={150} color="#007476" />
    <MdFlight size={150} color="#007476" />
    <GiSpanner size={150} color="#007476" />
    <MdDirectionsCar size={150} color="#007476" />
  </div>

  {/* Foreground content */}
  <h1>About Indesfarm</h1>
  <p>
    We design, prototype, and manufacture cutting-edge embedded solutions 
    for industrial, agricultural, automotive, and consumer markets.
  </p>
</section>

      {/* Our Story */}
      <section className="about-story" data-aos="fade-up">
        <h2>Our Story</h2>
        <p>
          Founded in 2010, Indesfarm began as a small R&D shop in Chennai. Over the past 
          decade we've grown into a full-service embedded and manufacturing partner, 
          helping clients from concept through high-volume production.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-mv" data-aos="fade-up">
        <div className="mv-block">
          <h3>Our Mission</h3>
          <p>
            To empower businesses with reliable, scalable embedded solutions and 
            seamless manufacturing services.
          </p>
        </div>
        <div className="mv-block">
          <h3>Our Vision</h3>
          <p>
            To be the world’s most trusted partner for innovative, end-to-end 
            embedded product journeys.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline" data-aos="fade-up">
        <h2>Milestones</h2>
        <ul>
          <li><strong>2010:</strong> Company founded in Chennai</li>
          <li><strong>2013:</strong> First embedded controller shipped</li>
          <li><strong>2016:</strong> Moved into dedicated manufacturing facility</li>
          <li><strong>2019:</strong> Expanded into agricultural technology</li>
          <li><strong>2022:</strong> Reached 1M+ units produced</li>
        </ul>
      </section>

      {/* Our Team */}
      <section className="about-team" data-aos="fade-up">
        <h2>Our Leadership</h2>
        <div className="team-grid">
          {[
            { name: "", role: "Founder & CEO", img: "https://via.placeholder.com/150" },
            { name: "", role: "CTO", img: "https://via.placeholder.com/150" },
            { name: "", role: "Head of Engineering", img: "https://via.placeholder.com/150" },
            { name: "", role: "Head of Manufacturing", img: "https://via.placeholder.com/150" },
          ].map((member, i) => (
            <div className="team-card" key={i}>
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
