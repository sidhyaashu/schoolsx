import { Router } from 'express';
import { gradingController } from '../controllers/grading.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(authenticate);

router.post('/report-cards', authorize(['admin', 'teacher']), gradingController.generateReportCard);
router.post('/marks', authorize(['teacher']), gradingController.submitMarks);

export default router;
