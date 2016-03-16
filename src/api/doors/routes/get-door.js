import joi from 'joi';

export default {
  method: 'GET',
  path: '/doors/{id}',
  config:{
    description: 'Gets a door',
    tags: ['api', 'doors'],
  },
  handler: (req, res) => {
    return res('it twerks');
  }
}
