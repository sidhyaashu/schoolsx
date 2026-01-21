import { Router } from 'express';
import { aiController } from '../controllers/ai.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(authenticate);
router.post('/chat', aiController.chat);

export default router;