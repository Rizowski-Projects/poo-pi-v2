import joi from 'joi';

export default joi.object({
  Authorization: joi.string().guid()
}).unknown(true).label('headers');
