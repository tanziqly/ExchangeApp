import { NavLink, Link } from "react-router-dom";

import Switcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <div className="w-full max-w-[1440px] py-4 flex justify-between">
      <ul className="flex gap-8 text-base text-[#ACACAC] dark:text-[#545454]">
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
      <Link to="/" className="text-black dark:text-white font-bold uppercase">
        Central bank exchange rates
      </Link>
      <Switcher />
    </div>
  );
}
