import { useState } from "react";
import useExchangeRate from "../Hooks/useExchangeRate";

export default function Exchange() {
  const [clickButton, setClickButton] = useState(false);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleButtonClick = () => {
    setClickButton(!clickButton);
  };

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const { course, fromValuteDetails } = useExchangeRate(
    inputValue1,
    inputValue2,
    clickButton
  );

  return (
    <div className="flex gap-28 w-full max-w-[1440px] px-5">
      <div className="flex gap-2 flex-col">
        <input
          className="bg-[#eaeaea] dark:text-white text-black dark:bg-[#0C0D0E] p-3 rounded-xl w-[350px] border border-[#bdbdbd] dark:border-[#545454] dark:placeholder:text-[#545454] placeholder:text-[#aaaaaa] text-sm"
          type="text"
          placeholder="From (Currency)"
          value={inputValue1}
          onChange={handleInputChange1}
        />
        <input
          className="bg-[#eaeaea] dark:text-white text-black dark:bg-[#0C0D0E] p-3 rounded-xl w-[350px] border border-[#bdbdbd] dark:border-[#545454] dark:placeholder:text-[#545454] placeholder:text-[#aaaaaa] text-sm"
          type="text"
          placeholder="To (Currency)"
          value={inputValue2}
          onChange={handleInputChange2}
        />
        <button
          onClick={handleButtonClick}
          className="px-3 py-2 border bg-black text-white dark:text-black dark:bg-white w-full rounded"
        >
          Check Out
        </button>
        <span className="text-neutral-700 uppercase text-xs">
          *Enter Char Code of currency to see course
        </span>
      </div>
      {course !== null && fromValuteDetails && (
        <div className="flex flex-col gap-4">
          <h2 className="text-black dark:text-white font-bold">
            {fromValuteDetails.Name}
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 text-sm text-[#aaaaaa] dark:text-[#5b5b5b] ">
              Current course:
              <span className="text-black dark:text-white font-bold">
                {course}
              </span>
            </div>
            <div className="flex gap-2 text-sm text-[#aaaaaa] dark:text-[#5b5b5b] ">
              Unit:
              <span className="text-black dark:text-white font-bold">
                {fromValuteDetails.Nominal}
              </span>
            </div>
            <div className="flex gap-2 text-sm text-[#aaaaaa] dark:text-[#5b5b5b] ">
              W.Code:
              <span className="text-black dark:text-white font-bold">
                {fromValuteDetails.CharCode}
              </span>
            </div>
            <div className="flex gap-2 text-sm text-[#aaaaaa] dark:text-[#5b5b5b] ">
              C.Code:
              <span className="text-black dark:text-white font-bold">
                {fromValuteDetails.NumCode}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
