import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Products() {
  const location = useLocation();

  useEffect(() => {
  const hash = location.hash;

  if (hash) {
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        const headerOffset = 100; // Adjust this based on your header height
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100); // Wait for DOM paint
  }
}, [location]);

  const sectionStyle = {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "2rem",
    marginBottom: "2rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  };

  const headingStyle = {
    fontSize: "1.8rem",
    color: "#1a1a1a",
    marginBottom: "1rem",
  };

  const paraStyle = {
    fontSize: "1rem",
    color: "#444",
    lineHeight: "1.6",
  };

  return (
    <div
      style={{
        padding: "3rem 1rem",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        Our Products
      </h1>

     <section id="product1" style={sectionStyle}>
  <h2 style={headingStyle}>3-Phase BLDC Driver</h2>
  <p style={paraStyle}>
    A high-efficiency brushless DC motor driver tailored for industrial automation, electric vehicles, and robotics. It supports advanced PWM modulation techniques for precise speed and torque control, with built-in protections including overcurrent, undervoltage lockout, and thermal shutdown. Its compact design and high-power density make it ideal for embedded systems and harsh operating environments.
  </p>
</section>

<section id="product2" style={sectionStyle}>
  <h2 style={headingStyle}>Feedback Board with IoT</h2>
  <p style={paraStyle}>
    An intelligent IoT-enabled feedback system that gathers real-time data from connected sensors and transmits it wirelessly to cloud platforms for visualization and control. Equipped with Wi-Fi and BLE 5.0 capabilities, the board supports MQTT/HTTP protocols, enabling seamless integration with dashboards, mobile apps, and edge AI processing for predictive maintenance and smart system feedback loops.
  </p>
</section>

<section id="product3" style={sectionStyle}>
  <h2 style={headingStyle}>Gateway Board</h2>
  <p style={paraStyle}>
    A robust and scalable communication gateway bridging sensor networks and cloud infrastructure. The board supports multiple industrial protocols such as MQTT, Modbus, and HTTP, with built-in secure TLS/SSL encryption, OTA firmware updates, and edge computing capabilities. It's an essential component in smart factories, energy management systems, and large-scale IoT deployments.
  </p>
</section>

<section id="product4" style={sectionStyle}>
  <h2 style={headingStyle}>Single Phase BLDC Driver</h2>
  <p style={paraStyle}>
    A compact and reliable motor driver optimized for single-phase brushless DC motors used in consumer electronics, smart appliances, and precision tools. Features include adaptive speed control, low acoustic noise, sensorless startup, and integrated diagnostics for fault handling. Ideal for compact applications requiring quiet and efficient motor operation.
  </p>
</section>

<section id="product5" style={sectionStyle}>
  <h2 style={headingStyle}>Temperature and Monitor Control Board</h2>
  <p style={paraStyle}>
    This versatile board monitors and regulates temperature across various systems including HVAC, data centers, and manufacturing lines. With support for thermocouples, RTDs, and digital temperature sensors, it offers programmable thresholds, alarm triggers, and integration with microcontrollers or PLCs. Its analog and digital interfaces allow flexible deployment in both legacy and modern systems.
  </p>
</section>

<section id="product6" style={sectionStyle}>
  <h2 style={headingStyle}>BLE 5.0 Master Board</h2>
  <p style={paraStyle}>
    A high-performance Bluetooth 5.0 master module designed for central coordination of multiple BLE slave devices. It supports long-range communication, low latency, and fast data throughput, making it ideal for smart homes, industrial IoT hubs, and mobile applications. Enhanced security features include AES encryption, secure pairing, and role-based device management.
  </p>
</section>

<section id="product7" style={sectionStyle}>
  <h2 style={headingStyle}>BLE 5.0 Slave Board</h2>
  <p style={paraStyle}>
    Designed for ultra-low-power wireless communication, this BLE 5.0 slave board enables seamless data exchange with master controllers. It includes GPIOs for sensor/actuator integration, sleep modes for extended battery life, and a compact form factor. Common applications include wearable devices, environmental monitoring, asset tracking, and wireless telemetry systems.
  </p>
</section>

    </div>
  );
}
