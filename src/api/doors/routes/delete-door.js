import joi from 'joi';
import manager from '../managers/door-manager';

export default {
  method: 'DELETE',
  path: '/doors/{id}',
  config:{
    description: 'Deletes a door',
    tags: ['api', 'doors'],
    validate: {
      params: {
        id: joi.string().guid().label('id')
      }
    }
  },
  handler: (req, res) => {
    const result = manager.delete(req.params.id);
    return res(result);
  }
}
