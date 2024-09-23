import { NavLink, Link } from "react-router-dom";

import Switcher from "./ThemeSwitcher";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleLinkClose = () => {
    setOpenMenu(!openMenu);
  };

  const handleNavOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="relative w-full items-center max-w-[1440px] px-4 py-4 flex justify-between">
      <ul className="hidden md:flex gap-8 text-base text-[#ACACAC] dark:text-[#545454]">
        <li>
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive
                ? "text-black dark:text-white"
                : "hover:text-black dark:hover:text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exchange"
            className={(navData) =>
              navData.isActive
                ? "text-black dark:text-white"
                : "hover:text-black dark:hover:text-white"
            }
          >
            Rates
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(navData) =>
              navData.isActive
                ? "text-black dark:text-white"
                : "hover:text-black dark:hover:text-white"
            }
          >
            About
          </NavLink>
        </li>
      </ul>
      <Link
        to="/"
        className="text-black text-sm md:text-base dark:text-white font-bold uppercase"
      >
        Central bank exchange rates
      </Link>
      <Switcher className={"hidden md:flex"} />
      <button onClick={handleNavOpen} className="flex gap-1 flex-col md:hidden">
        <div className="h-[2px] rounded w-5 dark:bg-white bg-black"></div>
        <div className="h-[2px] rounded w-5 dark:bg-white bg-black"></div>
        <div className="h-[2px] rounded w-5 dark:bg-white bg-black"></div>
      </button>
      {openMenu && (
        <div className="flex flex-col gap-5 rounded-xl dark:bg-neutral-900 bg-neutral-100 right-5 left-5 p-5 absolute top-20">
          <ul className="flex flex-col md:hidden gap-4 text-base text-[#ACACAC] dark:text-[#545454]">
            <li className="w-full">
              <NavLink
                to="/"
                onClick={handleLinkClose}
                className={({ isActive }) =>
                  `flex w-full p-2 ${
                    isActive
                      ? "text-black dark:text-white"
                      : "hover:text-black dark:hover:text-white"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink
                to="/exchange"
                onClick={handleLinkClose}
                className={({ isActive }) =>
                  `flex w-full p-2 ${
                    isActive
                      ? "text-black dark:text-white"
                      : "hover:text-black dark:hover:text-white"
                  }`
                }
              >
                Rates
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink
                to="/about"
                onClick={handleLinkClose}
                className={({ isActive }) =>
                  `flex w-full p-2 ${
                    isActive
                      ? "text-black dark:text-white"
                      : "hover:text-black dark:hover:text-white"
                  }`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
          <hr className="dark:border-neutral-700 border-neutral-200" />
          <Switcher className={"p-2 flex md:hidden"} />
        </div>
      )}
    </div>
  );
}
