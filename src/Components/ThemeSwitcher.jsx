import { useState, useEffect } from "react";
import useDarkTheme from "../Hooks/useDarkTheme";

export default function Switcher() {
  const { isDarkMode, toggleTheme } = useDarkTheme();
  const [OpenSwitch, setOpenSwitch] = useState(isDarkMode);

  useEffect(() => {
    setOpenSwitch(isDarkMode);
  }, [isDarkMode]);

  const handleSwitch = () => {
    setOpenSwitch(!OpenSwitch);
    toggleTheme();
  };

  return (
    <button
      className="flex gap-2 items-center text-[#545454]"
      onClick={handleSwitch}
    >
      <span
        className={`text-xs text-black dark:text-[#545454] font-medium ${
          OpenSwitch ? "" : "text-white"
        }`}
      >
        Light
      </span>
      <div className="flex relative justify-start transition duration-300 ease-in-out items-center rounded-full w-8 h-4 bg-[#AFAFAF] dark:bg-[#212121]">
        <div
          className={`absolute w-5 h-5 rounded-full transition duration-300 ease-in-out bg-black dark:bg-white ${
            OpenSwitch ? "translate-x-2/3" : "translate-x-0"
          }`}
        ></div>
      </div>
      <span className="text-xs font-medium text-[#BDBDBD] dark:text-white">
        Dark
      </span>
    </button>
  );
}
