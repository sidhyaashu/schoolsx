import { Router } from 'express';
import { schedulingController } from '../controllers/scheduling.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(authenticate);
router.use(authorize(['admin', 'teacher']));

router.post('/check-conflicts', schedulingController.checkConflicts);
router.post('/periods', schedulingController.createPeriod);

export default router;
