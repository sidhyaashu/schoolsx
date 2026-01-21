import { type Request, type Response } from 'express';
import { assignmentService } from '../services/assignment.service.js';
import type { AuthRequest } from '../middlewares/auth.middleware.js';

export class AssignmentController {
    async getMyAssignments(req: Request, res: Response) {
        try {
            const userId = (req as AuthRequest).user?.userId;
            if (!userId) return res.status(401).json({ error: 'Unauthorized' });

            const data = await assignmentService.getStudentAssignments(userId);
            res.json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async submit(req: Request, res: Response) {
        try {
            const userId = (req as AuthRequest).user?.userId;
            if (!userId) return res.status(401).json({ error: 'Unauthorized' });

            const { assignmentId, fileUrl } = req.body;

            const result = await assignmentService.submitAssignment({
                assignmentId,
                studentId: userId,
                fileUrl
            });

            res.status(201).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export const assignmentController = new AssignmentController();
