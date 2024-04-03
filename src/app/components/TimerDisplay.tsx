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

  useEffect(() => {
    const sessionTime =
      panelOption === "pomodoro"
        ? pomodoroTimer
        : panelOption === "short break"
        ? shortBreak
        : panelOption === "long break"
        ? longBreak
        : 0;

    const initialCircle1Dashoffset =
      panelOption === "pomodoro"
        ? 753
        : panelOption === "short break"
        ? 753 // Adjust this value according to your needs
        : panelOption === "long break"
        ? 753 // Adjust this value according to your needs
        : 0;

    const initialCircle2Dashoffset =
      panelOption === "pomodoro"
        ? 1161
        : panelOption === "short break"
        ? 1161 // Adjust this value according to your needs
        : panelOption === "long break"
        ? 1161 // Adjust this value according to your needs
        : 0;

    setCircle1Dashoffset(initialCircle1Dashoffset);
    setCircle2Dashoffset(initialCircle2Dashoffset);

    let currentTime = sessionTime * 60; // Convert session time to seconds

    if (isRunning) {
      intervalRef.current = setInterval(() => {
        currentTime -= 1; // Decrease currentTime by 1 second

        if (currentTime <= 0) {
          clearInterval(intervalRef.current!);
          setIsRunning(false);
          currentTime = 0;
          setCircle1Dashoffset(0); // Set circle1Dashoffset to 0 when timer reaches 00:00
          setCircle2Dashoffset(0); // Set circle2Dashoffset to 0 when timer reaches 00:00
          setTimer("00:00"); // Set timer to 00:00 when timer reaches 00:00
          return;
        }

        // Calculate dashoffset values based on current time and session time
        const circle1DashoffsetValue = Math.max(
          0,
          (753 * currentTime) / (sessionTime * 60) // Adjust this calculation to your needs
        );
        const circle2DashoffsetValue = Math.max(
          0,
          (1161 * currentTime) / (sessionTime * 60) // Adjust this calculation to your needs
        );

        // Format remaining time as MM:SS
        const minutes = Math.floor(currentTime / 60);
        const seconds = currentTime % 60;
        const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
          seconds
        ).padStart(2, "0")}`;

        // Set the state variables with calculated values
        setCircle1Dashoffset(circle1DashoffsetValue);
        setCircle2Dashoffset(circle2DashoffsetValue);
        setTimer(formattedTime);
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current!);
    };
  }, [panelOption, isRunning, pomodoroTimer, shortBreak, longBreak]);

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

  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimer((previousTime) => {
        let totalSeconds;
        if (remainingTime !== null) {
          // If remaining time is stored, use it
          totalSeconds = remainingTime;
          setRemainingTime((prevTime) => {
            if (prevTime !== null && prevTime > 0) return prevTime - 1;
            else return null;
          });
        } else {
          // If remaining time is not stored, calculate from displayed time
          const [minutes, seconds] = previousTime.split(":").map(Number);
          totalSeconds = minutes * 60 + seconds - 1;
        }

        if (totalSeconds < 0) {
          clearInterval(intervalRef.current!);
          setIsRunning(false);
          setCircle1Dashoffset(0);
          setCircle2Dashoffset(0);
          setTimer("00:00");
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
    // Store remaining time when the timer is stopped
    setRemainingTime(timerToSeconds(timer));
    // Only set isRunning to false if the timer is currently running
    if (panelOption) {
      setIsRunning(false);
    }
  };

  // Helper function to convert timer format to seconds
  const timerToSeconds = (time: string): number => {
    const [minutes, seconds] = time.split(":").map(Number);
    return minutes * 60 + seconds;
  };

  console.log(isRunning);

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
