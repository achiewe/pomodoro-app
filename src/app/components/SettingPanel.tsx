"use client";
import upArrow from "../../../public/assets/icon-arrow-up.svg";
import downArrow from "../../../public/assets/icon-arrow-down.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSetting } from "../redux/features/OpenSettingSlice";
import { RootState } from "../redux/store";
import { setPomodoroTimer } from "../redux/features/PomodoroSlice";
import { setShortBreak } from "../redux/features/ShortBreakSlice";
import { setLongBreak } from "../redux/features/LongBreakSlice";

export default function SettingPanel() {
  const dispatch = useDispatch();
  const openSetting = useSelector(
    (store: RootState) => store.openSetting.openSetting
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

  return (
    <div
      className={`w-screen h-screen absolute top-0 left-0 ${
        openSetting ? "flex" : "hidden"
      } flex-col px-[15px] bg-[#0a0c1c80] md:px-0 justify-center items-center`}
    >
      <div className="pt-9 pb-14 w-full max-w-[540px] bg-[#FFFFFF] rounded-3xl">
        <div className="px-6 md:px-10 flex justify-between items-center">
          <h3 className="text-[20px] text-[#161932] font-bold leading-[24.8px]">
            Settings
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            onClick={() => {
              dispatch(setOpenSetting(false));
            }}
          >
            <path
              fill="#1E213F"
              className="hover:opacity-100"
              fillRule="evenodd"
              d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z"
              opacity=".5"
            />
          </svg>
        </div>
        <div className="w-full h-[1px] bg-[#E3E1E1] mt-6 md:mt-8"></div>
        <div className="px-6 md:px-10">
          <h3 className="mt-6 text-xs md:text-sm text-dark-blu font-bold tracking-[5px] text-center">
            TIME (MINUTES)
          </h3>
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 mt-4 md:mt-6">
            <div className="flex md:flex-col items-center md:items-start justify-between gap-20 md:gap-2">
              <h3 className="text-xs md:text-sm text-semi-blu font-bold opacity-40">
                pomodoro
              </h3>
              <div className="w-[140px] h-12 flex justify-between items-center px-4 rounded-[10px] bg-[#EFF1FA]">
                <h3 className="text-sm text-semi-blu font-bold">
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
              <h3 className="text-xs md:text-sm text-semi-blu font-bold opacity-40">
                short break
              </h3>
              <div className="w-[140px] h-12 flex justify-between items-center px-4 rounded-[10px] bg-[#EFF1FA]">
                <h3 className="text-sm text-semi-blu font-bold">
                  {shortBreak}
                </h3>
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
          <div className="w-full h-[1px] bg-[#E3E1E1] mt-6"></div>
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <h3 className="mt-6 text-[11px] md:text-sm text-[#161932] font-bold tracking-[5px] text-center">
              FONT
            </h3>
            <div className="flex items-center gap-4 mt-4">
              <button className="w-10 h-10 rounded-full text-base font-base flex items-center justify-center bg-[#EFF1FA] kumbh">
                Aa
              </button>
              <button className="w-10 h-10 rounded-full text-base font-base flex items-center justify-center bg-[#EFF1FA] kumbh">
                Aa
              </button>
              <button className="w-10 h-10 rounded-full text-base font-base flex items-center justify-center bg-[#EFF1FA] kumbh">
                Aa
              </button>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#E3E1E1] mt-6"></div>
          <div className="flex flex-col md:flex-row md:justify-between items-center md:mt-6">
            <h3 className="mt-6 md:mt-0 text-[11px] md:text-sm text-dark-blu font-bold tracking-[5px] text-center">
              COLOR
            </h3>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <button className="border-none w-10 h-10 rounded-full  bg-[#F87070] flex items-center justify-center"></button>

              <button className="border-none w-10 h-10 rounded-full  bg-[#70F3F8] flex items-center justify-center"></button>

              <button className="border-none w-10 h-10 rounded-full  bg-[#D881F8] flex items-center justify-center"></button>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`-mt-[26px] border-none px-12 py-4 text-xs md:text-base text-[#FFFFFF] font-bold bg-[#F87070] rounded-[26.5px]`}
      >
        Return
      </button>
    </div>
  );
}
