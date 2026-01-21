import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import uiReducer from './slices/uiSlice';
import usersReducer from './slices/usersSlice';
import academicsReducer from './slices/academicsSlice';
import learningReducer from './slices/learningSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        ui: uiReducer,
        users: usersReducer,
        academics: academicsReducer,
        learning: learningReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
