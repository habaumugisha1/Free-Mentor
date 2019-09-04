import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    const myData = jwt.verify(bearerToken, 'privateKey', myData);
    req.userInfo = myData;
    next();
  } else {
    res.json({
      message: 'please enter your token in order to access',
    });
  }
};
