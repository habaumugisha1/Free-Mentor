import express from 'express';

import Sessions from '../controllers/sessionController';

import sessionMiddleware from '../middleware/sessionMiddleware';

const router = express.Router();


router.get('/sessions', sessionMiddleware, Sessions.getSession);
router.post('/sessions', sessionMiddleware, Sessions.requestSession);
router.patch('/sessions/:sessionId/:reject', sessionMiddleware, Sessions.declineSession);
router.patch('/sessions/:sessionId/:accept', sessionMiddleware, Sessions.acceptSession);

export default router;
