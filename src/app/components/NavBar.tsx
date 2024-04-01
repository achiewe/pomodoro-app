"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPanelOption } from "../redux/features/PanelOptionSlice";
import { RootState } from "../redux/store";

export default function NavBar() {
  const dispatch = useDispatch();
  const panelOption = useSelector(
    (store: RootState) => store.panelOption.panelOption
  );

  return (
    <div className="w-[327px] flex flex-row items-center gap-[10px] rounded-[25px] bg-[#161932] p-[5px]">
      <div
        onClick={() => {
          dispatch(setPanelOption("pomodoro"));
        }}
        className={`${
          panelOption === "pomodoro" ? "bg-[red]" : "bg-[#161932]"
        } w-[106px] flex justify-center items-center h-[48px] rounded-[25px]`}
      >
        <h3 className="text-[12px] leading-[17.77px] font-bold text-[#D7E0FF]">
          pomodoro
        </h3>
      </div>
      <div
        className={`${
          panelOption === "short break" ? "bg-[red]" : "bg-[#161932]"
        } w-[106px] flex justify-center items-center h-[48px] rounded-[25px]`}
        onClick={() => {
          dispatch(setPanelOption("short break"));
        }}
      >
        <h3 className="text-[12px] leading-[17.77px] font-bold text-[#D7E0FF]">
          short break
        </h3>
      </div>
      <div
        className={`${
          panelOption === "long break" ? "bg-[red]" : "bg-[#161932]"
        } w-[106px] flex justify-center items-center h-[48px] rounded-[25px]`}
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
