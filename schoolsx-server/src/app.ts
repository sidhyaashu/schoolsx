import express, { type Request, type Response } from 'express';
import { db } from './config/db.js';
import { sql } from 'drizzle-orm';
import authRoutes from './routes/auth.routes.js';
import studentRoutes from './routes/student.routes.js';
import assignmentRoutes from './routes/assignment.routes.js';
import aiRoutes from './routes/ai.routes.js';
import teacherRoutes from './routes/teacher.routes.js';
import adminRoutes from './routes/admin.routes.js';
import schedulingRoutes from './routes/scheduling.routes.js';
import gradingRoutes from './routes/grading.routes.js';
import storageRoutes from './routes/storage.routes.js';
import notificationRoutes from './routes/notification.routes.js';
import chatRoutes from './routes/chat.routes.js';
import livekitRoutes from './routes/livekit.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/teacher', teacherRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/scheduling', schedulingRoutes);
app.use('/api/grading', gradingRoutes);
app.use('/api/storage', storageRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/livekit', livekitRoutes);

app.get('/health', async (req: Request, res: Response) => {
    try {
        // Test database connection
        await db.execute(sql`SELECT 1`);
        res.status(200).json({ status: 'ok', database: 'connected' });
    } catch (error) {
        console.error('Health check failed:', error);
        res.status(500).json({ status: 'error', database: 'disconnected', error: String(error) });
    }
});

export default app;
