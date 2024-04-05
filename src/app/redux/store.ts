import { configureStore } from "@reduxjs/toolkit";
import OpenSettingSlice, { SettingProps } from "./features/OpenSettingSlice";
import PanelOptionSlice, { PanelProps } from "./features/PanelOptionSlice";
import PomodoroSlice, { PomodoroProps } from "./features/PomodoroSlice";
import ShortBreakSlice, { ShortBreakProps } from "./features/ShortBreakSlice";
import LongBreakSlice, { LongBreakProps } from "./features/LongBreakSlice";
import ColorSettingSlice, {
  ColorContProps,
} from "./features/ColorSettingSlice";
import FontSettingSlice, { FontProps } from "./features/FontSettingSlice";
import CircleDashMobSlice, {
  CircleMobProps,
} from "./features/CircleDashMobSlice";
import CIrcleDashTabSlice, {
  CircleTabProps,
} from "./features/CIrcleDashTabSlice";

const store = configureStore({
  reducer: {
    openSetting: OpenSettingSlice,
    panelOption: PanelOptionSlice,
    pomodoroTimer: PomodoroSlice,
    shortBreak: ShortBreakSlice,
    longBreak: LongBreakSlice,
    contentColor: ColorSettingSlice,
    fontContent: FontSettingSlice,
    circleDashMoboffset: CircleDashMobSlice,
    circleDashTaboffset: CIrcleDashTabSlice,
  },
});

export type RootState = {
  openSetting: SettingProps;
  panelOption: PanelProps;
  pomodoroTimer: PomodoroProps;
  shortBreak: ShortBreakProps;
  longBreak: LongBreakProps;
  contentColor: ColorContProps;
  fontContent: FontProps;
  circleDashMoboffset: CircleMobProps;
  circleDashTaboffset: CircleTabProps;
};

export default store;
