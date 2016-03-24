import { run, dbActions, runOnTable } from '../../../db';
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
  }
}


export default {
  createDoor: (door) => {
    //some validation
    return tableActions.createDoor({ name: 'door1', type: 'not-working' });
  },
  updateStatus: (id, status) => {

  },
  deleteDoor: (id) =>{

  }
}
