import joi from 'joi';
import manager from '../managers/door-manager';
import id from '../schemas/id';
import auth from '../prereqs/auth';
import headers from '../schemas/headers';

export default {
  method: 'DELETE',
  path: '/doors/{id}',
  config:{
    description: 'Deletes a door',
    tags: ['api', 'doors'],
    pre: [ auth ],
    validate: {
      params: {
        id
      },
      headers
    }
  },
  handler: (req, res) => {
    const result = manager.delete(req.params.id);
    return res(result);
  }
}
