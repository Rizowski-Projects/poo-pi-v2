import joi from 'joi';

export default joi.object({
  Authorization: joi.string()
}).unknown(true);
