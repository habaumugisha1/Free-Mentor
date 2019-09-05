/* eslint-disable no-use-before-define */
import jwt from 'jsonwebtoken';
import Responses from '../helpers/response';
// import { users, mentors } from '../models/data';

// eslint-disable-next-line consistent-return
export default (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    const myData = jwt.verify(bearerToken, 'privateKey', myData);

    next();
  } else {
    return Responses.error(res, 'please enter your token in order to access');
  }
};
