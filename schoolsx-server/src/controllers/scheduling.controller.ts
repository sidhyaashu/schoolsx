import { type Request, type Response } from 'express';
import { schedulingService } from '../services/scheduling.service.js';
import type { AuthRequest } from '../middlewares/auth.middleware.js';

export class SchedulingController {
    async checkConflicts(req: Request, res: Response) {
        try {
            const result = await schedulingService.checkConflicts(req.body);
            res.json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async createPeriod(req: Request, res: Response) {
        try {
            const period = await schedulingService.createPeriod(req.body);
            res.status(201).json(period);
        } catch (error: any) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
}

export const schedulingController = new SchedulingController();
