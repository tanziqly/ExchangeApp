import { useEffect, useState } from "react";

export default function Switcher() {
  const [OpenSwitch, setOpenSwitch] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const handleSwitch = () => {
    setOpenSwitch(!OpenSwitch);

    if (isDarkMode) {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
      window.document.documentElement.classList.add("dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className="flex gap-2 items-center text-[#545454]"
      onClick={handleSwitch}
    >
      <span className={`text-xs font-medium ${OpenSwitch ? "" : "text-white"}`}>
        Dark
      </span>
      <div
        className={`flex justify-start items-center rounded-full w-8 h-4 bg-[#212121] ${
          OpenSwitch ? "justify-end" : "justify-start"
        }`}
      >
        <div className="w-5 h-5 rounded-full bg-white"></div>
      </div>
      <span className={`text-xs font-medium ${OpenSwitch ? "text-white" : ""}`}>
        Light
      </span>
    </button>
  );
}
