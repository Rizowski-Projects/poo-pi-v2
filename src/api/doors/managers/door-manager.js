import { run, dbActions, runOnTable, tables } from '../../../db';
import createLogger from '../../../logger';
const logger = createLogger('door-manager');

const { doors } = tables;

function runOnDoors(action){
  return runOnTable(doors, action);
}

let manager = {
  createDoor: (obj) => runOnDoors(table => table.insert(obj)),
  getAll: () => runOnDoors(table => table.coerceTo('array')),
  getStatuses: () =>{
    return manager.getAll().map(d =>{
      return {
        id: d.id,
        status: d.status
      }
    })
  },
  getStatus: (id) => manager.getDoor(id).then(d => ({ status: d.status })),
  delete: (id) => runOnDoors(table => table.get(id).delete()),
  update: (id, obj) => runOnDoors(table => table.get(id).update(obj)),
  getDoor: (id) => runOnDoors(table => table.get(id)),
  getByParticleId: (id) => runOnDoors(table => table.get(id, { index: 'particleId' }))
};

export default manager;
