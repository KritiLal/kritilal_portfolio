import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiBehance } from "react-icons/si";  // Behance icon

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with 1s duration and animate only once
  }, []);

  return (
    <section id="about" className="about" data-aos="fade-up">
     
        <h2>About Me</h2>
      <p className="lead">
        A designer who works with data — merging analytical insight with creative problem-solving. 
        I craft user-focused dashboards, interfaces, and experiences using Power BI and Figma, 
        always with a balance of clarity, empathy, and precision.
      </p>

      {/* Social / Profile Links */}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/kriti-lal-b01181349" target="_blank" rel="noreferrer">
          <FaLinkedin size={28} />
        </a>
        <a href="https://github.com/KritiLal" target="_blank" rel="noreferrer">
          <FaGithub size={28} />
        </a>
        <a href="https://www.behance.net/kritilal" target="_blank" rel="noreferrer">
          <SiBehance size={28} />
        </a>
      </div>
      <br/>

      {/* Resume Download Button */}
      <div className="resume-btn">
        <a href="/KritiLal_Resume.pdf" download>
          Download Resume
        </a>
      </div>
     
    </section>
  );
}

export default About;
