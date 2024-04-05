"use client";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useRef, useState } from "react";

export default function TimerContent() {
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

  const fontContent = useSelector(
    (store: RootState) => store.fontContent.fontContent
  );

  const [circle1Dashoffset, setCircle1Dashoffset] = useState(753);
  const [circle2Dashoffset, setCircle2Dashoffset] = useState(1161);
  const [timer, setTimer] = useState(getInitialTimerValue(panelOption));
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  console.log(circle1Dashoffset, "circle1Dashoffset");
  console.log(circle2Dashoffset, "circle2Dashoffset");

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

  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  useEffect(() => {
    if (!isRunning || remainingTime === null) return;

    const sessionTime =
      panelOption === "pomodoro"
        ? pomodoroTimer
        : panelOption === "short break"
        ? shortBreak
        : panelOption === "long break"
        ? longBreak
        : 0;

    let currentTime = remainingTime;

    intervalRef.current = setInterval(() => {
      currentTime -= 1;

      if (currentTime <= 0) {
        clearInterval(intervalRef.current!);
        setIsRunning(false);
        setCircle1Dashoffset(0);
        setCircle2Dashoffset(0);
        setTimer("00:00");
        return;
      }

      const circle1DashoffsetValue = Math.max(
        0,
        (753 * currentTime) / (sessionTime * 60)
      );
      const circle2DashoffsetValue = Math.max(
        0,
        (1161 * currentTime) / (sessionTime * 60)
      );

      const minutes = Math.floor(currentTime / 60);
      const seconds = currentTime % 60;
      const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
        seconds
      ).padStart(2, "0")}`;

      setCircle1Dashoffset(circle1DashoffsetValue);
      setCircle2Dashoffset(circle2DashoffsetValue);
      setTimer(formattedTime);
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, [
    isRunning,
    panelOption,
    pomodoroTimer,
    shortBreak,
    longBreak,
    remainingTime,
  ]);

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
  const timerToSeconds = (time: string): number => {
    const [minutes, seconds] = time.split(":").map(Number);
    return minutes * 60 + seconds;
  };

  const startTimer = () => {
    setIsRunning(true);
    setRemainingTime(timerToSeconds(timer));
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current!);
    setIsRunning(false);
    setRemainingTime(null);
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
      <TimerContent />
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
