import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between px-5 text-lg bg-slate-800 text-white py-4">
        <div className="logo text-xl font-bold">Facebook</div>
        <ul className="flex gap-6">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>about</li>
          </Link>
          <Link href="/contact">
            <li>contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
