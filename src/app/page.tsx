import Header from "./components/Header";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-[#1E213F] px-[20px]">
      <Header />
      <NavBar />
      <svg
        width="267.805px"
        height="267.805px"
        className="-rotate-90 md:hidden"
      >
        <circle
          id="circle1"
          cx="133.9025px"
          cy="133.9025px"
          r="120px"
          fill="transparent"
          stroke="red"
          strokeWidth="10px"
          strokeDasharray="753px"
          // strokeDashoffset={calculateDashoffset}
        ></circle>
        <circle
          id="circle2"
          cx="133.9025px"
          cy="133.9025px"
          r="120px"
          fill="transparent"
        ></circle>
      </svg>
      <svg width="410px" height="410px" className="-rotate-90 hidden md:block">
        <circle
          id="circle1"
          cx="205px"
          cy="205px"
          r="185px"
          fill="transparent"
          stroke="red"
          strokeWidth="20px"
          strokeDasharray="1161px"
          // strokeDashoffset={calculateDashoffsetTablet}
        ></circle>
        <circle
          id="circle2"
          cx="205px"
          cy="205px"
          r="185px"
          fill="transparent"
        ></circle>
      </svg>
    </div>
  );
}
