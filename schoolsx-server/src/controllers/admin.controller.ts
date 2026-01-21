import { type Request, type Response } from 'express';
import { adminService } from '../services/admin.service.js';

export class AdminController {
    async createSchool(req: Request, res: Response) {
        try {
            const school = await adminService.createSchool(req.body);
            res.status(201).json(school);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getSchools(req: Request, res: Response) {
        try {
            const schools = await adminService.getSchools();
            res.json(schools);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async createGrade(req: Request, res: Response) {
        try {
            const grade = await adminService.createGrade(req.body);
            res.status(201).json(grade);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async createSection(req: Request, res: Response) {
        try {
            const section = await adminService.createSection(req.body);
            res.status(201).json(section);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async createClassroom(req: Request, res: Response) {
        try {
            const classRecord = await adminService.createClassroom(req.body);
            res.status(201).json(classRecord);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export const adminController = new AdminController();