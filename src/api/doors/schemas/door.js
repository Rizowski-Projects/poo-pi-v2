import joi from 'joi';
import gender from './genders';
import status from './status';

export default joi.object({
  name: joi.string().min(3).max(32).label('name'),
  gender,
  status,
}).label('door');
