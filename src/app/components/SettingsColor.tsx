"use client";

import { useDispatch, useSelector } from "react-redux";
import { setContentColor } from "../redux/features/ColorSettingSlice";
import { RootState } from "../redux/store";

export default function SettingsColor() {
  const dispatch = useDispatch();
  const contentColor = useSelector(
    (store: RootState) => store.contentColor.contentColor
  );
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center md:mt-6">
      <h3 className="mt-6 md:mt-0 text-[11px] md:text-sm text-dark-blu font-bold tracking-[5px] text-center">
        COLOR
      </h3>
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <button
          className="border-none w-10 h-10 rounded-full bg-[#F87070] flex items-center justify-center"
          onClick={() => {
            dispatch(setContentColor("red"));
          }}
        >
          <svg
            className={`${contentColor === "red" ? "block" : "hidden"}`}
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.5L4.95263 9.45263L13.4053 1"
              stroke="#161932"
              strokeWidth="2"
            />
          </svg>
        </button>

        <button
          className="border-none w-10 h-10 rounded-full  bg-[#70F3F8] flex items-center justify-center"
          onClick={() => {
            dispatch(setContentColor("green"));
          }}
        >
          <svg
            className={`${contentColor === "green" ? "block" : "hidden"}`}
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.5L4.95263 9.45263L13.4053 1"
              stroke="#161932"
              strokeWidth="2"
            />
          </svg>
        </button>

        <button
          className="border-none w-10 h-10 rounded-full  bg-[#D881F8] flex items-center justify-center"
          onClick={() => {
            dispatch(setContentColor("purple"));
          }}
        >
          <svg
            className={`${contentColor === "purple" ? "block" : "hidden"}`}
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.5L4.95263 9.45263L13.4053 1"
              stroke="#161932"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
