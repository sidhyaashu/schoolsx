import { Router } from 'express';
import { assignmentController } from '../controllers/assignment.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(authenticate);

router.get('/', authorize(['student']), assignmentController.getMyAssignments);
router.post('/submit', authorize(['student']), assignmentController.submit);

export default router;
