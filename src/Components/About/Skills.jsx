import React from 'react';
import { FaJs, FaReact, FaNodeJs, FaGitAlt, FaCss3Alt, FaHtml5, FaGithubAlt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { GiEarthAmerica } from 'react-icons/gi';

const Skills = () => {
  return (
    <div name='Skills' className="max-w-screen-lg mx-auto px-4 md:px-14 my-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Technical Skills</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <li className="flex items-center">
          <FaHtml5 className="text-orange-500 mr-2" /> HTML
        </li>
        <li className="flex items-center">
          <FaCss3Alt className="text-blue-600 mr-2" /> CSS
        </li>
        <li className="flex items-center">
          <FaJs className="text-yellow-500 mr-2" /> JavaScript
        </li>
        <li className="flex items-center">
          <FaReact className="text-blue-500 mr-2" /> React
        </li>
        <li className="flex items-center">
          <SiTailwindcss className="text-teal-500 mr-2" /> Tailwind CSS
        </li>
        <li className="flex items-center">
          <FaNodeJs className="text-green-600 mr-2" /> Node.js
        </li>
        <li className="flex items-center">
          <SiExpress className="text-gray-600 mr-2" /> Express
        </li>
        <li className="flex items-center">
          <SiMongodb className="text-green-500 mr-2" /> MongoDB
        </li>
        <li className="flex items-center">
          <FaGitAlt className="text-red-600 mr-2" /> Git
        </li>
        <li className="flex items-center">
          <FaGithubAlt className="text-gray-800 mr-2" /> GitHub
        </li>
        <li className="flex items-center">
          <GiEarthAmerica className="text-green-700 mr-2" /> RESTful APIs
        </li>
      </ul>
    </div>
  );
};

export default Skills;
