import { type Request, type Response } from 'express';
import { storageService } from '../services/storage.service.js';

export class StorageController {
    async getUploadUrl(req: Request, res: Response) {
        try {
            const { fileName, contentType } = req.body;

            if (!fileName || !contentType) {
                return res.status(400).json({ error: 'fileName and contentType are required' });
            }

            const result = await storageService.getUploadUrl(fileName, contentType);
            res.json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export const storageController = new StorageController();
