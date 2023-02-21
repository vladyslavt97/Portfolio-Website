import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface openerState {
    darkModeVal: boolean
}

const initialState: openerState = {
    darkModeVal: false
};

export const darmodeSlice = createSlice({
  name: 'modeStatus',
  initialState,
  reducers: {
    changeModeDark: (state, modeAction: PayloadAction<boolean>) => {
      console.log('modeAction: ', modeAction);
      
      state.darkModeVal = modeAction.payload;
    }
  },
});

export const { changeModeDark } = darmodeSlice.actions
export default darmodeSlice.reducer