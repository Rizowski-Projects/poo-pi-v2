import joi from 'joi';
import auth from '../prereq/auth';
import headers from '../schemas/headers';
import response from '../schemas/response';

export default {
  method: 'POST',
  path: '/particle/webhook',
  config:{
    description: 'The webhook for the partical core/photon/electron to call',
    tags: ['api', 'webhooks', 'particle'],
    pre: [ auth ],
    validate: { headers },
    response
  },
  handler: (req, res) => {
    return res({
      bodybody: 'OH YEAH?',
      payload: 'req.payload'
    });
  }
}
