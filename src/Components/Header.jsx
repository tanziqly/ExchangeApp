import { Link } from "react-router-dom";

import Switcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <div className="w-full max-w-[1440px] py-4 flex justify-between">
      <ul className="flex gap-8 text-base text-[#545454]">
        <li>
          <Link to="/" className="hover:text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-white">
            Rates
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-white">
            About
          </Link>
        </li>
      </ul>
      <Link to="/" className="text-white font-bold uppercase">
        Central bank exchange rates
      </Link>
      <Switcher />
    </div>
  );
}
