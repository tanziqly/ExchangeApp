import React from "react";

export default function Exchange() {
  return (
    <div className="flex gap-28 w-full max-w-[1440px] px-5">
      <div className="flex gap-2 flex-col">
        <input
          className="bg-[#eaeaea] dark:bg-[#0C0D0E] p-3 rounded-xl w-[350px] border border-[#bdbdbd] dark:border-[#545454] dark:placeholder:text-[#545454] placeholder:text-[#aaaaaa] text-sm"
          type="text"
          placeholder="From (Currency)"
        />
        <input
          className="bg-[#eaeaea] dark:bg-[#0C0D0E] p-3 rounded-xl w-[350px] border border-[#bdbdbd] dark:border-[#545454] dark:placeholder:text-[#545454] placeholder:text-[#aaaaaa] text-sm"
          type="text"
          placeholder="To (Currency)"
        />
        <button className="px-3 py-2 mt-1 w-full border bg-black text-white dark:text-black dark:bg-white rounded">
          Enter
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-black dark:text-white font-bold">UK pounds</h2>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 text-sm text-[#aaaaaa] dark:text-[#5b5b5b] ">
            Current course:
            <span className="text-black dark:text-white font-bold">111</span>
          </div>
          <div className="flex gap-2 text-sm text-[#aaaaaa] dark:text-[#5b5b5b] ">
            Unit:
            <span className="text-black dark:text-white font-bold">1</span>
          </div>
          <div className="flex gap-2 text-sm text-[#aaaaaa] dark:text-[#5b5b5b] ">
            W.Code:
            <span className="text-black dark:text-white font-bold">GBP</span>
          </div>
          <div className="flex gap-2 text-sm text-[#aaaaaa] dark:text-[#5b5b5b] ">
            C.Code:
            <span className="text-black dark:text-white font-bold">826</span>
          </div>
        </div>
      </div>
    </div>
  );
}
