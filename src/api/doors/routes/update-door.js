import joi from 'joi';

export default {
  method: 'PUT',
  path: '/doors/{id}',
  config:{
    description: 'Updates a given door',
    tags: ['api', 'doors'],
  },
  handler: (req, res) => {
    return res('it twerks');
  }
}
