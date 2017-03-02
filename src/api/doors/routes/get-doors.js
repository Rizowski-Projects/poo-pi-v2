import joi from 'joi';
import manager from '../managers/door-manager';

export default {
  method: 'GET',
  path: '/doors',
  config:{
    description: 'Gets all doors',
    tags: ['api', 'doors'],
  },
  handler: (req, res) => {
    const response = manager.getAll();
    return res(response);
  }
};
