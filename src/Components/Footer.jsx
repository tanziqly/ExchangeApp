import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="max-w-[1440px] w-full px-5 py-4 flex justify-between">
      <span className="dark:text-[#545454] text-[#5f5f5f]">
        © Bank of Russia, 2000–2024
      </span>
      <span className="flex items-center gap-1 text-black dark:text-white">
        Designed by
        <Link to="https://github.com/tanziqly" className="underline">
          tanziqly
        </Link>
      </span>
    </div>
  );
}
