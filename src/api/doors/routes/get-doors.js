import joi from 'joi';

export default {
  method: 'GET',
  path: '/doors',
  config:{
    description: 'Gets all doors',
    tags: ['api', 'doors'],
  },
  handler: (req, res) => {
    return res('it twerks');
  }
}
