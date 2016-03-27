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
  }
}


export default {
  createDoor: (door) => {
    //some validation
    return tableActions.createDoor(door);
  },
  updateStatus: (id, status) => {

  },
  deleteDoor: (id) =>{

  },
  getAll: () =>{
    return tableActions.getAll();
  }
}
