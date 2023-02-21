import { configureStore } from '@reduxjs/toolkit';
import checkMateSlice from './menuOpened';


export const store = configureStore({
    reducer: { 
        checkMate: checkMateSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch