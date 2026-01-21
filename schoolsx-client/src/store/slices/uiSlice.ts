import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
    isSidebarOpen: boolean;
    activePortal: 'student' | 'teacher' | 'parent' | 'admin' | null;
    pageTitle: string;
}

const initialState: UiState = {
    isSidebarOpen: true,
    activePortal: null,
    pageTitle: 'Dashboard',
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        setSidebarOpen: (state, action: PayloadAction<boolean>) => {
            state.isSidebarOpen = action.payload;
        },
        setActivePortal: (state, action: PayloadAction<UiState['activePortal']>) => {
            state.activePortal = action.payload;
        },
        setPageTitle: (state, action: PayloadAction<string>) => {
            state.pageTitle = action.payload;
        }
    },
});

export const { toggleSidebar, setSidebarOpen, setActivePortal, setPageTitle } = uiSlice.actions;
export default uiSlice.reducer;
