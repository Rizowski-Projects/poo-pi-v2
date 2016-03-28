import { run, dbActions, runOnTable } from '../../../db';
import createLogger from '../../../logger';
const logger = createLogger('door-manager');

const tableName = 'doors';

(async function(){
  await run(dbActions.createTable(tableName)).catch(e => logger.warn(e.msg));
})();

function runOnDoors(action){
  return runOnTable(tableName, action);
}

const tableActions = {
  createDoor: (obj) => runOnDoors(table => table.insert(obj)),
  getAll: () => runOnDoors(table => table.coerceTo('array')),
  delete: (id) => runOnDoors(table => table.get(id).delete()),
  getDoor: (id) => runOnDoors(table => table.get(id)),
  update: (id, obj) => runOnDoors(table => table.get(id).update(obj))
};

export default {
  createDoor: (door) => tableActions.createDoor(door),
  getAll: () => tableActions.getAll(),
  getStatuses: () =>{
    return tableActions.getAll().map(d =>{
      return {
        id: d.id,
        status: d.status
      }
    })
  },
  getStatus: (id) => tableActions.getDoor(id).then(d => ({ status: d.status })),
  delete: (id) => runOnDoors(table => table.get(id).delete()),
  update: tableActions.update,
  getDoor: tableActions.getDoor
}
