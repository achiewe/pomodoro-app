"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Image from "next/image";
import upArrow from "../../../public/assets/icon-arrow-up.svg";
import downArrow from "../../../public/assets/icon-arrow-down.svg";
import { setPomodoroTimer } from "../redux/features/PomodoroSlice";
import { setShortBreak } from "../redux/features/ShortBreakSlice";
import { setLongBreak } from "../redux/features/LongBreakSlice";

export default function SettingsTime() {
  const dispatch = useDispatch();
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
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-5 mt-4 md:mt-6">
      <div className="flex md:flex-col items-center md:items-start justify-between gap-20 md:gap-2">
        <h3
          className={`text-xs md:text-sm text-semi-blu font-bold opacity-40 ${
            fontContent === "kumbh"
              ? "font-Kumbh"
              : fontContent === "Roboto"
              ? "font-Roboto"
              : fontContent === "SpaceMono"
              ? "font-SpaceMono"
              : ""
          }`}
        >
          pomodoro
        </h3>
        <div className="w-[140px] h-12 flex justify-between items-center px-4 rounded-[10px] bg-[#EFF1FA]">
          <h3
            className={`text-sm text-semi-blu font-bold ${
              fontContent === "kumbh"
                ? "font-Kumbh"
                : fontContent === "Roboto"
                ? "font-Roboto"
                : fontContent === "SpaceMono"
                ? "font-SpaceMono"
                : ""
            }`}
          >
            {pomodoroTimer}
          </h3>
          <div className="flex flex-col gap-2 cursor-pointer">
            <Image
              src={upArrow}
              alt="up arrow"
              onClick={() => {
                if (pomodoroTimer < 60) {
                  dispatch(setPomodoroTimer(pomodoroTimer + 1));
                }
              }}
            />
            <Image
              src={downArrow}
              onClick={() => {
                if (pomodoroTimer > 1) {
                  dispatch(setPomodoroTimer(pomodoroTimer - 1));
                }
              }}
              alt="down arrow"
            />
          </div>
        </div>
      </div>

      <div className="flex md:flex-col items-center md:items-start justify-between gap-20 md:gap-2">
        <h3
          className={`text-xs md:text-sm text-semi-blu font-bold opacity-40 ${
            fontContent === "kumbh"
              ? "font-Kumbh"
              : fontContent === "Roboto"
              ? "font-Roboto"
              : fontContent === "SpaceMono"
              ? "font-SpaceMono"
              : ""
          }`}
        >
          short break
        </h3>
        <div className="w-[140px] h-12 flex justify-between items-center px-4 rounded-[10px] bg-[#EFF1FA]">
          <h3 className="text-sm text-semi-blu font-bold">{shortBreak}</h3>
          <div className="flex flex-col gap-2 cursor-pointer">
            <Image
              src={upArrow}
              alt="up arrow"
              onClick={() => {
                if (shortBreak < 20) {
                  dispatch(setShortBreak(shortBreak + 1));
                }
              }}
            />
            <Image
              src={downArrow}
              alt="down arrow"
              onClick={() => {
                if (shortBreak > 5) {
                  dispatch(setShortBreak(shortBreak - 1));
                }
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex md:flex-col items-center md:items-start justify-between gap-20 md:gap-2">
        <h3 className="text-xs md:text-sm text-semi-blu font-bold opacity-40">
          long break
        </h3>
        <div className="w-[140px] h-12 flex justify-between items-center px-4 rounded-[10px] bg-[#EFF1FA]">
          <h3 className="text-sm text-semi-blu font-bold">{longBreak}</h3>
          <div className="flex flex-col gap-2 cursor-pointer">
            <Image
              src={upArrow}
              alt="up arrow"
              onClick={() => {
                if (longBreak < 30) {
                  dispatch(setLongBreak(longBreak + 1));
                }
              }}
            />
            <Image
              src={downArrow}
              alt="down arrow"
              onClick={() => {
                if (longBreak > 15) {
                  dispatch(setLongBreak(longBreak - 1));
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
