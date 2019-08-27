import express from 'express';

import Sessions from '../controllers/sessionController';

import sessionMiddleware from '../middleware/sessionMiddleware';
let router = express.Router();



router.post('/sessions',sessionMiddleware, Sessions.requestSession )


export default router;