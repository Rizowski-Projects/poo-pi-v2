import joi from 'joi';
import door from '../schemas/door';
import manager from '../managers/door-manager';
import auth from '../prereqs/auth';
import headers from '../schemas/headers';

export default {
  method: 'POST',
  path: '/doors',
  config:{
    description: 'Create doors',
    tags: ['api', 'doors'],
    pre: [ auth ],
    validate: {
      payload: door,
      headers
    }
  },
  handler: (req, res) => {
    const response = manager.createDoor(req.payload)
      .then(() => req.generateResponse().code(201));
    return res(response);
  }
}
