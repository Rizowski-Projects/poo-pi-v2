import { doors } from '../../../db';
import createLogger from '../../../logger';
import shortId from 'shortid';
const logger = createLogger('door-manager');
import _ from 'lodash';
import boom from 'boom';

function fixId(door){
  let obj = _.omit(door, '_id');
  obj.id = door['_id'];
  return obj;
}

let manager = {
  createDoor: (obj) => {
    return doors.findOneAsync({
      name: obj.name,
      particleId: obj.particleId
    })
    .then((result) =>{
      if(result){
        throw boom.conflict(`Door already exists with ParticleId: ${obj.particleId} and name ${obj.name}`, obj);
      }
      obj['_id'] = shortId.generate();
      return doors.insertAsync(obj);
    })
    .then((result) =>{
      logger.info(result);
    });
  },
  getAll: () => {
    return doors.findAsync({})
      .then((results) => _.map(results, fixId));
  },
  getStatus: (id) => manager.getDoor(id)
    .then((door) => ({ status: door.status })),
  delete: (id) => {
    return doors.removeAsync({ _id: id }, true);
  },
  update: (id, obj) => {
    return doors.findAndModifyAsync({
      query: { _id: id },
      update: { $set: obj }
    })
    .then(fixId);
  },
  getDoor: (id) => {
    return doors.findOneAsync({ id })
      .then((result) =>{
        if(!result){
          throw boom.conflict(`Door does not exist with id: ${id}`);
        }
        let obj = _.omit(result, '_id');
        obj.id = result['_id'];
        return obj;
      });
  },
  getByParticleId: (particleId) => {
    return doors.findOneAsync({ particleId })
      .then(fixId);
  }
};

export default manager;
