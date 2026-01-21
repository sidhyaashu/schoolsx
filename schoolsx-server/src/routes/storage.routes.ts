import { Router } from 'express';
import { storageController } from '../controllers/storage.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(authenticate);
router.post('/upload-url', storageController.getUploadUrl);

export default router;
