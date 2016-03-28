import joi from 'joi';
import manager from '../managers/door-manager';
import id from '../schemas/id';

export default {
  method: 'GET',
  path: '/doors/{id}',
  config:{
    description: 'Gets a door',
    tags: ['api', 'doors'],
    validate: {
      params:{
        id
      }
    }
  },
  handler: (req, res) => {
    const door = manager.getDoor(req.params.id);
    return res(door);
  }
}
