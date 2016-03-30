import joi from 'joi';

//{\"event\":\"female_door_action\",\"data\":\"1\",\"published_at\":\"2016-03-30T14:39:22.302Z\",\"coreid\":\"36002e000947343432313031\"}

export default joi.object({
  event: joi.string(),
  data: joi.any(),
  'published_at': joi.date(),
  coreid: joi.string() // deviceId
}).label('eventData')
