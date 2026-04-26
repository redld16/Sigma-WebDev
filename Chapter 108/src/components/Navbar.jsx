import React, { useEffect } from "react";

const Navbar = ({ color }) => {
  // case 1: run on every render
  useEffect(() => {
    alert("hey i run on every render");
  });

  // case 2 : run on only first render
  useEffect(() => {
    alert("hey i run on only first render");
  }, []);

  // case 3: run on only when certain values changes
  useEffect(() => {
    alert("hey i am runnig beacuse color was changed");
  }, [color]);
  // example of cleanup function
  useEffect(() => {
    alert("hey this is the first render of app.jsx");
    return () => {
      alert("component was unmounted");
    };
  }, []);

  
  return (
    <div>
      <ul style={{ color: color }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
