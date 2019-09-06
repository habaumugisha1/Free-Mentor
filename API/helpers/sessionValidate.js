import Joi from 'joi';

const Schemasession = {
  mentorId: Joi.number().required(),
  questions: Joi.string().required(),
};


export default Schemasession;
