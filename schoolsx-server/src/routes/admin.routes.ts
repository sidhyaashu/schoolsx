import { Router } from 'express';
import { adminController } from '../controllers/admin.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(authenticate);
router.use(authorize(['admin']));

// School Management
router.post('/schools', adminController.createSchool);
router.get('/schools', adminController.getSchools);

// Grade Management
router.post('/grades', adminController.createGrade);

// Section Management
router.post('/sections', adminController.createSection);

// Classroom Management
router.post('/classrooms', adminController.createClassroom);

export default router;