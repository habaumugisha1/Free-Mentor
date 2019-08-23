import express from 'express';

import Users from '../controllers/userController';
let router = express.Router();

// import User from '../models/user';
router.get('/home', Users.homeView )
// router.post('/auth/login', Users.userlogin)
router.post('/auth/signup', Users.userSignUp )
router.get('/auth/users', Users.getusers )
router.get('/auth/users/:id', Users.specificuser )


export default router;