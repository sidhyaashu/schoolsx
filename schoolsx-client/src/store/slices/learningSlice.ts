import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Assignment {
    id: string;
    title: string;
    subjectId: string;
    classId: string;
    dueDate: string;
    status: 'Open' | 'Closed' | 'Graded';
    description?: string;
}

export interface Quiz {
    id: string;
    title: string;
    subjectId: string;
    questionCount: number;
    durationMinutes: number;
}

interface LearningState {
    assignments: Assignment[];
    quizzes: Quiz[];
}

const initialState: LearningState = {
    assignments: [
        { id: "ASS-001", title: "Algebra Basics", subjectId: "SUB-math", classId: "C-6A", dueDate: "2024-04-15", status: "Open" },
        { id: "ASS-002", title: "Photosynthesis Essay", subjectId: "SUB-sci", classId: "C-7B", dueDate: "2024-04-10", status: "Closed" },
    ],
    quizzes: [
        { id: "QZ-001", title: "History Final", subjectId: "SUB-his", questionCount: 20, durationMinutes: 45 }
    ]
};

const learningSlice = createSlice({
    name: 'learning',
    initialState,
    reducers: {
        addAssignment: (state, action: PayloadAction<Assignment>) => {
            state.assignments.unshift(action.payload);
        },
        addQuiz: (state, action: PayloadAction<Quiz>) => {
            state.quizzes.push(action.payload);
        }
    },
});

export const { addAssignment, addQuiz } = learningSlice.actions;
export default learningSlice.reducer;
