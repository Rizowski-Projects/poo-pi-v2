import joi from 'joi';

export default joi.object({
  authorization: joi.string().guid()
}).unknown(true).label('headers');
