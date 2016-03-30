import joi from 'joi';
import auth from '../prereq/auth';
import headers from '../schemas/headers';
import response from '../schemas/response';
import payload from '../schemas/payload';
import manager from '../../doors/managers/door-manager';

/*
{\"event\":\"female_door_action\",\"data\":\"1\",\"published_at\":\"2016-03-30T14:39:22.302Z\",\"coreid\":\"36002e000947343432313031\"}
*/

export default {
  method: 'POST',
  path: '/particle/webhook',
  config:{
    description: 'The webhook for the partical core/photon/electron to call',
    tags: ['api', 'webhooks', 'particle'],
    pre: [ auth ],
    validate: {
      headers,
      payload
    },
    // response
  },
  handler: (req, res) => {
    return res(manager.getByParticleId(req.payload.coreId));
  }
}
