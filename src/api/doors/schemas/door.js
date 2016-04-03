import joi from 'joi';
import gender from './genders';
import open from './open';

export default joi.object({
  name: joi.string().min(3).max(32).label('name'),
  gender,
  open,
  particleId: joi.string()
}).label('door');
