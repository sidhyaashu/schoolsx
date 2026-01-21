import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserRole = 'student' | 'teacher' | 'parent' | 'admin' | 'staff';
export type UserStatus = 'Active' | 'Inactive' | 'On Leave';

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    class?: string; // For students/teachers
    status: UserStatus;
    avatar?: string;
    joinedDate: string;
    phoneNumber?: string;
}

interface UsersState {
    users: UserProfile[];
    loading: boolean;
    error: string | null;
}

// Initial Mock Data to populate the "Database"
const initialUsers: UserProfile[] = [
    { id: "ST-2024-001", name: "Aditi Sharma", email: "aditi@schoolx.edu", role: "student", class: "6A", status: "Active", joinedDate: "2024-01-15", avatar: "/avatars/user-0.png" },
    { id: "TC-2019-042", name: "Rajesh Kumar", email: "rajesh@schoolx.edu", role: "teacher", class: "7B, 8A", status: "Active", joinedDate: "2019-03-22", avatar: "/avatars/user-1.png" },
    { id: "ST-2024-089", name: "Priya Singh", email: "priya@schoolx.edu", role: "student", class: "6A", status: "Inactive", joinedDate: "2024-02-10", avatar: "/avatars/user-2.png" },
    { id: "PT-2024-112", name: "Michael Ross", email: "michael@schoolx.edu", role: "parent", status: "Active", joinedDate: "2024-01-20", avatar: "/avatars/user-3.png" },
    { id: "TC-2021-005", name: "Sarah Jenkins", email: "sarah@schoolx.edu", role: "teacher", class: "9C", status: "On Leave", joinedDate: "2021-08-05", avatar: "/avatars/user-4.png" },
    { id: "AD-001", name: "System Admin", email: "admin@schoolx.edu", role: "admin", status: "Active", joinedDate: "2023-01-01" },
];

const initialState: UsersState = {
    users: initialUsers,
    loading: false,
    error: null,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<UserProfile>) => {
            state.users.unshift(action.payload);
        },
        updateUser: (state, action: PayloadAction<UserProfile>) => {
            const index = state.users.findIndex(u => u.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter(u => u.id !== action.payload);
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    },
});

export const { addUser, updateUser, deleteUser, setLoading } = usersSlice.actions;
export default usersSlice.reducer;
