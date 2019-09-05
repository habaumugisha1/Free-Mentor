// import jwt from 'jsonwebtoken';
// import sessionMiddleware from '../middleware/sessionMiddleware';
import { sessions, reviews } from '../models/data';
import Responses from '../helpers/response';


export default class ReviewSessions {
  // eslint-disable-next-line consistent-return
  static createReview(req, res) {
    const session = sessions.find((s) => s.sessionId === parseInt(req.params.sessionId, 10) && (req.userInfo.user.role === 'mentor'));
    if (req.userInfo.role !== 'mentor')
    // unauthorized status code
    // eslint-disable-next-line brace-style
    {
      return Responses.error(res, 'your are not allowed only mentor is allowed to create review');
    }

    if (!session) {
      return Responses.error(res, `session with ID ${req.params.sessionId} you passed is not found!`);
    }
    if (session) {
      const review = {

        sessionId: sessions.length + 1,
        mentorId: sessions.length + 1,
        menteeId: req.userInfo.user.id,
        score: req.body.score,
        menteeFullName: `${req.userInfo.user.firstName} ${req.userInfo.user.lastName}`,
        remark: req.body.remark,

      };
      reviews.push(review);
      return Responses.success(res, 200, review);
    }
  }

  // eslint-disable-next-line consistent-return
  static deleteReview(req, res) {
    const session = sessions.find((r) => r.sessionId === parseInt(req.params.sessionId, 10) && (req.userInfo.role === 'admin'));
    if (req.userInfo.role !== 'admin') {
    // unauthorized status code
      return Responses.error(res, 401, 'your are not allowed only admin is allowed to delete this review');
    }

    if (!session) {
      return Responses.error(res, 404, `session with ID ${req.params.sessionId} you passed is not found`);
    }

    if (session) sessions.remove(session, 1);
    return Responses.success(res, 200, `Review with id ${req.params.sessionId} successfully deleted!!`);
  }
}
