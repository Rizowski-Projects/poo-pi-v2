import joi from 'joi';
import id from '../schemas/id';
import payload from '../schemas/door';
import manager from '../managers/door-manager';

export default {
  method: 'PUT',
  path: '/doors/{id}',
  config:{
    description: 'Updates a given door',
    tags: ['api', 'doors'],
    validate: {
      params: {
        id
      },
      payload
    }
  },
  handler: (req, res) => {
    const door = req.payload;
    const id = req.params.id;
    let result = manager.update(id, door);
    return res(result);
  }
}
