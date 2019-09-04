import express from 'express';

import Users from '../controllers/userController';
import ReviewSessions from '../controllers/reviewSessionController';
import Sessions from '../controllers/sessionController';

import sessionMiddleware from '../middleware/sessionMiddleware';

import auth from '../middleware/auth';
import mentorId from '../middleware/mentorId';

const router = express.Router();


router.get('/home', Users.homeView);
router.post('/auth/login', Users.userlogin);
router.post('/auth/signup', Users.userSignUp);
router.get('/auth/users', Users.getusers);
router.patch('/auth/users/:id', Users.specificuser);
router.get('/mentors', auth, Users.getMentors);
router.get('/mentors/:id', mentorId, Users.specificMentor);

// session routes
router.get('/sessions', sessionMiddleware, Sessions.getSession);
router.post('/sessions', sessionMiddleware, Sessions.requestSession);
router.patch('/sessions/:sessionId/:accept', sessionMiddleware, Sessions.acceptSession);
router.patch('/sessions/:sessionId/:reject', sessionMiddleware, Sessions.declineSession);

// session review ruotes
router.post('/sessions/:sessionId/review', sessionMiddleware, ReviewSessions.createReview);
router.delete('/sessions/:sessionId/review', sessionMiddleware, ReviewSessions.deleteReview);


export default router;
