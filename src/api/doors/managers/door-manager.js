import { run, dbActions, runOnTable, tables } from '../../../db';
import createLogger from '../../../logger';
const logger = createLogger('door-manager');
import _ from 'lodash';

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
        open: d.open
      }
    })
  },
  getStatus: (id) => manager.getDoor(id).then(d => ({ open: d.open })),
  delete: (id) => runOnDoors(table => table.get(id).delete()),
  update: (id, obj) => runOnDoors(table => table.get(id).update(obj)),
  getDoor: (id) => runOnDoors(table => table.get(id)),
  getByParticleId: (id) => {
    return runOnDoors(table => table.getAll(id, { index: 'particleId' }).coerceTo('array'))
      .then(result => {
        if(_.isEmpty(result)){
          return {};
        }
        if(result.length > 0){
          return result[0];
        }
      });
  }
};

export default manager;
