"use client";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useRef, useState } from "react";

export default function TimerDisplay() {
  const panelOption = useSelector(
    (store: RootState) => store.panelOption.panelOption
  );
  const pomodoroTimer = useSelector(
    (store: RootState) => store.pomodoroTimer.pomodoroTimer
  );
  const shortBreak = useSelector(
    (store: RootState) => store.shortBreak.shortBreak
  );
  const longBreak = useSelector(
    (store: RootState) => store.longBreak.longBreak
  );
  const contentColor = useSelector(
    (store: RootState) => store.contentColor.contentColor
  );
  const fontContent = useSelector(
    (store: RootState) => store.fontContent.fontContent
  );

  const [timer, setTimer] = useState(getInitialTimerValue(panelOption));
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      stopTimer();
      setIsRunning(false);
    }
    setTimer(getInitialTimerValue(panelOption));
  }, [panelOption, longBreak, shortBreak, pomodoroTimer]);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current!);
    };
  }, []);

  function formatTime(minutes: number): string {
    const formattedMinutes = String(minutes).padStart(2, "0");
    return `${formattedMinutes}:00`;
  }

  function getInitialTimerValue(option: string): string {
    switch (option) {
      case "pomodoro":
        return formatTime(pomodoroTimer);
      case "short break":
        return formatTime(shortBreak);
      case "long break":
        return formatTime(longBreak);
      default:
        return "00:00";
    }
  }

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimer((previousTime) => {
        const [minutes, seconds] = previousTime.split(":").map(Number);
        let totalSeconds = minutes * 60 + seconds - 1;
        if (totalSeconds < 0) {
          clearInterval(intervalRef.current!);
          setIsRunning(false);
          return "00:00";
        }
        const newMinutes = Math.floor(totalSeconds / 60);
        const newSeconds = totalSeconds % 60;
        return `${String(newMinutes).padStart(2, "0")}:${String(
          newSeconds
        ).padStart(2, "0")}`;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current!);
    setIsRunning(false);
  };

  const handleStartButtonClick = () => {
    if (!isRunning) {
      startTimer();
    } else {
      stopTimer();
    }
  };

  return (
    <div className="w-[267.805px] md:w-[410px] h-[267.805px] md:h-[410px] mt-[50px] mb-[100px] shadow-amber-600 rounded-full bg-[#161932] flex justify-center items-center relative">
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
        <h1
          className={`text-[80px] leading-[118.48px] tracking-[-10px] font-normal text-[#D7E0FF] ${
            fontContent === "kumbh"
              ? "font-Kumbh"
              : fontContent === "Roboto"
              ? "font-Roboto"
              : fontContent === "SpaceMono"
              ? "font-SpaceMono"
              : ""
          }`}
        >
          {timer}
        </h1>
        <button
          onClick={handleStartButtonClick}
          className={`tracking-[13.13px] text-[#D7E0FF] text-[14px] cursor-pointer hover:text-[#F87070] leading-[20.73px] font-bold z-10 ${
            fontContent === "kumbh"
              ? "font-Kumbh"
              : fontContent === "Roboto"
              ? "font-Roboto"
              : fontContent === "SpaceMono"
              ? "font-SpaceMono"
              : ""
          }`}
        >
          {isRunning ? "STOP" : "START"}
        </button>
      </div>
    </div>
  );
}
