import jwt from 'jsonwebtoken';
import { users, mentors, sessions, reviews } from '../models/data';

    
export default class ReviewSessions {
    
    static createReview(req, res,) {
        const session = sessions.find(s => s.sessionId === parseInt(req.params.sessionId,10))
        if(!session) return res.status(404).json({
          status: 404,
            message:'session with ID you passed is not found!'   
         })
         if(session){
         const review = {
                          
                          sessionId: sessions.length + 1,
                          mentorId :sessions.length + 1,
                          menteeId : req.userInfo.user.id,
                          score: req.body.score,
                          menteeFullName: `${req.userInfo.user.firstName} ${req.userInfo.user.lastName}`, 
                          remark: req.body.remark
                          
                        };
                    reviews.push(review);
                        res.json({
                           status :200,
                            data: review
                            
                        })
               } 
    
          };
 
    } 