import { users, sessions } from '../models/data';
import Responses from '../helpers/response';

export default class Sessions {
  // user should request a session to mentor
  static requestSession(req, res) {
    const session = {
      sessionId: sessions.length + 1,
      mentorId: req.body.mentorId,
      menteeId: req.userInfo.id,
      questions: req.body.questions,
      menteeEmail: req.userInfo.email,
      status: 'pending',
    };
    sessions.push(session);
    return Responses.success(res, 200, 'session requested successfully!', session);
    // res.status(200).json({
    //   message: 'session requested successfully!',
    //   data: session,

    // });
  }

  // eslint-disable-next-line consistent-return
  static declineSession(req, res) {
    // eslint-disable-next-line no-shadow
    // eslint-disable-next-line max-len
    // eslint-disable-next-line no-shadow
    // eslint-disable-next-line max-len
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
    // eslint-disable-next-line no-console
    sessions.splice(1, 1, rejected);
    return Responses.success(res, 200, rejected);
  }

  // mentor accepting menotorship request session
  // eslint-disable-next-line consistent-return
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

  // mentor should be able to decline session request mentorship
  // eslint-disable-next-line consistent-return


  // get sessions
  static getSession(req, res) {
    return Responses.success(res, 200, sessions);
  }
}
