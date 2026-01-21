import { Router } from 'express';
import { livekitController } from '../controllers/livekit.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(authenticate);

// Generate access token for a room
router.post('/token', livekitController.generateToken);

export default router;
