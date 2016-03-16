import joi from 'joi';

export default {
  method: 'GET',
  path: '/doors/status',
  config:{
    description: 'Get all doors status',
    tags: ['api', 'doors'],
  },
  handler: (req, res) => {
    return res('it twerks');
  }
}
