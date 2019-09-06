import Joi from 'joi';
import { users, sessions } from '../models/data';
import Responses from '../helpers/response';
import Schemasession from '../helpers/sessionValidate';

export default class Sessions {
  // user should request a session to mentor
  static requestSession(req, res) {
    const result = Joi.validate(req.body, Schemasession);
    if (result.error) {
      res.status(409).send(result.error.details[0].message);
    } else {
      const session = {
        sessionId: sessions.length + 1,
        mentorId: req.body.mentorId,
        menteeId: req.userInfo.id,
        questions: req.body.questions,
        menteeEmail: req.userInfo.email,
        status: 'pending',
      };
      if (session.questions >= 1) return Responses.error(res, 422, 'requested');
      sessions.push(session);
      return Responses.success(res, 200, 'session requested successfully!', session);
    }
  }

  // mentor accepting menotorship request sessio
  static acceptSession(req, res) {
    const session = sessions.find((s) => s.sessionId === parseInt(req.params.sessionId, 10));

    if (!session) {
      return Responses.error(res, 404, `session with ID ${req.params.sessionId} you type is not found`);
    }
    const data = {
      sessionId: req.params.sessionId,
      mentorId: req.body.mentorId,
      menteeId: req.userInfo.id,
      questions: req.body.questions,
      menteeEmail: req.userInfo.email,
      status: 'Accepted',
    };
    sessions.splice(0, 1, data);
    return Responses.success(res, 200, data);
  }

  static declineSession(req, res) {
    const session = sessions.find((session) => session.sessionId === parseInt(req.params.sessionId, 10));
    console.log(session);
    if (!session) {
      return Responses.error(res, 404, `session with ID ${req.params.sessionId} you passed is not found!`);
    }

    const rejected = {
      sessionId: req.params.sessionId,
      mentorId: req.body.mentorId,
      menteeId: req.userInfo.id,
      questions: req.body.questions,
      menteeEmail: req.userInfo.email,
      status: 'rejected',
    };

    sessions.splice(1, 1, rejected);
    return Responses.success(res, 200, rejected);
  }

  // get sessions
  static getSession(req, res) {
    return Responses.success(res, 200, sessions);
  }
}
