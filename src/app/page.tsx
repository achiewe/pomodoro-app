import Header from "./components/Header";
import NavBar from "./components/NavBar";
import TimerDisplay from "./components/TimerDisplay";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-start items-center bg-[#1E213F] p-[30px]">
      <Header />
      <NavBar />
      <TimerDisplay />
    </div>
  );
}
