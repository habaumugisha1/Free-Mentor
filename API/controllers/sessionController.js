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
 // mentor accepting menotorship request session
    static acceptSession (req, res, next) {
        const session = sessions.find(s => s.sessionId === parseInt(req.params.sessionId,10))
       
        if(!session) return res.status(404).json({
            
                status: 404,
                message: 'session with ID you type is not found',
                })
                 
    res.status(200).json({ 
        status: 200,
        data: {
            sessionId: req.params.sessionId,
            mentorId : req.body.mentorId,
            menteeId : req.userInfo.user.id,
            questions: req.body.questions,
            menteeEmail: req.userInfo.user.email,
            status: "Accepted",
          }
        })
    
    };
      
    // mentor should be able to decline session request mentorship
    static declineSession(req, res) {
        const session = sessions.find(s => s.sessionId === parseInt(req.params.sessionId,10))
           if(!session) return res.status(404).json({
             status: 404,
               message:'session with ID you passed is not found!'   
            })

    res.status(200).json({
        status:200,
        data: {
            sessionId: req.params.sessionId,
            mentorId : req.body.mentorId,
            menteeId : req.userInfo.user.id,
            questions: req.body.questions,
            menteeEmail: req.userInfo.user.email,
            status: "rejected",
          }
        })
      }


      // get sessions
      static getSession(req, res) {
        res.status(200).json({
          sessions
        })
      }
    } 