import Joi from 'joi';

export default Joi.string()
  .min(7)
  .max(14)
  .regex(/^[a-z0-9_-]+$/i)
  .description('Short Id')
  .example('NJlALRRsl');
