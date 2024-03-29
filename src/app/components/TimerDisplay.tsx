import React from "react";

export default function TimerDisplay() {
  return (
    <div className="w-[267.805px] md:w-[410px] h-[267.805px] md:h-[410px] my-[50px] rounded-full shadow-mobile-shadow bg-dark-blue flex justify-center items-center relative">
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
    </div>
  );
}
