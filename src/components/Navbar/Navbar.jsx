import React from "react";
import logo from "../../imgs/logo.png";
import { navLinks } from "./navLinks";
import "./style-navbar.css"
const Navbar = () => {
  return (
    <header>
      <nav className="py-2 px-[8rem] flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="w-[10rem]">
          <img src={logo} alt="" className="w-[100%]" />
        </a>
        {/* NavItens */}
        <ul className="flex gap-[4rem] items-center">
          {navLinks.map((nav, index) => (
            <li className="text-[1.6rem] font-[700] nav-items" key={index}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          {/* CellPhone */}
          <div className="flex items-center">
            <i class="fa-solid fa-phone text-[1.6rem] text-white bg-[#FBB042] p-[1.6rem] rounded-bl-[2rem]"></i>
            <p className="text-[1.6rem] btn btn-slide p-[0.9rem] border-[#FBB042] border-solid font-[600]">+55 71 99687-9987</p>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
