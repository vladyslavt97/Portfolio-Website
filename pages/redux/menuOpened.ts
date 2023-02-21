import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface openerState {
    openValue: boolean
}

const initialState: openerState = {
    openValue: false
};

export const openerSlice = createSlice({
  name: 'openStatus',
  initialState,
  reducers: {
    changeOpenerStatus: (state, openStatusAction: PayloadAction<boolean>) => {
      state.openValue = openStatusAction.payload;
    }
  },
});

export const { changeOpenerStatus } = openerSlice.actions
export default openerSlice.reducer