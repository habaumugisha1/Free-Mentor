import express from 'express';

import Sessions from '../controllers/sessionController';

import sessionMiddleware from '../middleware/sessionMiddleware';
let router = express.Router();



router.post('/sessions', sessionMiddleware, Sessions.requestSession )
router.patch('/sessions/:sessionId/reject', sessionMiddleware, Sessions.declineSession)
router.patch('/sessions/:sessionId/:accept', sessionMiddleware, Sessions.acceptSession)
router.get('/sessions', sessionMiddleware, Sessions.getSession)



export default router;