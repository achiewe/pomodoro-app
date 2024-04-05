"use client";

export default function TimerDisplay() {
  return (
    <div>
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
          stroke={
            contentColor === "red"
              ? "#F87070"
              : contentColor === "green"
              ? "#70F3F8"
              : contentColor === "purple"
              ? "#D881F8"
              : ""
          }
          strokeWidth="10px"
          strokeDasharray="753px"
          strokeDashoffset={circle1Dashoffset}
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
          stroke={
            contentColor === "red"
              ? "#F87070"
              : contentColor === "green"
              ? "#70F3F8"
              : contentColor === "purple"
              ? "#D881F8"
              : ""
          }
          strokeWidth="20px"
          strokeDasharray="1161px"
          strokeDashoffset={circle2Dashoffset}
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
