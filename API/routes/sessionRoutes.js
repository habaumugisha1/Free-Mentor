import express from 'express';

import Sessions from '../controllers/sessionController';

import sessionMiddleware from '../middleware/sessionMiddleware';
let router = express.Router();



router.post('/sessions',sessionMiddleware, Sessions.requestSession )
router.patch('/sessions/:sessionId/:accept',sessionMiddleware, Sessions.acceptSession)


export default router;