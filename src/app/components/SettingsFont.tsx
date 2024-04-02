"use client";
import { useDispatch, useSelector } from "react-redux";
import { setFontContent } from "../redux/features/FontSettingSlice";
import { RootState } from "../redux/store";

export default function SettingsFont() {
  const dispatch = useDispatch();
  const fontContent = useSelector(
    (store: RootState) => store.fontContent.fontContent
  );
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center">
      <h3
        className={`mt-6 text-[11px] md:text-sm text-[#161932] font-bold tracking-[5px] text-center ${
          fontContent === "kumbh"
            ? "font-Kumbh"
            : fontContent === "Roboto"
            ? "font-Roboto"
            : fontContent === "SpaceMono"
            ? "font-SpaceMono"
            : ""
        }`}
      >
        FONT
      </h3>
      <div className="flex items-center gap-4 mt-4">
        <button
          className={`w-10 h-10 rounded-full text-base font-Kumbh flex items-center justify-center ${
            fontContent === "kumbh"
              ? "bg-[#161932] text-[#FFFFFF]"
              : "bg-[#EFF1FA] text-[#1E213F]"
          }`}
          onClick={() => {
            dispatch(setFontContent("kumbh"));
          }}
        >
          Aa
        </button>
        <button
          className={`w-10 h-10 rounded-full text-base font-Roboto flex items-center justify-center  ${
            fontContent === "Roboto"
              ? "bg-[#161932] text-[#FFFFFF]"
              : "bg-[#EFF1FA] text-[#1E213F]"
          }`}
          onClick={() => {
            dispatch(setFontContent("Roboto"));
          }}
        >
          Aa
        </button>
        <button
          className={`w-10 h-10 rounded-full text-base font-SpaceMono flex items-center justify-center ${
            fontContent === "SpaceMono"
              ? "bg-[#161932] text-[#FFFFFF]"
              : "bg-[#EFF1FA] text-[#1E213F]"
          }`}
          onClick={() => {
            dispatch(setFontContent("SpaceMono"));
          }}
        >
          Aa
        </button>
      </div>
    </div>
  );
}
