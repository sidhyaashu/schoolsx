import { type Request, type Response } from 'express';
import { aiService } from '../services/ai.service.js';

export class AIController {
    async chat(req: Request, res: Response) {
        try {
            const { message, context } = req.body;
            if (!message) return res.status(400).json({ error: 'Message is required' });

            const result = await aiService.chat(message, context);
            res.json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export const aiController = new AIController();
