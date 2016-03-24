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

// function runOnTable(tableName, action){
//   return runOn('table')(tableName, action);
// }

let runOnTable = runOn('table');

function runOn(entity) {
  return (entityName, action) => action(rethink[entity](entityName)).run(connection);
}

function getTable(tableName){
  return rethink.table(tableName);
}

function run(action){
  return action.run(connection);
}

function printError(e){
  logger.error(e.msg);
}

export default async (s) =>{
  connection = await rethink.connect({ host: process.env.DB_HOST, port: 32772 }).catch(printError);
  await run(dbActions.createDb(dbName)).catch(printError);
  return s;
};

export { run, dbActions, runOnTable };
