import React, { useState } from "react";
import {MenuIcon, X } from "lucide-react";
import { navItems } from "../Constants";
import logo from "../assets/logo.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleNavbar() {
    setMenuOpen((prevMenuIcon) => !prevMenuIcon);



    
    console.log(menuOpen);
  }

  return (
    <div>
      <nav className="sticky top-0 z-50 flex flex-row lg:flex justify-around items-center h-20 py-4 bg-black">
        <div className="flex justify-center text-center" style={{ width: 200 }}>
          <img src={logo} className="h-10 w-10" alt="logo" />
          <h2 className="text-white text-2xl">Blemo.Dev</h2>
        </div>

        <div>
          <ul className="hidden lg:flex flex-row justify-end text-white gap-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a className="text-lg" href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex gap-8">
          <a
            href="#"
            className="border-solid border-2 border-orange-600 text-white py-1 px-4 rounded-md"
          >
            Sign In
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-1 px-4 rounded-md"
          >
            Create an account
          </a>
        </div>

        {/* /Menu Icons// */}
        <div className="lg:hidden flex justify-end items-center pr-4">
          <button onClick={toggleNavbar}>
            {menuOpen ? <X color="#ffffff" /> : <MenuIcon color="#ffffff" />}
          </button>
        </div>

        {menuOpen && (
          <div
            className="lg:hidden fixed top-20 z-20 flex flex-col justify-center
          items-center bg-neutral-800 text-white text-xl w-full h-[88%] list-none"
          >
            <ul className="space-y-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-x-2">
              <a
                href="#"
                className="border-solid border-2 border-orange-600 text-white py-1 px-4 rounded-md"
              >
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-1 px-4 rounded-md"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
