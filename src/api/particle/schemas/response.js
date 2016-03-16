import joi from 'joi';

export default {
  schema: joi.object({
    bodybody: joi.string(),
    payload: joi.string()
  })
};
