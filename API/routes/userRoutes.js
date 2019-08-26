import express from 'express';

import Users from '../controllers/userController';
import auth from '../middleware/auth'
let router = express.Router();


router.get('/home', Users.homeView )
router.post('/auth/login', Users.userlogin)
router.post('/auth/signup', Users.userSignUp )
router.get('/auth/users', Users.getusers )
router.get('/auth/users/:id', Users.specificuser )
router.get('/mentors',auth, Users.getMentors )



export default router;