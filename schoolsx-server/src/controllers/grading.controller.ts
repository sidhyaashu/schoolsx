import { type Request, type Response } from 'express';
import { gradingService } from '../services/grading.service.js';
import type { AuthRequest } from '../middlewares/auth.middleware.js';

export class GradingController {
    async generateReportCard(req: Request, res: Response) {
        try {
            const reportCard = await gradingService.generateReportCard(req.body);
            res.json(reportCard);
        } catch (error: any) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }

    async submitMarks(req: Request, res: Response) {
        try {
            const userId = (req as AuthRequest).user?.userId;
            if (!userId) return res.status(401).json({ error: 'Unauthorized' });

            const { examId, studentId, marksObtained } = req.body;
            const mark = await gradingService.submitMarks(examId, studentId, marksObtained, userId);
            res.status(201).json(mark);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export const gradingController = new GradingController();
