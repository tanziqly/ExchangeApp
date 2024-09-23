import { NavLink, Link } from "react-router-dom";
import Switcher from "./ThemeSwitcher";
import { useState } from "react";

const NavItem = ({ to, children, onClick }) => (
  <li className="w-full">
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex w-full p-2 ${
          isActive
            ? "text-black dark:text-white"
            : "hover:text-black dark:hover:text-white"
        }`
      }
    >
      {children}
    </NavLink>
  </li>
);

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu((prev) => !prev);

  return (
    <div className="relative w-full max-w-[1440px] px-4 py-4 flex justify-between items-center">
      <ul className="hidden md:flex gap-8 text-base text-[#ACACAC] dark:text-[#545454]">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/exchange">Rates</NavItem>
        <NavItem to="/about">About</NavItem>
      </ul>
      <Link
        to="/"
        className="text-black text-sm md:text-base dark:text-white font-bold uppercase"
      >
        Central bank exchange rates
      </Link>
      <Switcher className="hidden md:flex" />
      <button onClick={toggleMenu} className="flex gap-1 flex-col md:hidden">
        <div className="h-[2px] rounded w-5 dark:bg-white bg-black"></div>
        <div className="h-[2px] rounded w-5 dark:bg-white bg-black"></div>
        <div className="h-[2px] rounded w-5 dark:bg-white bg-black"></div>
      </button>
      {openMenu && (
        <div className="flex flex-col gap-5 rounded-xl dark:bg-neutral-900 bg-neutral-100 right-5 left-5 p-5 absolute top-20">
          <ul className="flex flex-col md:hidden gap-4 text-base text-[#ACACAC] dark:text-[#545454]">
            <NavItem to="/" onClick={toggleMenu}>
              Home
            </NavItem>
            <NavItem to="/exchange" onClick={toggleMenu}>
              Rates
            </NavItem>
            <NavItem to="/about" onClick={toggleMenu}>
              About
            </NavItem>
          </ul>
          <hr className="dark:border-neutral-700 border-neutral-200" />
          <Switcher className="p-2 flex md:hidden" />
        </div>
      )}
    </div>
  );
}
