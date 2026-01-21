import { type Request, type Response } from 'express';
import { livekitService } from '../services/livekit.service.js';
import type { AuthRequest } from '../middlewares/auth.middleware.js';
import { config } from '../config/env.js';

export class LiveKitController {
    /**
     * Generate access token for joining a room
     */
    async generateToken(req: Request, res: Response) {
        try {
            const userId = (req as AuthRequest).user?.userId;
            const userRole = (req as AuthRequest).user?.role;

            if (!userId) {
                return res.status(401).json({ error: 'Unauthorized' });
            }

            const { roomName } = req.body;
            if (!roomName) {
                return res.status(400).json({ error: 'Room name is required' });
            }

            const identity = `user-${userId}`;
            let token: string;

            if (userRole === 'teacher' || userRole === 'admin') {
                token = await livekitService.generateTeacherToken(roomName, identity);
            } else {
                token = await livekitService.generateStudentToken(roomName, identity);
            }

            res.json({
                token,
                wsUrl: config.livekit.wsUrl,
                roomName
            });
        } catch (error) {
            console.error('Error generating LiveKit token:', error);
            res.status(500).json({ error: 'Failed to generate access token' });
        }
    }
}

export const livekitController = new LiveKitController();
