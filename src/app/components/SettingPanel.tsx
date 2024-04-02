"use client";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSetting } from "../redux/features/OpenSettingSlice";
import { RootState } from "../redux/store";
import SettingsTime from "./SettingsTime";
import SettingsFont from "./SettingsFont";
import SettingsColor from "./SettingsColor";

export default function SettingPanel() {
  const dispatch = useDispatch();
  const openSetting = useSelector(
    (store: RootState) => store.openSetting.openSetting
  );

  const fontContent = useSelector(
    (store: RootState) => store.fontContent.fontContent
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
              className="hover:opacity-100 cursor-pointer"
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
          <SettingsTime />
          <div className="w-full h-[1px] bg-[#E3E1E1] mt-6"></div>
          <SettingsFont />
          <div className="w-full h-[1px] bg-[#E3E1E1] mt-6"></div>
          <SettingsColor />
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
