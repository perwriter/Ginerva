import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
// import Logo from "../../../public/logo192.png";
import DarkMode from "./DarkMode";
import { GiCrossMark } from "react-icons/gi";

export const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "home",
  },
  {
    id: 1,
    name: "Services",
    link: "/services",
  },
  {
    id: 2,
    name: "Destinations",
    link: "/destination",
  },
  {
    id: 3,
    name: "About Us",
    link: "/aboutus",
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div 
      className="fixed z-10 w-full bg-gray-100 dark:bg-gray-900 dark:text-white duration-300
    "
    >
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <a
            target="_blank"
            href="/"
            className="flex items-center gap-3"
          >
            <img src="/till.png" alt="" />
            <span className=" text-2xl sm:text-3xl font-bold font-libreBaskerville pl-8">
             Ginerva Tours 
            </span>
          </a>
          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
                  >
                    {name}
                  </a>
                </li>
              ))}
              <button className="primary-btn"><a href="/form">Get in Touch</a></button>
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view Drawer  */}
          <div className="flex items-center gap-4 md:hidden ">
            <DarkMode className="z-50"/>
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <GiCrossMark 
                onClick={toggleMenu}
                className=" cursor-pointer transition-all z-30"
                size={30}
              />
            ) : (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all z-30"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
