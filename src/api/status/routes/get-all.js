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
  path: '/status',
  config:{
    description: 'Gets the status of all doors',
    tags: ['api', 'status'],
  },
  handler: (req, res) => {
    return res([
      {
        doorNumber: 1,
        gender: 'male',
        open: fakeOpen()
      },
      {
        doorNumber: 2,
        gender: 'female',
        open: fakeOpen()
      },
      {
        doorNumber: 3,
        gender: 'other',
        open: fakeOpen()
      }
    ]);
  }
}
