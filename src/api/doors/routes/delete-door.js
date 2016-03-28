import joi from 'joi';
import manager from '../managers/door-manager';
import id from '../schemas/id';

export default {
  method: 'DELETE',
  path: '/doors/{id}',
  config:{
    description: 'Deletes a door',
    tags: ['api', 'doors'],
    validate: {
      params: {
        id
      }
    }
  },
  handler: (req, res) => {
    const result = manager.delete(req.params.id);
    return res(result);
  }
}
