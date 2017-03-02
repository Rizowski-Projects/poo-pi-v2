import Mongo from 'mongojs';
import createLogger from './logger';
import Promise from 'bluebird';

import './env';

Promise.promisifyAll([
  require('mongojs/lib/collection'),
  require('mongojs/lib/database'),
  require('mongojs/lib/cursor')
]);

const logger = createLogger('db');
const uri = process.env.DB_URI;
const collections = ['doors'];

logger.info(`Connecting to ${uri}`);
const db = Mongo(uri, collections);

db.on('connect', () =>{
  logger.info('Connected');
});

db.on('error', (e) =>{
  logger.error(e);
});

const doors = db.doors;

export default {
  db, doors
};
