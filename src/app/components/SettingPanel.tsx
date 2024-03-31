import upArrow from "../../../public/assets/icon-arrow-up.svg";
import downArrow from "../../../public/assets/icon-arrow-down.svg";
import Image from "next/image";

export default function SettingPanel() {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex flex-col bg-[#0a0c1c80] justify-center items-center">
      <div className="pt-9 pb-14 w-full max-w-[540px] bg-[#FFFFFF] rounded-3xl">
        <div className="px-6 md:px-10 flex justify-between items-center">
          <h3 className="text-[20px] text-[#161932] font-bold leading-[24.8px]">
            Settings
          </h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <path
              fill="#1E213F"
              className="hover:opacity-100"
              fill-rule="evenodd"
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
                <h3 className="text-sm text-semi-blu font-bold">25</h3>
                <div className="flex flex-col gap-2 cursor-pointer">
                  <Image src={upArrow} alt="up arrow" />
                  <Image src={downArrow} alt="down arrow" />
                </div>
              </div>
            </div>

            <div className="flex md:flex-col items-center md:items-start justify-between gap-20 md:gap-2">
              <h3 className="text-xs md:text-sm text-semi-blu font-bold opacity-40">
                short break
              </h3>
              <div className="w-[140px] h-12 flex justify-between items-center px-4 rounded-[10px] bg-[#EFF1FA]">
                <h3 className="text-sm text-semi-blu font-bold">25</h3>
                <div className="flex flex-col gap-2 cursor-pointer">
                  <Image src={upArrow} alt="up arrow" />
                  <Image src={downArrow} alt="down arrow" />
                </div>
              </div>
            </div>

            <div className="flex md:flex-col items-center md:items-start justify-between gap-20 md:gap-2">
              <h3 className="text-xs md:text-sm text-semi-blu font-bold opacity-40">
                long break
              </h3>
              <div className="w-[140px] h-12 flex justify-between items-center px-4 rounded-[10px] bg-[#EFF1FA]">
                <h3 className="text-sm text-semi-blu font-bold">25</h3>
                <div className="flex flex-col gap-2 cursor-pointer">
                  <Image src={upArrow} alt="up arrow" />
                  <Image src={downArrow} alt="down arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}