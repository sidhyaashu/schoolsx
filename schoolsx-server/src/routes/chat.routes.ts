import { Router } from 'express';
import { chatController } from '../controllers/chat.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(authenticate);

router.post('/messages', chatController.sendMessage);
router.get('/conversation/:otherUserId', chatController.getConversation);
router.put('/messages/:id/read', chatController.markAsRead);

export default router;
