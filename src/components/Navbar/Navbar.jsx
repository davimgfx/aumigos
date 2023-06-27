import React from "react";
import logo from "../../imgs/logo.png";
import { navLinks } from "./navLinks";
import "./style-navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="py-2 px-[8rem] flex justify-between items-center z-[999]  fixed top-0 left-0 right-0 bg-white min600:px-[2.2rem]">
        {/* Logo */}
        <a href="#" className="w-[10rem]">
          <img src={logo} alt="" className="w-[100%]" />
        </a>
        {/* NavItens */}
        <ul className="flex gap-[4rem] items-center">
          {navLinks.map((nav, index) => (
            <li
              className="text-[1.6rem] font-[700] nav-items hover:text-[#FBB042] "
              key={index}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        {/* Menu */}
        <i className="fa-solid fa-bars text-[2.5rem] text-black hidden min900:block"></i> 
          {/* CellPhone */}
          <div className="flex items-center md1090:hidden">
            <i class="fa-solid fa-phone text-[1.6rem] text-white bg-[#FBB042] p-[1.2rem] rounded-bl-[2rem]"></i>
            <p className="text-[1.4rem] btn btn-slide p-[0.6rem] md1200:p-[0.4rem] border-[#FBB042] border-solid font-[600] border-2 rounded-r-[2rem]  ">
              +55 71 99687-9987
            </p>
          </div> 
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
