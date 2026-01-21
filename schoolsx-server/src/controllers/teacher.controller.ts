import { type Request, type Response } from 'express';
import { teacherService } from '../services/teacher.service.js';
import type { AuthRequest } from '../middlewares/auth.middleware.js';

export class TeacherController {
    async getMyClasses(req: Request, res: Response) {
        try {
            const userId = (req as AuthRequest).user?.userId;
            if (!userId) return res.status(401).json({ error: 'Unauthorized' });

            const classes = await teacherService.getClasses(userId);
            res.json(classes);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export const teacherController = new TeacherController();
