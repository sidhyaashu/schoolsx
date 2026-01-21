import { Router } from 'express';
import { teacherController } from '../controllers/teacher.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(authenticate);
router.use(authorize(['teacher', 'admin']));

router.get('/classes', teacherController.getMyClasses);

export default router;
