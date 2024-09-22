import { Link } from "react-router-dom";

export default function Title({ button, children, pbottom }) {
  const ZeroAdd = (x) => {
    return x <= 10 ? "0" + x : x;
  };

  const date = new Date();

  const day = ZeroAdd(date.getDate());
  const month = ZeroAdd(date.getMonth());
  const year = date.getFullYear();

  const currentDate = `${day}.${month}.${year}`;

  return (
    <div
      className={`${pbottom} w-full max-w-[1440px] px-5 dark:text-[#545454] text-[#5f5f5f]`}
    >
      <div className="flex mb-8 gap-3 flex-col w-full max-w-[944px]">
        <h1 className="dark:text-white text-black text-5xl font-black">
          Official exchange rates on this day
        </h1>
        <span>
          The Central Bank of the Russian Federation has set from {currentDate}{" "}
          the following exchange rates of foreign currencies against the ruble
          without assuming any liability to buy or sell foreign currency at the
          rates below
        </span>
        <div className="flex gap-4 mt-5">
          <div className="px-3 py-2 border border-[#5f5f5f] dark:border-[#545454] w-fit rounded">
            {currentDate}
          </div>
          <Link to="/exchange">
            <button
              className={`${button} px-3 py-2 border bg-black text-white dark:text-black dark:bg-white w-fit rounded`}
            >
              Check Out
            </button>
          </Link>
        </div>
      </div>
      <span className=" text-lg leading-8">{children}</span>
    </div>
  );
}
