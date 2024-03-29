import Header from "./components/Header";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-[#1E213F] px-[20px]">
      <Header />
      <NavBar />
    </div>
  );
}
