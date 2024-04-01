import React from "react";

export default function SettingsColor() {
  return (
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
  );
}
