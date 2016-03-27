import joi from 'joi';
import gender from '../schemas/genders';
import manager from '../managers/door-manager';

export default {
  method: 'POST',
  path: '/doors',
  config:{
    description: 'Create doors',
    tags: ['api', 'doors'],
    validate: {
      payload: joi.object({
        name: joi.string().min(3).max(32),
        gender,
        open: joi.boolean()
      })
    }
  },
  handler: (req, res) => {
    const response = manager.createDoor(req.payload)
      .then(() => req.generateResponse().code(201));
    return res(response);
  }
}
