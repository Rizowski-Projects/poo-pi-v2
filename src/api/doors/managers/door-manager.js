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
  getStatus: (id) => runOnDoors(table => table.get(id))
};

export default {
  createDoor: (door) => tableActions.createDoor(door),
  updateStatus: (id, status) => {  },
  deleteDoor: (id) => tableActions.delete(id),
  getAll: () => tableActions.getAll(),
  getStatuses: () =>{
    return tableActions.getAll().map(d =>{
      return {
        id: d.id,
        status: d.open
      }
    })
  },
  getStatus: (id) => tableActions.getStatus(id)
    .then(d => { status: d.status }),
  delete: (id) => tableActions.delete(id),
}
