import { type Request, type Response } from 'express';
import { notificationService } from '../services/notification.service.js';
import type { AuthRequest } from '../middlewares/auth.middleware.js';

export class NotificationController {
    async getMyNotifications(req: Request, res: Response) {
        try {
            const userId = (req as AuthRequest).user?.userId;
            if (!userId) return res.status(401).json({ error: 'Unauthorized' });

            const notifications = await notificationService.getUserNotifications(userId);
            res.json(notifications);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async markAsRead(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (!id) return res.status(400).json({ error: 'Notification ID required' });
            const notification = await notificationService.markAsRead(parseInt(id));
            res.json(notification);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async markAllAsRead(req: Request, res: Response) {
        try {
            const userId = (req as AuthRequest).user?.userId;
            if (!userId) return res.status(401).json({ error: 'Unauthorized' });

            await notificationService.markAllAsRead(userId);
            res.json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export const notificationController = new NotificationController();
