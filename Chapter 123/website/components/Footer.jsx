import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="flex justify-around bg-slate-800 text-white text-xs py-4">
        <div className="text-center">
          Copyright &copy; Facebook | All Rights Reserved &reg;{" "}
        </div>
        <ul className="flex gap-3 text-sm">
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/about">
            <li>about</li>
          </a>
          <a href="/contact">
            <li>contact</li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
