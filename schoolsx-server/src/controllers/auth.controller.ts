import { type Request, type Response } from 'express';
import { authService } from '../services/auth.service.js';
import { loginSchema, registerSchema } from '../schemas/auth.schema.js';
import { ZodError } from 'zod';

export class AuthController {
    async register(req: Request, res: Response) {
        try {
            const validatedData = registerSchema.parse(req.body);
            // With exactOptionalPropertyTypes, we cannot pass undefined for an optional property
            const registerData = {
                ...validatedData,
                role: validatedData.role || 'student' // Provide default so it's always string
            } as any; // Cast to avoid strict optional check pain

            const result = await authService.register(registerData);
            res.status(201).json(result);
        } catch (error) {
            if (error instanceof ZodError) {
                res.status(400).json({ error: (error as any).errors });
            } else if (error instanceof Error && error.message === 'User already exists') {
                res.status(409).json({ error: 'User already exists' });
            } else {
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    }

    async login(req: Request, res: Response) {
        try {
            const validatedData = loginSchema.parse(req.body);
            const result = await authService.login(validatedData);
            res.status(200).json(result);
        } catch (error) {
            if (error instanceof ZodError) {
                res.status(400).json({ error: (error as any).errors });
            } else if (error instanceof Error && error.message === 'Invalid credentials') {
                res.status(401).json({ error: 'Invalid credentials' });
            } else {
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    }
}

export const authController = new AuthController();
