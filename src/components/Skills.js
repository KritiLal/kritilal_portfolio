import React, { useEffect } from "react";
import {
  AiOutlineBarChart,
  AiOutlineLaptop,
  AiOutlineLayout,
  AiOutlineDatabase,
} from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  // Initialize AOS (Animate On Scroll) when component mounts
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Define skill categories with icon and respective skills
  const skillCategories = [
    {
      title: "Data Analysis",
      icon: <AiOutlineBarChart size={28} />, // Icon for this category
      skills: ["MS Excel", "Python", "MS SQL"],
    },
    {
      title: "Business Intelligence & Visualization",
      icon: <AiOutlineDatabase size={28} />,
      skills: ["Power BI"],
    },
    {
      title: "UI/UX Design & Prototyping",
      icon: <AiOutlineLayout size={28} />,
      skills: [
        "Figma",
        "UI/UX Design",
        "User Interface & Prototype",
        "User Research & Usability Testing",
        "Design Systems & Style Guides",
        "Wireframing & Low/High Fidelity Prototyping",
      ],
    },
    {
      title: "Web Development",
      icon: <AiOutlineLaptop size={28} />,
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];

  return (
    // Wrapper for skills section
    <section id="skills" className="skills" data-aos="fade-up">
      {/* Section heading */}
      <h2>Skills</h2>

      {/* Grid layout for skill categories */}
      <div className="grid">
        {skillCategories.map((category, index) => (
          <article key={index} className="project">
            {/* Display icon and title */}
            <h3 style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {category.icon} {category.title}
            </h3>

            {/* List of skills */}
            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
