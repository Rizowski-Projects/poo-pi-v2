import joi from 'joi';
import id from '../schemas/id';
import payload from '../schemas/door';
import manager from '../managers/door-manager';
import auth from '../prereqs/auth';
import headers from '../schemas/headers';

export default {
  method: 'PUT',
  path: '/doors/{id}',
  config:{
    description: 'Updates a given door',
    tags: ['api', 'doors'],
    pre: [ auth ],
    validate: {
      params: {
        id
      },
      payload,
      headers
    }
  },
  handler: (req, res) => {
    const door = req.payload;
    const id = req.params.id;
    let result = manager.update(id, door);
    return res(result);
  }
}
