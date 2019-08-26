import express from 'express';

import Users from '../controllers/userController';
import auth from '../middleware/auth'
import mentorId from '../middleware/mentorId';
let router = express.Router();


router.get('/home', Users.homeView )
router.post('/auth/login', Users.userlogin)
router.post('/auth/signup', Users.userSignUp )
router.get('/auth/users', Users.getusers )
router.get('/auth/users/:id', Users.specificuser )
router.get('/mentors',auth, Users.getMentors )
router.get('/mentors/:id',mentorId, Users.specificMentor )



export default router;