import Joi from 'joi';

const schema = {
  email: Joi.string().min(10).email().required(),
  firstName: Joi.string().min(5).required(),
  lastName: Joi.string().min(7).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/),
  adress: Joi.string().required(),
  biography: Joi.string().max(150).required(),
  occupation: Joi.string().required(),
  role: Joi.string(),
  expertise: Joi.string().max(50).required(),
};

export default schema;
