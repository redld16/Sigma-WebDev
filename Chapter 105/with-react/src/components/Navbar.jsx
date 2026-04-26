import React from "react";
import Footer from "./Footer";

function Navbar(props) {
  return (
    <div>
      <div className="logo">{props.logoText}</div>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <Footer></Footer>
    </div>
  );
}

export default Navbar;
