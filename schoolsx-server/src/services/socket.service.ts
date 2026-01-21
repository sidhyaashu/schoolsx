import { Server as HTTPServer } from 'http';
import { Server, Socket } from 'socket.io';
import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';

interface AuthenticatedSocket extends Socket {
    userId?: number;
    userRole?: string;
}

export class SocketService {
    private io: Server | null = null;
    private userSockets: Map<number, string> = new Map(); // userId -> socketId

    initialize(httpServer: HTTPServer) {
        this.io = new Server(httpServer, {
            cors: {
                origin: config.clientUrl || 'http://localhost:3001',
                credentials: true
            }
        });

        this.io.use(this.authenticateSocket.bind(this));
        this.io.on('connection', this.handleConnection.bind(this));

        console.log('✅ Socket.io initialized');
    }

    private authenticateSocket(socket: AuthenticatedSocket, next: (err?: Error) => void) {
        const token = socket.handshake.auth.token;

        if (!token) {
            return next(new Error('Authentication error: No token provided'));
        }

        try {
            const decoded = jwt.verify(token, config.jwtSecret) as { userId: number; role: string };
            socket.userId = decoded.userId;
            socket.userRole = decoded.role;
            next();
        } catch (error) {
            next(new Error('Authentication error: Invalid token'));
        }
    }

    private handleConnection(socket: AuthenticatedSocket) {
        const userId = socket.userId!;
        console.log(`User ${userId} connected (${socket.id})`);

        // Store socket mapping
        this.userSockets.set(userId, socket.id);

        // Join user's personal room
        socket.join(`user:${userId}`);

        socket.on('disconnect', () => {
            console.log(`User ${userId} disconnected`);
            this.userSockets.delete(userId);
        });
    }

    /**
     * Send notification to a specific user
     */
    sendToUser(userId: number, event: string, data: any) {
        if (!this.io) return;
        this.io.to(`user:${userId}`).emit(event, data);
    }

    /**
     * Send to multiple users
     */
    sendToUsers(userIds: number[], event: string, data: any) {
        if (!this.io) return;
        userIds.forEach(userId => {
            this.io!.to(`user:${userId}`).emit(event, data);
        });
    }

    /**
     * Broadcast to all connected users
     */
    broadcast(event: string, data: any) {
        if (!this.io) return;
        this.io.emit(event, data);
    }

    getIO() {
        return this.io;
    }
}

export const socketService = new SocketService();
