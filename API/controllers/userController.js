import Joi from 'joi';
import jwt from 'jsonwebtoken';
//import { user } from '../helpers/userhelper';
import { users, mentors } from '../models/data';


    
    // import User from '../models/user';
    


export default class Users {

    static homeView (req, res) {
        console.log(req.body);
        res.json({
            status :201,
            message : "Welcome to Free Mentors"
        });
    };
               
    static userSignUp(req, res, next) {
    
                const schema = {
                    firstName : Joi.string().min(5).required(),
                    lastName : Joi.string().min(7).required(),
                    email : Joi.string().min(10).email().required(),
                    password : Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/),
                    adress : Joi.string().required(),
                    biography : Joi.string().max(150).required(),
                    occupation : Joi.string().required(),
                    expertise : Joi.string().max(50).required()
                };
                // validation user input
                const result =  Joi.validate(req.body, schema);
                if (result.error) {
                    res.status(400).send(result.error.details[0].message)
                } else {
                        const user = {
                          id: users.length + 1,
                          name : req.body.name,
                          userName : req.body.userName,
                          email : req.body.email,
                          password: req.body.password,
                          adress: req.body.adress,
                          biography: req.body.biography,
                          occupation: req.body.occupation,
                          expertise: req.body.expertise
                        };
                        users.push(user);
                        jwt.sign({user}, 'secretKey', (err, token) => {
                        
                            res.json({
                                status: 200,
                                message: 'User created sucessful!',
                                data : {
                                    token,
                                    message: 'Good user created sucessful!!!'
                                }
                                
                            });
                        });
                   } 
                //}
           // }
                
        };
                 

static getusers(req, res, next ){
                    const user = {
                        id: users.length + 1,
                        name : req.body.name,
                        userName : req.body.userName,
                        email : req.body.email,
                        password: req.body.password,
                        adress: req.body.adress,
                        biography: req.body.biography,
                        occupation: req.body.occupation,
                        expertise: req.body.expertise
                      };
                    jwt.sign({user}, 'secretKey', (err, token) => {
                                
                        res.json({
                            status: 200,
                            data : {
                                users   
                            }
                            
                        });
                    });
                };

        // getting specific user
static specificuser (req, res, next ){
    // const id = user.id;
        const user = users.find(user => user.id === parseInt(req.params.id,10))
        if(!user) return res.status(404).json({
            status : 404,
            message: "User with the given ID not found!",
            
        }) 
        res.json(user);
        };


        // user should be able to sign in
static userlogin (req, res){
    
 const user = users.find(user => user.email === req.body.email && user.password === req.body.password )
       
 if(user){
   const token = jwt.sign({user},'privateKey',(token))  
        return res.status(200).json({
            status: 200,
            message: 'User is successfully logged in',
            data: {
                token: token
            }

        })
      
   }
        else {
            res.json({
                message:"You are not registed!"
            })
        }
     
        } 
    
    static getMentors (req, res){
        res.json({
            status: 200,
            data: data
            })
           }
          
            
     } 
               
     
 
    


