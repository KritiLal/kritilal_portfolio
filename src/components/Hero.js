import React from 'react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {

    useEffect(() => {
      AOS.init({ duration: 1000, once: true }); // Initialize AOS with 1s duration and animate only once
    }, []);

  return (
    <section className="hero" data-aos="fade-up">
      <h1>Turning data and design into meaningful digital experiences.</h1>
      <p className="lead">
        I design data-driven digital experiences that are intuitive, impactful, and user-centered, blending analytical insight with creative problem-solving.
      </p>
      <div>
        <a className="btn btn-primary" href="#contact">Hire me</a>
      </div>
    </section>
  );
}

export default Hero;
