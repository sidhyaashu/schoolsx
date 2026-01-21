import { db } from '../config/db.js';
import { chatMessages } from '../db/schema.js';
import { eq, or, and } from 'drizzle-orm';
import { socketService } from './socket.service.js';

export class ChatService {
    async sendMessage(data: {
        senderId: number;
        receiverId: number;
        message: string;
    }) {
        const [chatMessage] = await db.insert(chatMessages).values(data).returning();

        // Send real-time message to receiver
        socketService.sendToUser(data.receiverId, 'chat_message', chatMessage);

        return chatMessage;
    }

    async getConversation(userId1: number, userId2: number) {
        return await db.select().from(chatMessages).where(
            or(
                and(
                    eq(chatMessages.senderId, userId1),
                    eq(chatMessages.receiverId, userId2)
                ),
                and(
                    eq(chatMessages.senderId, userId2),
                    eq(chatMessages.receiverId, userId1)
                )
            )
        );
    }

    async markAsRead(messageId: number) {
        const [message] = await db
            .update(chatMessages)
            .set({ read: true })
            .where(eq(chatMessages.id, messageId))
            .returning();

        return message;
    }
}

export const chatService = new ChatService();
