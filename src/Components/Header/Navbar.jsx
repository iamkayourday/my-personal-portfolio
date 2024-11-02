import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import Mode from '../Utils/Mode'; // Import your Mode component

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Skills" },
    { id: 5, text: "Experience" },
    { id: 6, text: "Contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-10 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="flex justify-between items-center h-full">
          {/* Mobile menu icon on the left */}
          <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer text-xl">
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>

          {/* Centered logo */}
          <div className="flex-1 flex justify-center md:justify-start items-center">
            <img className="h-14 md:h-16 w-auto ml-4" alt="Logo" src="logo.png" />
          </div>

          {/* Dark mode icon on the right */}
          <div className="hidden md:block">
            <Mode />
          </div>

          {/* Spacer for alignment on mobile */}
          <div className="md:hidden w-6"></div>
        </div>

        {/* Mobile navbar */}
        {menu && (
          <div className="bg-white dark:bg-gray-900 w-full h-screen fixed top-0 left-0 flex flex-col items-center justify-start md:hidden p-4">
            {/* Close icon in the top right corner */}
            <div className="flex justify-end w-full mb-4">
              <IoCloseSharp onClick={() => setMenu(false)} className="text-xl cursor-pointer" />
            </div>
            <ul className="space-y-5 text-xl">
              {navItems.map(({ id, text }) => (
                <li key={id} className="hover:scale-105 duration-200 font-semibold cursor-pointer">
                  <Link onClick={() => setMenu(false)} to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Dark mode icon in the mobile view */}
            <div className="mt-4">
              <Mode />
            </div>
          </div>
        )}

        {/* Desktop navbar */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ id, text }) => (
            <li key={id} className="hover:scale-105 duration-200 cursor-pointer hover:text-green-500">
              <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Dark mode icon on mobile view */}
        <div className="md:hidden block absolute top-4 right-4">
          <Mode />
        </div>
      </div>
    </>
  );
}

export default Navbar;
