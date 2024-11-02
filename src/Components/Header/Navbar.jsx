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
    { id: 3, text: "Skills" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Projects" },
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

          {/* Logo - centered on mobile, aligned to the left on larger screens */}
          <div className="md:mr-auto flex justify-center md:justify-start items-center">
            <img className="h-14 md:h-16 w-auto" alt="Logo" src="lightlogo.png" />
          </div>

          {/* Dark mode icon on the right in mobile view, visible only when menu is closed */}
          {!menu && (
            <div className="md:hidden">
              <Mode />
            </div>
          )}

          {/* Desktop navbar */}
          <ul className="hidden md:flex space-x-8 items-center">
            {navItems.map(({ id, text }) => (
              <li key={id} className="hover:scale-105 duration-200 cursor-pointer hover:text-green-500">
                <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                  {text}
                </Link>
              </li>
            ))}
            {/* Add Mode Component here for desktop view */}
            <li className="hover:scale-105 duration-200 cursor-pointer">
              <Mode />
            </li>
          </ul>
        </div>

        {/* Mobile navbar menu */}
        {menu && (
          <div className="bg-white dark:bg-gray-900 w-full h-screen fixed top-0 left-0 flex flex-col items-center justify-start md:hidden p-4">
            {/* Close icon at the top right corner */}
            <div className="w-full flex justify-end">
              <IoCloseSharp onClick={() => setMenu(false)} className="text-2xl cursor-pointer" />
            </div>
            <ul className="mt-10 space-y-5 text-xl">
              {navItems.map(({ id, text }) => (
                <li key={id} className="hover:scale-105 duration-200 font-semibold cursor-pointer">
                  <Link onClick={() => setMenu(false)} to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
