import React from "react";

const ProjectCard = ({ logo, name, description, DemoLink, sourceCode }) => (
  <div className="border-2 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform ">
    <img src={logo} className="w-full h-48 object-cover" alt={`${name} logo`} />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex space-x-4">
        <a 
          href={DemoLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded transition-colors duration-200"
          aria-label={`Watch video for ${name}`}
        >
          Live Demo
        </a>
        <a 
          href={sourceCode} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded transition-colors duration-200"
          aria-label={`View source code for ${name}`}
        >
          Source Code
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;