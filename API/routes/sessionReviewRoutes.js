import express from 'express';

import ReviewSessions from '../controllers/reviewSessionController';

import sessionMiddleware from '../middleware/sessionMiddleware';
const router = express.Router();


router.post('/sessions/:sessionId/review', sessionMiddleware, ReviewSessions.createReview)
router.delete('/sessions/:sessionId/review',sessionMiddleware, ReviewSessions.deleteReview)




export default router;