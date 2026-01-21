import { type Request, type Response } from 'express';
import { studentService } from '../services/student.service.js';
import type { AuthRequest } from '../middlewares/auth.middleware.js';

export class StudentController {
    async getMySubjects(req: Request, res: Response) {
        try {
            const userId = (req as AuthRequest).user?.userId;

            if (!userId) {
                return res.status(401).json({ error: 'Unauthorized' });
            }

            const subjects = await studentService.getEnrolledSubjects(userId);
            res.json(subjects);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export const studentController = new StudentController();
