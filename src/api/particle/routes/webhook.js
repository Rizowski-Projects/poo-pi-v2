import joi from 'joi';

export default {
  method: 'POST',
  path: '/particle/webhook',
  config:{
    description: 'The webhook for the partical core/photon/electron to call',
    tags: ['api', 'webhooks', 'particle']
  },
  handler: (req, res) => {
    return res({
      body: req.body,
      payload: req.payload
    });
  }
}
