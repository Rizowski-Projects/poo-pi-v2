import joi from 'joi';

function fakeOpen(){
  let min = 1;
  let max = 10;
  let rand = Math.floor(Math.random() * (max - min + 1)) + min;
  let result = rand % 2;
  return result === 0;
}

export default {
  method: 'GET',
  path: '/doors/{id}',
  config:{
    description: 'Gets a door',
    tags: ['api', 'doors'],
    validate: {
      params:{
        doorNumber: joi.number().required()
      }
    }
  },
  handler: (req, res) => {
    return res({
      doorNumber: req.params.id,
      gender: 'female',
      open: fakeOpen()
    });
  }
}
