import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PanelProps {
  panelOption: string;
}

const initialState: PanelProps = {
  panelOption: "pomodoro",
};

const PanelOptionSlice = createSlice({
  name: "panelOption",
  initialState,
  reducers: {
    setPanelOption: (state, action: PayloadAction<string>) => {
      state.panelOption = action.payload;
    },
  },
});

export const { setPanelOption } = PanelOptionSlice.actions;
export default PanelOptionSlice.reducer;
