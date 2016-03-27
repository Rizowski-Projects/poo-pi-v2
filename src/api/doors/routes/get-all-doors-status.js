import joi from 'joi';
import manager from '../managers/door-manager';

export default {
  method: 'GET',
  path: '/doors/status',
  config:{
    description: 'Get all doors status',
    tags: ['api', 'doors', 'status'],
  },
  handler: (req, res) => {
    const response = manager.getAll();
    return res(response);
  }
}
