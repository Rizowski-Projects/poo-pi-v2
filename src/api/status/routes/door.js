import joi from 'joi';

export default {
  method: 'GET',
  path: '/status/{gender}',
  config:{
    description: 'Gets the status of a particular bathroom',
    tags: ['api', 'status'],
    validate: {
      params:{
        gender: joi.string().required()
      }
    }
  },
  handler: (req, res) => {
    return res({
      gender: req.params.gender,
      open: true
    });
  }
}
