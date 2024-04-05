import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SettingPanel from "./components/SettingPanel";
import Settings from "./components/Settings";
import TimerContent from "./components/TimerContent";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-start items-center pt-[30px] bg-[#1E213F] relative md:pt-[50px]">
      <Header />
      <NavBar />
      <TimerContent />
      <Settings />
      <SettingPanel />
    </div>
  );
}
