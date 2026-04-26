import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white text-2xl">
      <ul className="flex items-center gap-30 p-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
