import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center bg-blue-500 text-white">
      <ul className="flex items-center gap-25 p-4 text-2xl" >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
