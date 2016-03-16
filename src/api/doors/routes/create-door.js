import joi from 'joi';

export default {
  method: 'POST',
  path: '/doors',
  config:{
    description: 'Create doors',
    tags: ['api', 'doors'],
  },
  handler: (req, res) => {
    return res('it twerks');
  }
}
