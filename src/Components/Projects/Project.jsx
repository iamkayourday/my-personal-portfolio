import React from "react";
import ProjectCard from "./ProjectCard"; 

function Project() {
  const projects = [
    {
      id: 1,
      logo: "https://via.placeholder.com/150/FF5733/FFFFFF?text=MongoDB", 
      name: "MongoDB",
      description: "A NoSQL database program that uses JSON-like documents.",
      DemoLink: "https://example.com/mongodb-video",
      sourceCode: "https://github.com/example/mongodb-project",
    },
    {
      id: 2,
      logo: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Express", 
      name: "Express",
      description: "A minimal and flexible Node.js web application framework.",
      DemoLink: "https://example.com/express-video",
      sourceCode: "https://github.com/example/express-project",
    },
    {
      id: 3,
      logo: "https://via.placeholder.com/150/3357FF/FFFFFF?text=ReactJS", 
      name: "ReactJS",
      description: "A JavaScript library for building user interfaces.",
      DemoLink: "https://example.com/react-video",
      sourceCode: "https://github.com/example/react-project",
    },
    {
      id: 4,
      logo: "https://via.placeholder.com/150/FF33A1/FFFFFF?text=NodeJS", 
      name: "NodeJS",
      description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
      DemoLink: "https://example.com/nodejs-video",
      sourceCode: "https://github.com/example/nodejs-project",
    },
    {
      id: 5,
      logo: "https://via.placeholder.com/150/FFDA33/FFFFFF?text=Python", 
      name: "Python",
      description: "An interpreted, high-level programming language for general-purpose programming.",
      DemoLink: "https://example.com/python-video",
      sourceCode: "https://github.com/example/python-project",
    },
    {
      id: 6,
      logo: "https://via.placeholder.com/150/9A33FF/FFFFFF?text=Java", 
      name: "Java",
      description: "A high-level, class-based, object-oriented programming language.",
      DemoLink: "https://example.com/java-video",
      sourceCode: "https://github.com/example/java-project",
    },
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <h1 className="text-3xl font-bold mb-5">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            logo={project.logo} 
            name={project.name} 
            description={project.description} 
            DemoLink={project.DemoLink} 
            sourceCode={project.sourceCode} 
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
