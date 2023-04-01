import { configureStore } from '@reduxjs/toolkit';
import bgColorSlice from './bgChange';
import darmodeSlice from './darkModed';
import openerSlice from './menuOpened';


export const store = configureStore({
    reducer: { 
        openerState: openerSlice,
        darkMode: darmodeSlice,
        bgColor: bgColorSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch