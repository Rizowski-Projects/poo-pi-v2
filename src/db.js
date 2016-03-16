import rethink from 'rethinkdb';
import createLogger from './logger';
import _ from 'lodash';
import Promise from 'bluebird';

import './env';

let logger = createLogger('db');
let dbName = process.env.DB_DB;

function setupDatabase(conn){
  return rethink
    .dbCreate(dbName)
    .run(conn)
    .catch(e => logger.info(e.msg))
    .then(() =>{
      let db = rethink.db(dbName);
      let tables = [db.tableCreate('doors')];
      return Promise
        .map(tables, q => q.run(conn))
        .catch(e => logger.info(e.msg));
    });
}

function printConnected(conn){
  logger.info('DB connected...');
  return conn;
}

export default () =>{
  return rethink
    .connect({
      host: process.env.DB_HOST
    })
    .then(printConnected)
    .then(setupDatabase)
    .catch(e => logger.error(e));
};
