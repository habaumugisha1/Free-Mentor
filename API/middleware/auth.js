import { users, mentors } from '../models/data';

import jwt from 'jsonwebtoken';
export default (req, res, next)=>{
  const bearerHeader = req.headers['authorization'];
  if(bearerHeader){
 const bearer =bearerHeader.split(' ')
 const bearerToken= bearer[1];

 const myData = jwt.verify(bearerToken, 'privateKey', myData)

 res.json({
   status: 200,
      data: mentors
 });
 next();
  } else {
  res.json({
    message: 'please enter your token'
  })
}
  }

