import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  // State to manage the Header's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the Header's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: <Link to="/">Home</Link> },
    { id: 2, text: <Link to="/project">Projects</Link> },
    { id: 3, text: <Link to="/resume">Resume</Link> },
    
  ];

  return (
    <div className="bg-black flex justify-between items-center h-16 w-full  mx-auto px-4 text-white">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Portfolio</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="px-2 hover:bg-green-300 rounded-md m-2 cursor-pointer duration-200 hover:text-black"
          >
            {item.text}
          </li>
        ))}
      </ul>
      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] "
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Portfolio.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="px-4 border-b mb-4  hover:bg-green-300 duration-200 hover:text-black cursor-pointer border-gray-600"
            onClick={handleNav}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
