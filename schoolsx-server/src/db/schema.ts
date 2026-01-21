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

// Relations
export type Subject = typeof subjects.$inferSelect;
export type NewSubject = typeof subjects.$inferInsert;
export type StudentSubject = typeof studentSubjects.$inferSelect;
