import { pgTable, serial, text, timestamp, boolean, pgEnum } from 'drizzle-orm/pg-core';

export const userRoleEnum = pgEnum('user_role', ['admin', 'teacher', 'student', 'parent']);
export const userStatusEnum = pgEnum('user_status', ['active', 'inactive', 'suspended']);

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    email: text('email').notNull().unique(),
    passwordHash: text('password_hash').notNull(),
    name: text('name').notNull(),
    role: userRoleEnum('role').default('student').notNull(),
    status: userStatusEnum('status').default('active').notNull(),
    avatarUrl: text('avatar_url'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export const subjects = pgTable('subjects', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    code: text('code').notNull().unique(),
    description: text('description'),
    teacherId: serial('teacher_id').references(() => users.id),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
});

export const studentSubjects = pgTable('student_subjects', {
    id: serial('id').primaryKey(),
    studentId: serial('student_id').references(() => users.id),
    subjectId: serial('subject_id').references(() => subjects.id),
    progress: serial('progress').default(0),
    enrolledAt: timestamp('enrolled_at').defaultNow(),
});

export type Subject = typeof subjects.$inferSelect;
export type NewSubject = typeof subjects.$inferInsert;
export type StudentSubject = typeof studentSubjects.$inferSelect;

export const assignments = pgTable('assignments', {
    id: serial('id').primaryKey(),
    subjectId: serial('subject_id').references(() => subjects.id),
    title: text('title').notNull(),
    description: text('description'),
    dueDate: timestamp('due_date').notNull(),
    teacherId: serial('teacher_id').references(() => users.id),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
});

export const submissions = pgTable('submissions', {
    id: serial('id').primaryKey(),
    assignmentId: serial('assignment_id').references(() => assignments.id),
    studentId: serial('student_id').references(() => users.id),
    fileUrl: text('file_url').notNull(),
    status: text('status').default('submitted'), // submitted, graded
    grade: text('grade'),
    feedback: text('feedback'),
    submittedAt: timestamp('submitted_at').defaultNow(),
});

export type Assignment = typeof assignments.$inferSelect;
export type Submission = typeof submissions.$inferSelect;

// Academic Structure
export const academicYears = pgTable('academic_years', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(), // e.g., "2024-2025"
    startDate: timestamp('start_date').notNull(),
    endDate: timestamp('end_date').notNull(),
    isCurrent: boolean('is_current').default(false),
    createdAt: timestamp('created_at').defaultNow(),
});

export const termEnum = pgEnum('term', ['term1', 'term2', 'term3']);

export const terms = pgTable('terms', {
    id: serial('id').primaryKey(),
    academicYearId: serial('academic_year_id').references(() => academicYears.id),
    name: text('name').notNull(), // e.g., "Term 1", "Semester 1"
    term: termEnum('term').notNull(),
    startDate: timestamp('start_date').notNull(),
    endDate: timestamp('end_date').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
});

export type AcademicYear = typeof academicYears.$inferSelect;
export type Term = typeof terms.$inferSelect;

// Organizational Hierarchy
export const schools = pgTable('schools', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    address: text('address'),
    phone: text('phone'),
    email: text('email'),
    createdAt: timestamp('created_at').defaultNow(),
});

export const grades = pgTable('grades', {
    id: serial('id').primaryKey(),
    schoolId: serial('school_id').references(() => schools.id),
    name: text('name').notNull(), // e.g., "Grade 7", "Grade 8"
    level: serial('level').notNull(), // numeric level for ordering
    createdAt: timestamp('created_at').defaultNow(),
});

export const sections = pgTable('sections', {
    id: serial('id').primaryKey(),
    gradeId: serial('grade_id').references(() => grades.id),
    name: text('name').notNull(), // e.g., "A", "B", "C"
    capacity: serial('capacity').default(30),
    createdAt: timestamp('created_at').defaultNow(),
});

// Classroom represents a specific Subject taught to a Section by a Teacher with Schedule
export const classrooms = pgTable('classrooms', {
    id: serial('id').primaryKey(),
    sectionId: serial('section_id').references(() => sections.id),
    subjectId: serial('subject_id').references(() => subjects.id),
    teacherId: serial('teacher_id').references(() => users.id),
    academicYearId: serial('academic_year_id').references(() => academicYears.id),
    roomNumber: text('room_number'),
    createdAt: timestamp('created_at').defaultNow(),
});

