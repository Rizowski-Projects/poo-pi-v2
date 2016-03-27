import rethink from 'rethinkdb';
import createLogger from './logger';
import _ from 'lodash';

import './env';

let logger = createLogger('db');
let dbName = process.env.DB_DB;
let connection;

let dbActions = {
  createDb: (name) => rethink.dbCreate(name),
  createTable: (name) => rethink.tableCreate(name)
};

let runOnTable = runOn('table');

function runOn(entity) {
  return (entityName, action) => action(rethink[entity](entityName)).run(connection);
}

function run(action){
  return action.run(connection);
}

function getTableData(tableName){
  return run(rethink.table(tableName).coerceTo('array'));
}

function printError(e){
  logger.error(e.msg);
}

export default async (s) =>{
  connection = await rethink.connect({ host: process.env.DB_HOST, port: 32772 }).catch(printError);
  await run(dbActions.createDb(dbName)).catch((e) => logger.warn(e.msg));
  return s;
};

export { run, dbActions, runOnTable, getTableData };