import { db } from '../config/db.js';
import { notifications } from '../db/schema.js';
import { eq } from 'drizzle-orm';
import { socketService } from './socket.service.js';

export class NotificationService {
    async create(data: {
        userId: number;
        type: 'grade_update' | 'announcement' | 'assignment_posted' | 'class_reminder';
        title: string;
        message: string;
        metadata?: any;
    }) {
        // Store in database
        const [notification] = await db.insert(notifications).values({
            userId: data.userId,
            type: data.type,
            title: data.title,
            message: data.message,
            metadata: data.metadata ? JSON.stringify(data.metadata) : null,
        }).returning();

        // Send real-time notification via Socket.io
        socketService.sendToUser(data.userId, 'notification', notification);

        return notification;
    }

    async getUserNotifications(userId: number) {
        return await db.select().from(notifications).where(eq(notifications.userId, userId));
    }

    async markAsRead(notificationId: number) {
        const [notification] = await db
            .update(notifications)
            .set({ read: true })
            .where(eq(notifications.id, notificationId))
            .returning();

        return notification;
    }

    async markAllAsRead(userId: number) {
        await db
            .update(notifications)
            .set({ read: true })
            .where(eq(notifications.userId, userId));
    }
}

export const notificationService = new NotificationService();
