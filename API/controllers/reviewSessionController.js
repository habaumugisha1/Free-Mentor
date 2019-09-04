// import jwt from 'jsonwebtoken';
// import sessionMiddleware from '../middleware/sessionMiddleware';
import { sessions, reviews } from '../models/data';


export default class ReviewSessions {
  static createReview(req, res) {
    const session = sessions.find((s) => s.sessionId === parseInt(req.params.sessionId, 10) && (req.userInfo.user.role === 'mentor'));
    if (req.userInfo.role !== 'mentor')
    // unauthorized status code
    {
      return res.status(401).json({
        message: 'your are not allowed only mentor is allowed to create review',
      });
    }

    if (!session) {
      return res.status(404).json({
        status: 404,
        message: `session with ID ${req.params.sessionId} you passed is not found!`,
      });
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
      res.status(200).json({
        status: 200,
        data: review,

      });
    }
  }

  static deleteReview(req, res) {
    const session = sessions.find((r) => r.sessionId === parseInt(req.params.sessionId, 10) && (req.userInfo.user.role === 'admin'));
    if (req.userInfo.role !== 'admin')
    // unauthorized status code
    {
      return res.status(401).json({
        message: 'your are not allowed only admin is allowed to delete this review',
      });
    }

    if (!session) {
      return res.status(404).json({
        status: 404,
        message: `session with ID ${req.params.sessionId} you passed is not found`,
      });
    }

    if (session) sessions.splice(session, 1);
    res.status(200).json({
      status: 200,
      data: {
        message: `Review with id ${req.params.sessionId} successfully deleted!!`,
      },
    });
  }
}
