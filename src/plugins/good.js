import good from 'good';
import { appLogger as logger } from '../logger';
import goodBunyan from 'good-bunyan';

export default {
  register: good,
  options: {
    opsInterval: 5000,
    requestHeaders: true,
    reporters: [{
      reporter: goodBunyan,
      config:{
        logger,
        levels: {
          ops: 'debug',
          response: 'info',
          log: 'info',
          error: 'error',
          request: 'info'
        }
      },
      events: {
        response: '*',
        log: '*',
        error: '*'
      }
    }]
  }
};
