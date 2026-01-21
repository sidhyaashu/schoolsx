import express, { type Request, type Response } from 'express';
import { db } from './config/db.js';
import { sql } from 'drizzle-orm';
import authRoutes from './routes/auth.routes.js';
import studentRoutes from './routes/student.routes.js';
import assignmentRoutes from './routes/assignment.routes.js';
import aiRoutes from './routes/ai.routes.js';
import teacherRoutes from './routes/teacher.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/teacher', teacherRoutes);

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
