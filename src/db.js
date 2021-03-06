import rethink from 'rethinkdb';
import createLogger from './logger';
import _ from 'lodash';

import './env';

let logger = createLogger('db');
let dbName = process.env.DB_DB;
let connection;

let dbActions = {
  createDb: (name) => rethink.dbCreate(name),
  createTable: (name, options) => rethink.tableCreate(name, options)
};

const tables = {
  doors: 'doors'
}

function print(type){
  return (e) => logger[type](e.msg);
}

let runOnTable = runOn('table');

function run(action){
  return action.run(connection);
}

function runOn(entity) {
  return (entityName, action) => run(action(rethink[entity](entityName)));
}

export default async (s) =>{
  connection = await rethink.connect({ host: process.env.DB_HOST, port: process.env.DB_PORT }).catch(print('error'));
  await run(dbActions.createDb(dbName)).catch(print('warn'));
  await run(dbActions.createTable(tables.doors, { primaryKey: 'particleId' })).catch(print('warn'));
  // await runOnTable('doors', table => table.indexCreate('particleId')).catch(e => logger.warn(e.msg));
  return s;
};

export { run, dbActions, runOnTable, tables };
