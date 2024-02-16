import React from "react";
// import { FaUserCircle } from "react-icons/fa";

import { MenuLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "right-0" : "-right-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          {/* <FaUserCircle size={50} /> */}
          <div>
            {/* <h1>Hello,</h1>
            <h1 className="text-sm text-slate-500">Guest</h1> */}
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map((data) => (
              <li key={data.name}>
                <a href={data.link} className="mb-5 inline-block">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    
    </div>
  );
};

export default ResponsiveMenu;
