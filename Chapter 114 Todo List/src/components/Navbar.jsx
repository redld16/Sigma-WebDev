import React from "react";

const Navbar = () => {
  return (
    <nav className="flex p-3 gap-10 bg-[#00246B] text-white items-center justify-around">
      <div className="logo">
        <span className="cursor-pointer text-2xl font-bold ">iTask</span>
      </div>
      <ul className="flex items-center md:gap-10 ">
        <li className="cursor-pointer hover:font-bold transition-all w-15">
          Home
        </li>
        <li className="cursor-pointer hover:font-bold transition-all w-20">
          Your Tasks
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
