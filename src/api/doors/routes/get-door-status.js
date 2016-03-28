import joi from 'joi';
import id from '../schemas/id';
import manager from '../managers/door-manager';

export default {
  method: 'GET',
  path: '/doors/{id}/status',
  config:{
    description: 'Gets a door\'s status',
    tags: ['api', 'doors', 'status'],
    validate: {
      params: {
        id
      }
    }
  },
  handler: (req, res) => {
    let result = manager.getStatus(req.params.id).then(d => {
      console.log(d.status);
      return { status: d.status };
    });
    return res(result);
  }
}
