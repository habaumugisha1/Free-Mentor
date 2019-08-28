import express from 'express';

import ReviewSessions from '../controllers/reviewSessionController';

import sessionMiddleware from '../middleware/sessionMiddleware';
let router = express.Router();




router.post('/sessions/:sessionId/review', sessionMiddleware, ReviewSessions.createReview)



export default router;