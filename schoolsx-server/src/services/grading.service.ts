import { db } from '../config/db.js';
import { exams, marks, reportCards, classrooms } from '../db/schema.js';
import { eq, and } from 'drizzle-orm';
import { notificationService } from './notification.service.js';

export class GradingService {
    /**
     * Generate report card for a student in a specific classroom for a term
     */
    async generateReportCard(data: {
        studentId: number;
        classroomId: number;
        termId: number;
    }) {
        // Get all exams for this classroom
        const classroomExams = await db.select().from(exams).where(eq(exams.classroomId, data.classroomId));

        if (!classroomExams.length) {
            throw new Error('No exams found for this classroom');
        }

        // Get all marks for this student for these exams
        const examIds = classroomExams.map(e => e.id);
        const studentMarks = await db
            .select()
            .from(marks)
            .where(eq(marks.studentId, data.studentId));

        // Calculate weighted score
        let totalWeightedScore = 0;
        let totalWeightage = 0;

        for (const exam of classroomExams) {
            const examMark = studentMarks.find(m => m.examId === exam.id);
            if (examMark) {
                const percentage = (examMark.marksObtained / exam.totalMarks) * 100;
                totalWeightedScore += (percentage * exam.weightage) / 100;
                totalWeightage += exam.weightage;
            }
        }

        const finalPercentage = totalWeightage > 0 ? totalWeightedScore : 0;
        const finalGrade = this.percentageToGrade(finalPercentage);

        // Create or update report card
        const [reportCard] = await db.insert(reportCards).values({
            studentId: data.studentId,
            classroomId: data.classroomId,
            termId: data.termId,
            finalGrade,
            percentage: Math.round(finalPercentage)
        }).returning();

        return reportCard;
    }

    /**
     * Convert percentage to letter grade
     */
    private percentageToGrade(percentage: number): string {
        if (percentage >= 90) return 'A+';
        if (percentage >= 80) return 'A';
        if (percentage >= 70) return 'B+';
        if (percentage >= 60) return 'B';
        if (percentage >= 50) return 'C+';
        if (percentage >= 40) return 'C';
        if (percentage >= 33) return 'D';
        return 'F';
    }

    async submitMarks(examId: number, studentId: number, marksObtained: number, gradedBy: number) {
        const [mark] = await db.insert(marks).values({
            examId,
            studentId,
            marksObtained,
            gradedBy
        }).returning();

        // Get exam details for notification
        const exam = await db.select().from(exams).where(eq(exams.id, examId));

        if (exam.length > 0 && exam[0] && mark) {
            // Send real-time notification to student
            await notificationService.create({
                userId: studentId,
                type: 'grade_update',
                title: 'New Grade Posted',
                message: `You received ${marksObtained}/${exam[0].totalMarks} marks on ${exam[0].name}`,
                metadata: { examId, markId: mark.id }
            });
        }

        return mark;
    }
}

export const gradingService = new GradingService();
