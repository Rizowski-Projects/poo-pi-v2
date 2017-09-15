require('babel-polyfill');
try {
  require('source-map-support');
} catch (e) { }
import './env';
import { Server } from 'hapi';
import Good from 'good';
import path from 'path';
import registerPlugins from './plugins';
import { appLogger } from './logger';
import db from './db';

const server = new Server();

server.connection({ port: process.env.PORT || 3000 });

registerPlugins(server)
  .then(db)
  .then(server => {
    appLogger.info(`Server running at: ${server.info.uri}`);
    return server.start().then(() => server);
  }).catch(e => console.error(e.stack || e));
