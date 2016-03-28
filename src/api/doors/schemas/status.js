import joi from 'joi';

export default joi.string().regex(/open|occupied|OOS/).label('status');
