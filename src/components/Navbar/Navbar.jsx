import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import { footerIcons } from "../Footer/footerInfo.js";
import { navLinks } from "./navLinks";
import { Link } from "react-router-dom";
import "./style-navbar.css";
const Navbar = () => {
  const [menu, setMenu] = useState(false); 

  return (
    <header>
      <nav className="py-2 px-[8rem] flex justify-between items-center z-[99]  fixed top-0 left-0 right-0 bg-white min600:px-[2.2rem]">
        {/* Logo */}
        <a href="#" className="w-[10rem]">
          <img src={logo} alt="logo" className="w-[100%]" />
        </a>
        {/* NavItens */}
        <ul className={`nav-items ${menu ? "min900:left-0" : "min900:left-[100%]"}`}>
          {navLinks.map((nav, index) => (
            <li className="nav-item" key={index} onClick={() => setMenu(!menu)}>
              <a href={`../#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <Link to="/shop">
            <li className="nav-item" onClick={() => setMenu(!menu)}>Shop</li>
          </Link>
          {/* Menu */}
          <div className="gap-[1.6rem] items-center min375:flex-wrap min375:justify-center hidden min900:flex">
            {footerIcons.map((icon, index) => (
              <i
                className={`fa-brands ${icon.icon} icon-footer`}
                key={index}></i>
            ))}
          </div>
          {/* CellPhone */}
          <div className="flex items-center md1090:hidden">
            <i className="fa-solid fa-phone text-[1.6rem] text-white bg-[#FBB042] p-[1.2rem] rounded-bl-[2rem]"></i>
            <p className="text-[1.4rem] btn btn-slide p-[0.6rem] md1200:p-[0.4rem] border-[#FBB042] border-solid font-[600] border-2 rounded-r-[2rem]  ">
              +55 71 99687-9987
            </p>
          </div>
        </ul>
        <i
          className={`fa-solid ${
            !menu ? "fa-bars" : "fa-xmark"
          } text-[2.5rem] text-black hidden min900:block z-[999] cursor-pointer`}
          onClick={() => setMenu(!menu)}></i>
      </nav>
    </header>
  );
};

export default Navbar;
