import express from 'express';
import review from './sessionReviewRoutes';
import sessionRoutes from './sessionRoutes';
import userRoutes from './userRoutes';


const router = express.Router();

router.use('/', sessionRoutes);
router.use('/', review);
router.use('/', userRoutes);

export default router;
