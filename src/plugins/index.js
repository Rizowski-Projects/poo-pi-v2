import Promise from 'bluebird';
import { appLogger } from '../logger';

const plugins = [
  require('blipp'),
  require('inert'),
  require('vision'),
  require('./hapiRouter'),
  require('./good'),
  require('./hapiSwaggered'),
  require('./hapiSwaggeredUi')
];

export default server => {
  appLogger.trace(plugins);
  return server.register(plugins).then(() => server);
};
