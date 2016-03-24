import joi from 'joi';
import manager from '../managers/door-manager';

export default {
  method: 'POST',
  path: '/doors',
  config:{
    description: 'Create doors',
    tags: ['api', 'doors'],
  },
  handler: (req, res) => {
    const response = manager.createDoor(req.payload)
      .then(() => req.generateResponse().code(201));
    return res(response);
  }
}
