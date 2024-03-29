import React from "react";

export default function TimerDisplay() {
  return (
    <div className="w-[267.805px] md:w-[410px] h-[267.805px] md:h-[410px] my-[50px] shadow-amber-600 rounded-full bg-[#161932] flex justify-center items-center relative">
      <audio className="hidden"></audio>
      <svg
        width="267.805px"
        height="267.805px"
        className="-rotate-90 md:hidden absolute"
      >
        <circle
          id="circle1"
          cx="133.9025px"
          cy="133.9025px"
          r="120px"
          fill="transparent"
          stroke="red"
          strokeWidth="10px"
          strokeDasharray="753px"
          // strokeDashoffset={calculateDashoffset}
        ></circle>
        <circle
          id="circle2"
          cx="133.9025px"
          cy="133.9025px"
          r="120px"
          fill="transparent"
        ></circle>
      </svg>
      <svg
        width="410px"
        height="410px"
        className="-rotate-90 hidden md:block absolute"
      >
        <circle
          id="circle1"
          cx="205px"
          cy="205px"
          r="185px"
          fill="transparent"
          stroke="red"
          strokeWidth="20px"
          strokeDasharray="1161px"
          // strokeDashoffset={calculateDashoffsetTablet}
        ></circle>
        <circle
          id="circle2"
          cx="205px"
          cy="205px"
          r="185px"
          fill="transparent"
        ></circle>
      </svg>
      <div className="flex flex-col w-full justify-center items-center gap-[5px]">
        <h1 className="text-[80px] leading-[118.48px] tracking-[-10px] font-normal text-[#D7E0FF]">
          17 : 59
        </h1>
        <h3 className="tracking-[13.13px] text-[#D7E0FF] text-[14px] leading-[20.73px] font-bold">
          PAUSE
        </h3>
      </div>
    </div>
  );
}
