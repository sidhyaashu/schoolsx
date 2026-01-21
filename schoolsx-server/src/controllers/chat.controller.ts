import { type Request, type Response } from 'express';
import { chatService } from '../services/chat.service.js';
import type { AuthRequest } from '../middlewares/auth.middleware.js';

export class ChatController {
    async sendMessage(req: Request, res: Response) {
        try {
            const userId = (req as AuthRequest).user?.userId;
            if (!userId) return res.status(401).json({ error: 'Unauthorized' });

            const { receiverId, message } = req.body;
            const chatMessage = await chatService.sendMessage({
                senderId: userId,
                receiverId,
                message
            });

            res.status(201).json(chatMessage);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getConversation(req: Request, res: Response) {
        try {
            const userId = (req as AuthRequest).user?.userId;
            if (!userId) return res.status(401).json({ error: 'Unauthorized' });

            const { otherUserId } = req.params;
            if (!otherUserId) return res.status(400).json({ error: 'User ID required' });
            const messages = await chatService.getConversation(userId, parseInt(otherUserId));
            res.json(messages);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async markAsRead(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (!id) return res.status(400).json({ error: 'Message ID required' });
            const message = await chatService.markAsRead(parseInt(id));
            res.json(message);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export const chatController = new ChatController();
