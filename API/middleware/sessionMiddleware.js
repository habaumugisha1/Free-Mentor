import jwt from 'jsonwebtoken';
import Responses from '../helpers/response';

// eslint-disable-next-line consistent-return
export default (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    // eslint-disable-next-line no-use-before-define
    const myData = jwt.verify(bearerToken, 'privateKey', myData);
    req.userInfo = myData;
    next();
  } else {
    return Responses.error(res, 'please enter your token in order to access');
    // res.json({
    //   message: 'please enter your token in order to access',
    // });
  }
};