// Attendance tracking
export const attendanceStatusEnum = pgEnum('attendance_status', ['present', 'absent', 'late', 'excused']);

export const attendance = pgTable('attendance', {
    id: serial('id').primaryKey(),
    studentId: serial('student_id').references(() => users.id),
    classroomId: serial('classroom_id').references(() => classrooms.id),
    date: timestamp('date').notNull(),
    status: attendanceStatusEnum('status').notNull(),
    markedBy: serial('marked_by').references(() => users.id),
    remarks: text('remarks'),
    markedAt: timestamp('marked_at').defaultNow(),
});

export type School = typeof schools.$inferSelect;
export type Grade = typeof grades.$inferSelect;
export type Section = typeof sections.$inferSelect;
export type Classroom = typeof classrooms.$inferSelect;
export type Attendance = typeof attendance.$inferSelect;

// Scheduling System
export const dayEnum = pgEnum('day_of_week', ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']);

export const timetables = pgTable('timetables', {
    id: serial('id').primaryKey(),
    sectionId: serial('section_id').references(() => sections.id),
    academicYear: text('academic_year').notNull(),
    effectiveFrom: timestamp('effective_from').notNull(),
    effectiveTo: timestamp('effective_to'),
    createdAt: timestamp('created_at').defaultNow(),
});

export const periods = pgTable('periods', {
    id: serial('id').primaryKey(),
    timetableId: serial('timetable_id').references(() => timetables.id),
    classroomId: serial('classroom_id').references(() => classrooms.id),
    dayOfWeek: dayEnum('day_of_week').notNull(),
    startTime: text('start_time').notNull(), // HH:MM format
    endTime: text('end_time').notNull(), // HH:MM format
    createdAt: timestamp('created_at').defaultNow(),
});

export type Timetable = typeof timetables.$inferSelect;
export type Period = typeof periods.$inferSelect;

// Grading System
export const examTypeEnum = pgEnum('exam_type', ['quiz', 'midterm', 'final', 'assignment', 'project']);

export const exams = pgTable('exams', {
    id: serial('id').primaryKey(),
    classroomId: serial('classroom_id').references(() => classrooms.id),
    name: text('name').notNull(),
    examType: examTypeEnum('exam_type').notNull(),
    totalMarks: serial('total_marks').notNull(),
    weightage: serial('weightage').notNull(), // percentage contribution to final grade
    examDate: timestamp('exam_date').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
});

export const marks = pgTable('marks', {
    id: serial('id').primaryKey(),
    examId: serial('exam_id').references(() => exams.id),
    studentId: serial('student_id').references(() => users.id),
    marksObtained: serial('marks_obtained').notNull(),
    remarks: text('remarks'),
    gradedBy: serial('graded_by').references(() => users.id),
    gradedAt: timestamp('graded_at').defaultNow(),
});

export const reportCards = pgTable('report_cards', {
    id: serial('id').primaryKey(),
    studentId: serial('student_id').references(() => users.id),
    classroomId: serial('classroom_id').references(() => classrooms.id),
    termId: serial('term_id').references(() => terms.id),
    finalGrade: text('final_grade'), // A, B, C, etc.
    percentage: serial('percentage'),
    generatedAt: timestamp('generated_at').defaultNow(),
});

export type Exam = typeof exams.$inferSelect;
export type Mark = typeof marks.$inferSelect;
export type ReportCard = typeof reportCards.$inferSelect;

// Real-Time Features
export const notificationTypeEnum = pgEnum('notification_type', ['grade_update', 'announcement', 'assignment_posted', 'class_reminder']);

export const notifications = pgTable('notifications', {
    id: serial('id').primaryKey(),
    userId: serial('user_id').references(() => users.id),
    type: notificationTypeEnum('type').notNull(),
    title: text('title').notNull(),
    message: text('message').notNull(),
    read: boolean('read').default(false),
    metadata: text('metadata'), // JSON string for additional data
    createdAt: timestamp('created_at').defaultNow(),
});

export const chatMessages = pgTable('chat_messages', {
    id: serial('id').primaryKey(),
    senderId: serial('sender_id').references(() => users.id),
    receiverId: serial('receiver_id').references(() => users.id),
    message: text('message').notNull(),
    read: boolean('read').default(false),
    sentAt: timestamp('sent_at').defaultNow(),
});

export type Notification = typeof notifications.$inferSelect;
export type ChatMessage = typeof chatMessages.$inferSelect;
