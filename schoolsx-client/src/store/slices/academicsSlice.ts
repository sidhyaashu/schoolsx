import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ClassSection {
    id: string;
    name: string; // e.g. "6A"
    grade: string; // e.g. "6"
    classTeacherId: string;
    studentCount: number;
}

export interface Subject {
    id: string;
    name: string;
    code: string;
    teacherId?: string;
}

interface AcademicsState {
    classes: ClassSection[];
    subjects: Subject[];
}

const initialState: AcademicsState = {
    classes: [
        { id: "C-6A", name: "6A", grade: "6", classTeacherId: "TC-2019-042", studentCount: 32 },
        { id: "C-7B", name: "7B", grade: "7", classTeacherId: "TC-2019-042", studentCount: 28 },
        { id: "C-9C", name: "9C", grade: "9", classTeacherId: "TC-2021-005", studentCount: 30 },
    ],
    subjects: [
        { id: "SUB-math", name: "Mathematics", code: "MTH101" },
        { id: "SUB-sci", name: "Science", code: "SCI101" },
        { id: "SUB-eng", name: "English", code: "ENG101" },
        { id: "SUB-his", name: "History", code: "HIS101" },
    ]
};

const academicsSlice = createSlice({
    name: 'academics',
    initialState,
    reducers: {
        addClass: (state, action: PayloadAction<ClassSection>) => {
            state.classes.push(action.payload);
        },
        addSubject: (state, action: PayloadAction<Subject>) => {
            state.subjects.push(action.payload);
        }
    },
});

export const { addClass, addSubject } = academicsSlice.actions;
export default academicsSlice.reducer;
