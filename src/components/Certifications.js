import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Certifications() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Initialize AOS with 1s duration and animate only once
      }, []);

  // Array of certification objects
  const certifications = [
    {
      title: "Advanced UI/UX Design",
      description: "IIIT, Bangalore",
      skills: [
        "Wireframing & Prototyping",
        "User Research & Usability Testing",
        "Design Systems & Style Guides",
      ],
    },
    {
      title: "Power BI",
      description: "Microsoft",
      skills: [
        "Data Cleaning & Transformation",
        "Dashboard Design",
        "Data Visualization",
      ],
    },
    {
      title: "Tableau Certified",
      description: "Simplilearn",
      skills: [
        "Data Cleaning",
      "Data Visualization",
      "Business Insights"
      ],
    },
  ];

  return (
    // Section wrapper for certifications
    <section id="certifications" className="certifications" data-aos="fade-up">
      {/* Section heading */}
      <h2>Certifications</h2>

      {/* Grid layout for 1 row, 3 columns */}
      <div className="grid">
        {/* Loop through each certification and display it */}
        {certifications.map((cert, index) => (
          <article key={index} className="project">
            {/* Certification title */}
            <h3>{cert.title}</h3>

            {/* Certification institute/description */}
            <p>{cert.description}</p>

            {/* List of skills practiced or gained */}
            <ul>
              {cert.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications; // Export component for use in App.jsx
