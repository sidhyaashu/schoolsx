export type Role = "student" | "teacher" | "parent" | "admin";

export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
    schoolId: string;
    avatar?: string;
    class?: string;
}

export interface Inquiry {
    id: number;
    name: string;
    grade: string;
    parent: string;
    phone: string;
    status: "New" | "Contacted" | "In-Progress";
    date: string;
}

export interface Application {
    id: number;
    name: string;
    grade: string;
    status: "Under Review" | "Interview Scheduled" | "Accepted" | "Rejected";
    documents: "Verified" | "Pending";
    score: string;
}

export interface SubjectPerformance {
    subject: string;
    score: number;
    grade: string;
}

export interface StudentPerformance {
    gpa: string;
    attendance: string;
    assignments: string;
    participation: string;
    subjectWise: SubjectPerformance[];
}

export interface Question {
    id: number;
    text: string;
    type: "MCQ" | "Long Answer" | "Short Answer" | "Numerical";
    difficulty: "Easy" | "Medium" | "Hard";
    class: string;
    marks: number;
}

export interface Invoice {
    id: string;
    student: string;
    class: string;
    amount: string;
    date: string;
    status: "Paid" | "Overdue" | "Pending";
}

export interface LiveSession {
    id: number;
    class: string;
    subject: string;
    topic: string;
    teacher: string;
    students: string;
    duration: string;
    status: "Healthy" | "Lag Detected";
    engagement: "High" | "Medium" | "Low";
}

export interface AIInsight {
    learningStyle: {
        dominant: string;
        description: string;
        tags: string[];
    };
    achievements: string[];
    recommendations: {
        area: string;
        description: string;
        actionLabel?: string;
        type: "issue" | "opportunity";
    }[];
    predictiveScore: number;
}
