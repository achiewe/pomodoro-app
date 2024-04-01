export default function SettingsFont() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center">
      <h3 className="mt-6 text-[11px] md:text-sm text-[#161932] font-bold tracking-[5px] text-center">
        FONT
      </h3>
      <div className="flex items-center gap-4 mt-4">
        <button className="w-10 h-10 rounded-full text-base font-Kumbh flex items-center justify-center bg-[#EFF1FA]">
          Aa
        </button>
        <button className="w-10 h-10 rounded-full text-base font-Roboto flex items-center justify-center bg-[#EFF1FA]">
          Aa
        </button>
        <button className="w-10 h-10 rounded-full text-base font-SpaceMono flex items-center justify-center bg-[#EFF1FA]">
          Aa
        </button>
      </div>
    </div>
  );
}
