import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl mx-auto px-4 md:px-14 my-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
      >
        {/* Left Section */}
        <div className="mt-12 md:mt-24 space-y-6">
          <h1 className="text-2xl md:text-xl lg:text-3xl font-bold text-gray-800 flex items-center justify-start md:justify-start">
            Hello, I'm a
            <span className=" text-[#6a994e] mx-2">
              <ReactTyped
                className="font-bold text-[#6a994e]"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </span>
          </h1>

          <p className=" text-left mt-4 text-gray-700 md:max-w-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            recusandae consequatur. Accusamus sint libero eligendi laborum fuga
            repudiandae? Asperiores tempore eos animi dolores corrupti! Sint
            quos, mollitia architecto aliquam nesciunt, optio cum delectus sit
            voluptatum aut ratione quaerat veniam aperiam!
          </p>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center md:flex-row justify-center md:justify-start space-y-6 md:space-y-0 mt-6">
            <div className="text-center space-y-2 md:text-left">
              <h2 className="font-bold text-lg md:text-sm">Available on</h2>
              <ul className="flex space-x-5 justify-center">
                <li>
                  <a
                    href="https://www.github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-gray-800 text-2xl cursor-pointer hover:text-gray-600 transition-colors duration-200" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-blue-700 text-2xl cursor-pointer hover:text-blue-500 transition-colors duration-200" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <IoLogoYoutube className="text-red-600 text-2xl cursor-pointer hover:text-red-500 transition-colors duration-200" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-blue-400 text-2xl cursor-pointer hover:text-blue-300 transition-colors duration-200" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Tech Stacks */}
            <div className="text-center space-y-2 md:ml-10 lg:ml-44 md:text-left">
              <h2 className="font-bold text-xl md:text-sm">Currently working on</h2>
              <div className="flex space-x-5 justify-center">
                <SiMongodb className="text-green-600 text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                <SiExpress className="text-red-700 text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                <FaReact className="text-blue-600 text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                <FaNodeJs className="text-green-500 text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-start mt-16 md:mt-20">
          <img
            src="basit.jpg"
            className="rounded-md w-[350px] h-[350px] md:w-[350px] md:h-[350px] shadow-lg"
            alt="Profile"
          />
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
