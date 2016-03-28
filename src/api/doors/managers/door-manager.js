import { run, dbActions, runOnTable, getTableData } from '../../../db';
import createLogger from '../../../logger';
const logger = createLogger('door-manager');

const tableName = 'doors';

(async function(){
  await run(dbActions.createTable(tableName)).catch(e => logger.warn(e.msg));
})();

const tableActions = {
  createDoor: (obj) =>{
    return runOnTable(tableName, (table) => {
      return table.insert(obj);
    });
  },
  getAll: () =>{
    return getTableData(tableName);
  },
  delete: (id) =>{
    return runOnTable(tableName, (table) =>{
      let action = table.get(id);
      return action.delete();
    });
  }
};


export default {
  createDoor: (door) => tableActions.createDoor(door),
  updateStatus: (id, status) => {

  },
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
  delete: (id) => tableActions.delete(id)
}
