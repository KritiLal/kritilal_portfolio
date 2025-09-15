import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams(); // Get project ID from URL

  // You can fetch the project data based on ID or hardcode some sample data
  const projects = [
    { id: "1", title: "Project One", description: "Responsive web app redesign..." },
    { id: "2", title: "Project Two", description: "Brand identity and visual system..." },
    { id: "3", title: "Project Three", description: "E-commerce platform with modern frameworks..." },
  ];

  const project = projects.find((p) => p.id === id);

  if (!project) return <p>Project not found!</p>;

  return (
    <section className="project-details">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {/* Add images, links, tech stack, etc. */}
    </section>
  );
}

export default ProjectDetails;
