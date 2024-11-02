import React from 'react';

const Experience = () => {
  return (
    <div 
    name='Experience'
    className="max-w-screen-2xl mx-auto px-4 md:px-14 my-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Work Experience</h2>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Upcoming Project</h3>
        <p className="text-gray-600 mt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias eligendi consectetur similique aliquam placeat magni debitis nihil pariatur a delectus dicta velit officiis, sit fuga deserunt vitae necessitatibus illo numquam?
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Freelance Opportunities</h3>
        <p className="text-gray-600 mt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias eligendi consectetur similique aliquam placeat magni debitis nihil pariatur a delectus dicta velit officiis, sit fuga deserunt vitae necessitatibus illo numquam?

        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Personal Projects</h3>
        <p className="text-gray-600 mt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias eligendi consectetur similique aliquam placeat magni debitis nihil pariatur a delectus dicta velit officiis, sit fuga deserunt vitae necessitatibus illo numquam?
        </p>
      </div>
      {/* When i gain experience */}
      {/* <span>
          [Job Title], [Company/Organization], [Dates] [Brief description of
          responsibilities and achievements] [Job Title],
          [Company/Organization], [Dates] [Brief description of responsibilities
          and achievements] [Freelance/Contract Work], [Client/Organization],
          [Dates] [Brief description of projects and contributions]
        </span> */}
    </div>
  );
}

export default Experience;
