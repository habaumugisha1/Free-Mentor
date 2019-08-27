import jwt from 'jsonwebtoken';
import { users, mentors, sessions } from '../models/data';

    
export default class Sessions {
    // user should request a session to mentor
    static requestSession(req, res,) {
    
         const session = {
                          sessionId: sessions.length + 1,
                          mentorId : req.body.mentorId,
                          menteeId : req.userInfo.user.id,
                          questions: req.body.questions,
                          menteeEmail: req.userInfo.user.email,
                          status: "pending",
                          
                        };
                    sessions.push(session);
                        res.json({
                            message: 'session requested successfully!',
                            data: session,
                            
                        })
                        };
                     
     } 