import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: "Project One",
      description: "Conducted user research via Google Forms and Figma to create a medium-fidelity clickable prototype, enhancing usability and addressing user needs through UX design and wireframing.",
    },
    {
      title: "Project Two",
      description: "Interactive Power BI dashboard using DAX measures to track and filter Sales, Profit, and Quantity across four regions by year.",
    },
    {
      title: "Project Three",
      description: "Developed a functional Power BI dashboard for store sales analysis, leveraging DAX to enhance trend insights across multiple parameters.",
    },
    {
      title: "Project Four",
      description: "Created insightful Excel reports using Pivot Tables, DAX functions, and Power Query for data cleaning, supporting analysis for a medium-fidelity Jewellery app prototype.",
    },
    {
      title: "Project Five",
      description: "Analyzed Netflix data using Python, leveraging Pandas, NumPy, and Matplotlib for data cleaning, visualization, and identifying top genres and viewer behavior patterns.",
    },
  ];

  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <h2>Featured Projects</h2>
      <div className="grid">
        {projects.map((p, index) => (
          <article
            key={index}
            className="project"
            tabIndex="0"
            data-aos="fade-up"
            data-aos-delay={index * 200} // optional staggered animation
          >
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
