import { configureStore } from '@reduxjs/toolkit';
import openerSlice from './menuOpened';


export const store = configureStore({
    reducer: { 
        openerState: openerSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch