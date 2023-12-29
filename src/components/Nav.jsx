import React from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";
const Nav = () => {
  return (
    <header className="w-full flex items-center justify-center pr-2">
      <nav className="w-full py-6 flex items-center justify-between">
        <a href="#">
          <img
            src={headerLogo}
            alt="headerLogo"
            // width={150}
            className="w-30 md:150"
          />
        </a>
        <ul className="lg:flex px-6 gap-16 text-slate-500 font-semibold text-xl hidden">
          {navLinks.map((item) => {
            return (
              <li>
                <a href={item.href}>{item.label}</a>
              </li>
            );
          })}
        </ul>
        <p className="hidden lg:block  text-slate-500 font-semibold text-xl">
          signIn/explore
        </p>
        <div className="lg:hidden ">
          <img src={hamburger} alt="hamburger" width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
