import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface bgColorInterface {
    bgColorValue: number
}

const initialState: bgColorInterface = {
    bgColorValue: 3
};

export const bgColorSlice = createSlice({
  name: 'bgColor',
  initialState,
  reducers: {
    bgColorChanger: (state, modeAction: PayloadAction<number>) => {
      state.bgColorValue = modeAction.payload;
    }
  },
});

export const { bgColorChanger } = bgColorSlice.actions
export default bgColorSlice.reducer