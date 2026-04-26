import React from "react";
import { memo } from "react";

const Navbar = ({ adjective, getAdjective }) => {
  console.log("navbar is renderd");
  return (
    <div>
      i am {adjective} navbar
      <button
        onClick={() => {
          getAdjective();
        }}
      >
        {getAdjective()}
      </button>
    </div>
  );
};

export default memo(Navbar);
