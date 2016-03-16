import joi from 'joi';

export default {
  method: 'DELETE',
  path: '/doors/{id}',
  config:{
    description: 'Deletes a door',
    tags: ['api', 'doors'],
  },
  handler: (req, res) => {
    return res('it twerks');
  }
}
