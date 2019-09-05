/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { users } from '../models/data';

export default (req, res, next) => {
  // eslint-disable-next-line no-shadow
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line no-shadow
  const user = users.find((user) => user.email === req.body.email);
  next();
};
