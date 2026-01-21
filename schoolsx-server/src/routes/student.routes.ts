import { Router } from 'express';
import { studentController } from '../controllers/student.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = Router();

// Protect all routes
router.use(authenticate);
router.use(authorize(['student']));

router.get('/my-subjects', studentController.getMySubjects);

export default router;
