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
  const contentColor = useSelector(
    (store: RootState) => store.contentColor.contentColor
  );
  const fontContent = useSelector(
    (store: RootState) => store.fontContent.fontContent
  );

  return (
    <div className="w-[327px] flex flex-row items-center gap-[10px] rounded-[25px] bg-[#161932] p-[5px] md:w-[373px]">
      <div
        onClick={() => {
          dispatch(setPanelOption("pomodoro"));
        }}
        className={`${
          panelOption === "pomodoro" && contentColor === "red"
            ? "bg-[#F87070]"
            : panelOption === "pomodoro" && contentColor === "green"
            ? "bg-[#70F3F8]"
            : panelOption === "pomodoro" && contentColor === "purple"
            ? "bg-[#D881F8]"
            : "bg-[#161932]"
        } w-[106px] flex justify-center items-center h-[48px] rounded-[25px] cursor-pointer md:w-[120px]`}
      >
        <h3
          className={`text-[12px] leading-[17.77px] font-bold hover:opacity-100 md:text-[14px] ${
            fontContent === "kumbh"
              ? "font-Kumbh"
              : fontContent === "Roboto"
              ? "font-Roboto"
              : fontContent === "SpaceMono"
              ? "font-SpaceMono"
              : ""
          } ${
            panelOption === "pomodoro"
              ? "text-[#1E213F]"
              : "text-[#D7E0FF] opacity-50"
          }`}
        >
          pomodoro
        </h3>
      </div>
      <div
        className={`${
          panelOption === "short break" && contentColor === "red"
            ? "bg-[#F87070]"
            : panelOption === "short break" && contentColor === "green"
            ? "bg-[#70F3F8]"
            : panelOption === "short break" && contentColor === "purple"
            ? "bg-[#D881F8]"
            : "bg-[#161932]"
        }
        } w-[106px] flex justify-center items-center h-[48px] rounded-[25px] cursor-pointer  md:w-[120px]`}
        onClick={() => {
          dispatch(setPanelOption("short break"));
        }}
      >
        <h3
          className={`text-[12px] leading-[17.77px] font-bold hover:opacity-100 md:text-[14px] ${
            fontContent === "kumbh"
              ? "font-Kumbh"
              : fontContent === "Roboto"
              ? "font-Roboto"
              : fontContent === "SpaceMono"
              ? "font-SpaceMono"
              : ""
          } ${
            panelOption === "short break"
              ? "text-[#1E213F]"
              : "text-[#D7E0FF] opacity-50"
          }`}
        >
          short break
        </h3>
      </div>
      <div
        className={`${
          panelOption === "long break" && contentColor === "red"
            ? "bg-[#F87070]"
            : panelOption === "long break" && contentColor === "green"
            ? "bg-[#70F3F8]"
            : panelOption === "long break" && contentColor === "purple"
            ? "bg-[#D881F8]"
            : "bg-[#161932]"
        } w-[106px] flex justify-center items-center h-[48px] rounded-[25px] cursor-pointer md:w-[120px]`}
        onClick={() => {
          dispatch(setPanelOption("long break"));
        }}
      >
        <h3
          className={`text-[12px] leading-[17.77px] font-bold hover:opacity-100 md:text-[14px] ${
            fontContent === "kumbh"
              ? "font-Kumbh"
              : fontContent === "Roboto"
              ? "font-Roboto"
              : fontContent === "SpaceMono"
              ? "font-SpaceMono"
              : ""
          } ${
            panelOption === "long break"
              ? "text-[#1E213F]"
              : "text-[#D7E0FF] opacity-50"
          }`}
        >
          long break
        </h3>
      </div>
    </div>
  );
}
