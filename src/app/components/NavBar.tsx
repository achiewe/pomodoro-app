"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { setPanelOption } from "../redux/features/PanelOptionSlice";

export default function NavBar() {
  const dispatch = useDispatch();

  return (
    <div className="w-[327px] flex flex-row items-center gap-[10px] rounded-[25px] bg-[#161932] p-[5px]">
      <div
        onClick={() => {
          dispatch(setPanelOption("pomodoro"));
        }}
        className="bg-[#161932] w-[106px] flex justify-center items-center h-[48px] rounded-[25px]"
      >
        <h3 className="text-[12px] leading-[17.77px] font-bold text-[#D7E0FF]">
          pomodoro
        </h3>
      </div>
      <div
        className="bg-[#161932] w-[106px] flex justify-center items-center h-[48px] rounded-[25px]"
        onClick={() => {
          dispatch(setPanelOption("short break"));
        }}
      >
        <h3 className="text-[12px] leading-[17.77px] font-bold text-[#D7E0FF]">
          short break
        </h3>
      </div>
      <div
        className="bg-[#161932] w-[106px] flex justify-center items-center h-[48px] rounded-[25px]"
        onClick={() => {
          dispatch(setPanelOption("long break"));
        }}
      >
        <h3 className="text-[12px] leading-[17.77px] font-bold text-[#D7E0FF]">
          long break
        </h3>
      </div>
    </div>
  );
}
