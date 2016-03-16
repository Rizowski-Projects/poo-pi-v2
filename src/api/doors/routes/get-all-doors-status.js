import joi from 'joi';

export default {
  method: 'GET',
  path: '/doors/status',
  config:{
    description: 'Get all doors status',
    tags: ['api', 'doors', 'status'],
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
