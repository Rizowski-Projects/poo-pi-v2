import joi from 'joi';

export default {
  method: 'GET',
  path: '/doors/{id}/status',
  config:{
    description: 'Gets a door\'s status',
    tags: ['api', 'doors', 'status'],
  },
  handler: (req, res) => {
    return res('it twerks');
  }
}
