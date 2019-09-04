import Joi from 'joi';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
import { users, mentors } from '../models/data';


    
    // import User from '../models/user';
    


export default class Users {

    static homeView (req, res) {
        console.log(req.body);
        res.status(200).json({
            status :200,
            message : "Welcome to Free Mentors"
        });
    };
               
    static userSignUp(req, res) {
        const user = users.find(u =>u.email === req.body.email)
      bcrypt.hash(req.body.password,10, (err,hash) => {
          if(err) {
          return res.status(500).json({
              error: err
          })
      } else {
        if (user)
        // 409 is conflict with existing email
        res.status(409).json({
            message:'Email already registed'
        }) 
                const schema = {
                    email : Joi.string().min(10).email().required(),
                    firstName : Joi.string().min(5).required(),
                    lastName : Joi.string().min(7).required(),
                    password : Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/),
                    adress : Joi.string().required(),
                    biography : Joi.string().max(150).required(),
                    occupation : Joi.string().required(),
                    role:Joi.string(),
                    expertise : Joi.string().max(50).required()
                };
                // validation user input
                const result =  Joi.validate(req.body, schema);
                if (result.error) {
                    res.status(400).send(result.error.details[0].message)
                } else {
                        const user = {
                          id: users.length + 1,
                          email : req.body.email,
                          firstName : req.body.name,
                          lastName : req.body.userName,
                          password: hash,
                          adress: req.body.adress,
                          biography: req.body.biography,
                          occupation: req.body.occupation,
                          role: req.body.role,
                          expertise: req.body.expertise
                        };
                    
                    // console.log(user.req.body)
                        users.push(user);
                        jwt.sign({ user }, 'secretKey', (err, token) => {
                        
                            res.status(201).json({
                                status: 201,
                                message: 'User created sucessful!',
                                data : {
                                    token,
                                    message: 'Good! user created sucessful!!!'
                                }
                                
                            });
                        });
                   //} 
                //}
           //}
                
         };
      }}
      )
     }
                 

static getusers(req, res){
               const user = users.filter(user => user.role === "mentee")
                        res.status(200).json({
                            status: 200,
                            data : user 
                        });
                    // });
                };

        // getting specific user
static specificuser (req, res ){
    
        const user = users.find(user => user.id === parseInt(req.params.id,10) && (user.role=== "mentee"))
        if(!user) return res.status(404).json({
            status : 404,
            message: `User with the given ID = ${req.params.id} not found!`,
            
        })
        if(user)
       return res.status(200).json({user});
        };


           // user should be able to sign in
static userlogin (req, res){
    
    const user = users.find(user => user.email === req.body.email)
     
         
           if(user){
               bcrypt.compare(req.body.password, user.password, (err, result) => {
                   if(err){
                       
                       return res.json({
                           message:"password not match!"
                       })
                   } 
                    
                   if(result){
               const token = jwt.sign({user},'privateKey',(token))  
                    return res.status(200).json({
                        status: 200,
                        message: 'User is successfully logged in',
                        data: {
                            token: token
                        }
                     })
               }
            })
        } else {
                res.status(422).json({
                        message:"You are not registed!"
                        })  
                 }     
           }

    static getMentors (req, res){
       const mentors = users.filter(user => user.role === "mentor")
        res.status(200).json({
            status: 200,
            data: mentors
            })
           }
          

    static specificMentor (req, res){
              const mentor =  users.find(m => m.id === parseInt(req.params.id,10) && (m.role ==="mentor"))
                if(!mentor) return res.status(404).json({
                    status : 404,
                    message: `mentor with the given ID = ${req.params.id} not found!`,
                    
                }) 
                
                return res.json({
                    data: mentor 
                });
                };        
            
     } 
               
     
 
    


