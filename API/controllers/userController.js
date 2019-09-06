import Joi from 'joi';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { users } from '../models/data';
import schema from '../helpers/validation';
import Responses from '../helpers/response';


export default class Users {
  static homeView(req, res) {
    return Responses.success(res, 200, 'Welcome to Free Mentors');
  }


  static userSignUp(req, res) {
    const user = users.find((user) => user.email === req.body.email);
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (user) {
        return Responses.success(res, 409, 'Email already registed');
      }
      const result = Joi.validate(req.body, schema);
      if (result.error) {
        res.status(400).send(result.error.details[0].message);
      } else {
        const user = {
          id: users.length + 1,
          email: req.body.email,
          firstName: req.body.name,
          lastName: req.body.userName,
          password: hash,
          adress: req.body.adress,
          biography: req.body.biography,
          occupation: req.body.occupation,
          role: req.body.role,
          expertise: req.body.expertise,
        };

        users.push(user);
        const { password, ...noA } = user;
        const token = jwt.sign(noA, 'privateKey', (token));
        return Responses.success(res, 201, 'User created sucessful!', token);
      }
    });
  }

  static getusers(req, res) {
    const user = users.filter((user) => user.role === 'mentee');
    return Responses.success(res, 200, user);
  }


  static specificuser(req, res) {
    const user = users.find((user) => user.id === parseInt(req.params.id, 10) && (user.role === 'mentee'));
    if (!user) {
      return Responses.error(res, 404, `User with the given ID = ${req.params.id} not found!`);
    }
    if (user) {
      const { password, ...noA } = user;
      const token = jwt.sign(noA, 'privateKey', (token));
      return Responses.success(res, 200, token, 'User account changed to mentor');
    }
 }

  // user should be able to sign in
  static userlogin(req, res) {
    const user = users.find((user) => user.email === req.body.email);
    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return Responses.error(res, 'password not match!');
        }

        if (result) {
          // destructuring objectt
          const { password, ...noA } = user;
          const token = jwt.sign(noA, 'privateKey', (token));
          return Responses.success(res, 200, 'User is successfully logged in', token);
        }
      });
    } else {
      return Responses.error(res, 422, 'You are not registed!');
    }
  }

  static getMentors(req, res) {
    const mentors = users.filter((user) => user.role === 'mentor');
    return Responses.success(res, 200, 'mentors can help you', mentors);
  }


  static specificMentor(req, res) {
    const mentor = users.find((m) => m.id === parseInt(req.params.id, 10) && (m.role === 'mentor'));
    if (!mentor) {
      return Responses.error(res, 404, `mentor with the given ID = ${req.params.id} not found!`);
    }
    return Responses.success(res, 200, 'this is mentor you want.', mentor);
  }
}
